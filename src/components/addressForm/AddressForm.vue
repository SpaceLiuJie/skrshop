<template>
  <div class="address-form" v-show="isShow">
    <el-form :inline="true" class="demo-form-inline">
      <div class="goodsAddress">
        <h2>收货地址</h2>
        <span class="cancel" @click="$emit('closeAdd')">
          <i class="el-icon-circle-close"></i>
        </span>
      </div>
      <div class="info">
        <el-form-item label="收货人：">
          <el-input v-model="username" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input v-model="userphone" placeholder="手机号码"></el-input>
        </el-form-item>
      </div>
      <div class="city">
        <el-form-item size="mini" label="国家/地区">
          <el-select v-model="china" placeholder="请选择">
            <el-option :label="china" :value="china"></el-option>
          </el-select>
        </el-form-item>
        <!-- 省份 -->
        <el-form-item size="mini" label="省/直辖市">
          <el-select
            @change="changeProvinces(provinces_chose)"
            v-model="provinces_chose"
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in cityData"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- =市区 -->
        <el-form-item size="mini" label="市">
          <el-select
            @change="changeCity(city_chose)"
            v-model="city_chose"
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in provinces"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 县城 -->
        <el-form-item size="mini" label="区/县">
          <el-select
            @change="changeCounty(county_chose)"
            v-model="county_chose"
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in city"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="detail">
        <el-form-item label="详细地址：">
          <el-input v-model="detailAddress" placeholder="详细地址"></el-input>
        </el-form-item>
      </div>
      <div class="default">
        <input v-model="checked" type="checkbox" /> 设置为默认地址
      </div>
      <div class="back">
        <el-form-item>
          <el-button @click="$emit('closeAdd')">返回</el-button>
          <el-button type="primary" @click="onSubmit">保存地址</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { addressData } from "@/plugins/addressData/data.js";
import { addUserAddress } from "@/api/address.js";
export default {
  props: {
    isShow: Boolean,
    id: Number,
  },
  name: "AddressForm",
  data() {
    return {
      checked: false,
      china: "中国大陆",
      cityData: [], // 总数据
      provinces_chose: "", //选择的省份
      china: "中国大陆",
      provinces: "", // 省份中的数据
      city: "",
      city_chose: "",
      county: "",
      county_chose: "",
      username: "",
      userphone: "",
      detailAddress: "",
      address: "",
      // prime:false,
    };
  },
  methods: {
    changeProvinces(item) {
      this.city_chose = "";
      this.county_chose = "";
      console.log(item);
      for (let key in this.cityData) {
        if (this.cityData[key].name == item) {
          this.provinces = this.cityData[key]["child"];
          break;
        }
      }
      console.log(this.provinces);
    },
    changeCity(item) {
      this.county_chose = "";
      console.log(item);
      for (let key in this.provinces) {
        if (this.provinces[key].name == item) {
          this.city = this.provinces[key]["child"];
          break;
        }
      }
      console.log(this.city);
    },
    changeCounty(item) {
      // console.log(item);
      // for (let key in this.city) {
      //   if (this.city[key].name == item) {
      //     this.county = this.city[key]["child"];
      //     break;
      //   }
      // }
      // console.log(this.county);
    },

    onSubmit() {
      // console.log(`${this.china}-${this.provinces_chose}-${this.city_chose}-${this.county_chose} `);
      //  customer_id, name, tel, address, prime
      this.address = `${this.china}-${this.provinces_chose}-${this.city_chose}-${this.county_chose} `;
      this.checked == false ? 0 : 1;
      let data = {
        customer_id: "1",
        name: this.username,
        tel: this.userphone,
        address: this.address,
        prime: this.checked,
      };
      addUserAddress(data).then((data) => {
        console.log(data);
        this.username = "";
        this.userphone = "";
        // this.address = "";
        this.prime = "";
        this.detailAddress='';
        this.provinces_chose='';
        this.city_chose='';
        this.county_chose='';
        this.$emit('closeAdd')
      });
    },
  },
  created() {
    this.cityData = addressData;
    console.log(addressData);
  },
};
</script>

<style lang="less" scoped>
.address-form {
  box-sizing: border-box;
  padding: 20px;
  width: 700px;
  height: 460px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(238, 238, 238);
  z-index: 10;
  .goodsAddress {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgb(193, 193, 193);

    .cancel {
      i {
        cursor: pointer;
      }
    }
  }
  .info {
    padding-top: 20px;
  }
  .city {
    .el-form-item {
      width: 20%;
    }
  }
  .detail {
    .el-form-item {
      width: 90px;
      .el-input {
        width: 600px;
      }
    }
  }
  .default {
    margin-left: 10px;
    font-size: 14px;
    vertical-align: middle;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(193, 193, 193);
  }
  .back {
    padding-top: 10px;
    float: right;
  }
}
</style>
