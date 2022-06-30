<template>
  <div class="total">
    <!-- 左部分 -->
    <div class="left">
      <!-- 地址 -->
      <div class="address">
        <h1>结算</h1>
        <div class="empty">
          <div>收货地址</div>
          <div class="add" @click="isShow = true">
            <i class="el-icon-circle-plus"></i>
            新增收货地址
          </div>
        </div>
        <div class="not-empty">
          <div class="title">收货地址</div>
          <div class="content">
            <div class="defaultAddress">
              <div><span>收货人： </span> {{ consignee }}</div>
              <div>
                <span style="margin-right: 20px">地址： </span> {{ address }}
              </div>
            </div>
            <div class="right">
              <div class="d_address">默认地址</div>
              <div class="defaultContent" @click="showMore = true">
                <div class="editor">编辑</div>
                <div>/</div>
                <div class="more">更多</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="address_form" v-show="isShow">
        <!-- 地址组件 -->
        <address-form @closeAdd="chooseAddress" :isShow="isShow"></address-form>
      </div>
      <!-- 选择地址 -->
      <div class="moreContent" v-show="showMore">
        <div class="title">
          <h2>选择您的收货地址</h2>
          <div class="cancel" @click="showMore = false">
            <i class="el-icon-circle-close"></i>
          </div>
        </div>
        <li v-for="(item, index) in userAdress" :key="index">
          <div class="checkRa">
            <input
              type="radio"
              name="address"
              v-model="selectAddress"
              :value="index"
            />
          </div>
          <div class="defaultAddress">
            <div>
              <span>收货人： </span> {{ item.name + "-" + item.tel }}
              <span class="d_address" v-if="item.prime">默认地址</span>
            </div>
            <div>
              <span style="margin-right: 20px">地址： </span> {{ item.address }}
            </div>
          </div>
          <div class="right">
            <div @click="num = index">编辑</div>
            <div v-if="!item.prime" @click="setDefault(item)">设为默认地址</div>
          </div>
        </li>
        <div class="submit">
          <div class="add" @click="(showMore = false), (isShow = true)">
            <i class="el-icon-circle-plus"></i>
            新增收货地址
          </div>
          <el-button class="sure" type="primary" @click="changeAddress"
            >确认</el-button
          >
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="shopDetail">
        <div class="title">商品明细 (共{{ shopNum }}件)</div>
        <ul class="orderList">
          <li v-for="item in shopDetail" :key="item.id">
            <div class="image"><img :src="item.img" /></div>
            <div class="size">
              <p class="type" style="color: #000">{{ item.title }}</p>
              <p class="color">
                颜色：{{ item.params[0] }}，尺码：{{ item.params[1] }}
              </p>
              <p class="num">数量：{{ item.num }}</p>
            </div>
            <div class="price">
              <p class="final_price">￥ {{ item.special_price }}</p>
              <p class="init_price">￥ {{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右部分 -->
    <div class="rigth">
      <div class="order_total">
        <div class="Order">
          <h1>请选择支付方式</h1>
          <div class="type">
            <div class="wechat">
              <img
                src="@/assets/images/wx.jpeg"
                width="180px"
                height="150px"
                alt=""
              />
            </div>
            <div class="alipay">
              <img
                src="@/assets/images/zfb.jpeg"
                width="180px"
                height="120px"
                alt=""
              />
            </div>
          </div>
        </div>
        <ul>
          <li class="title">商品小计</li>
          <li>
            <span>商品总价：</span> <span>￥ {{ total }}</span>
          </li>
          <li>
            <span>优惠：</span> <span>￥ {{ difference }}</span>
          </li>
          <li><span>其他：</span><span>+￥0</span></li>
          <li class="pay">
            <div>
              <div>总计</div>
              <div class="payPrice">￥ {{ discounts }}</div>
            </div>
            <div>
              <el-button type="danger" @click="submitOrder">提交订单</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserAddress, setDefaultAddress, } from "@/api/address.js";
import { addOrder,payOrder} from '@/api/shopcar.js'
export default {
  name: "PayTotal",
  data() {
    return {
      selectAddress: 0, // 所选择的地址
      isShow: false,
      address_form: "false",
      shopNum: 0,
      shopDetail: [],
      // total: 0,
      showMore: false,
      consignee: "",
      address: "",
      userAdress: [], //用户地址
    };
  },
  methods: {
    changeAddress() {
      // this.getUserAddress()
      console.log(this.userAdress[this.selectAddress]);
      let choseaddress = this.userAdress[this.selectAddress];
      this.consignee = choseaddress.name + "-" + choseaddress.tel;
      this.address = choseaddress.address;
      this.showMore = false;
    },
    setDefault(item) {
      //设置为默认地址
      console.log(item);
      let data = {
        // id, prime, customer_id
        customer_id: 1,
        prime: 1,
        id: item.id,
      };
      setDefaultAddress(data).then((data) => {
        console.log(data);
      });
    },
    chooseAddress() {
      this.isShow = false;
    },
    getOrderTotal(str) {
      let result = 0;
      this.shopDetail.forEach((item) => {
        result += (item[str] - 0) * item["num"];
      });
      return result;
    },
    // 提交订单
    submitOrder() {
      let store_id_list = [];
      this.shopDetail.forEach((item) => {
        store_id_list.push(item.store_id);
      });
      // console.log( store_id_list); 过滤店铺重复
      store_id_list = [...new Set(store_id_list)];
      // console.log( store_id_list);
      let order = [];
      store_id_list.forEach((el) => {
        let type = {};
        type.store_id = el;
        type.skus = [];
        type.money = 0;
        this.shopDetail.forEach((item) => {
          if (item.store_id == el) {
            let obj = {};
            type.money += item.special_price - 0;
            obj.sku_id = item.sku_id;
            obj.price = item.price;
            obj.actual_price = item.special_price;
            obj.num = item.num;
            type.skus.push(obj);
          }
        });
        order.push(type);
      });
      console.log(this.$store.state.user.username);

      let idLocal = [];
      order.forEach((item, index) => {
        //设置code订单编号(不能重复)
        let code =
          this.$store.state.user.username + index + Date.now();
        addOrder({
          code,
          store_id: item.store_id,
          customer_id: 1,
          money: this.total,
          skus: JSON.stringify(item.skus),
        }).then((res) => {
          if (res.code == 200) {
            idLocal.push(res.orderId);
            // localStorage.setItem("idLocal", JSON.stringify(idLocal));
          }
        });
      });
      // 跳转支付宝
      payOrder({
        outTradeNo:
          this.$store.state.user.username  + Date.now(),
        totalAmount: this.discounts,
        subject: this.$store.state.user.username + "'s shopping order",
        body:
          this.$store.state.user.username +
          `is paying for ${this.shopDetail[0].title} ...`,
      }).then((res) => {
        if (res.code == 200) {
          this.$message.success("jumping to alipay page");
          setTimeout(() => location.replace(res.data), 1000);
        }
      });
          //删除购物车
                // this.shopDetail.forEach(item => {
                //     this.$store.dispatch('deleteSqlShop',{id:item.id})
                // })
    },
    getUserAddress() {
      let data = {
        customer_id: 1,
      };
      // console.log(data);
      getUserAddress(data).then((data) => {
        console.log(data);
        this.userAdress = data.data;
        let address = this.userAdress.filter((item) => item.prime == true);
        this.consignee = address[0].name + "-" + address[0].tel;
        this.address = address[0].address;
      });
    },
    getShopDetail() {
      var arr = this.$store.state.shopcarSet.shopcarSet;
      console.log('arr',arr);
      console.log(this.$store.state.shopcarSet.shopcarSet);
      // console.log(this.$store.state.shopcarSet.order);
      // for (let i = 0; i < arr.length; i++) {
      //   console.log(arr[i].params);
      //   arr[i].params = JSON.parse(arr[i].params);
      //   break;
      // }
      this.shopDetail = arr;
    },
  },
  created() {
    this.getUserAddress();
    this.getShopDetail();
  },
  computed: {
    total() {
      return this.getOrderTotal("price");
    },
    discounts() {
      return this.getOrderTotal("special_price");
    },
    difference() {
      return this.total - this.discounts;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
.total {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 75vw;
  // margin: 0 auto;

  .left {
    box-sizing: border-box;

    .address {
      width: 50vw;
      position: relative;
      h1 {
        padding: 10px;
        font-weight: 500;
      }
      .empty {
        color: #ffffff;
        font-size: 16px;
        width: 100%;
        background-color: #4c4c4c;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
        .add {
          cursor: pointer;
        }
      }

      .not-empty {
        font-size: 16px;
        .title {
          box-sizing: border-box;
          color: #fff;
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding: 0 20px;

          background-color: #4c4c4c;
        }

        .content {
          border: 1px solid #cccccc;
          display: flex;
          justify-content: space-between;

          .defaultAddress {
            padding: 20px 25px;
            width: 85%;
            height: 100px;

            div {
              height: 30px;
              line-height: 30px;

              span {
                color: #999999;
                margin-right: 10px;
              }
            }
          }

          .right {
            height: 100%;
            padding-top: 30px;

            .d_address {
              background-color: #000;
              color: #ffffff;
              font-size: 12px;
              width: 55px;
              padding: 2px;
              border-radius: 2px;
            }

            .defaultContent {
              display: flex;
              font-size: 15px;
              color: #999999;

              div {
                margin-right: 5px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .shopDetail {
      width: 100%;
      font-size: 15px;
      box-sizing: border-box;

      .title {
        box-sizing: border-box;

        width: 100%;
        margin-top: 4px;
        padding-left: 20px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        background-color: #4c4c4c;
        color: #fff;
      }

      .orderList {
        box-sizing: border-box;

        margin: 0;
        width: 100%;
        padding: 20px;
        border: 1px solid #cccccc;

        li {
          height: 120px;
          display: flex;
          .image,
          .image img {
            width: 100px;
            height: 100px;
            margin: 5px 10px;
          }

          .size {
            width: 60%;
            padding: 15px 10px;

            P {
              margin-top: 5px;
              color: #999999;
            }
          }

          .price {
            padding: 5px;
            width: 20%;
            padding: 30px 10px;
            text-align: end;
            p {
              margin: 5px;
            }

            .final_price {
              font-size: 16px;
              font-weight: bolder;
            }

            .init_price {
              font-size: 14px;
              color: #4c4c4c;
              text-decoration: line-through #999999;
            }
          }
        }
      }
    }
  }
  .rigth {
    .order_total {
      width: 25vw;
      margin-top: 82px;
      padding: 0 20px;
      box-sizing: border-box;
      .Order {
        width: 100%;
        margin: 50px auto;

        .type {
          display: flex;
          align-items: center;

          div {
            margin-top: 10px;
            width: 180px;
            height: 120px;
            overflow: hidden;
          }

          .wechat {
            height: 120px;
            overflow: hidden;

            img {
              position: relative;
              top: -20px;
            }

            cursor: not-allowed;
          }

          .alipay {
            border: 2px #999999 solid;
          }
        }
      }

      ul {
        box-sizing: border-box;

        width: 100%;
        border: 1px solid #cccccc;

        li {
          height: 50px;
          line-height: 50px;
          margin: 0 10px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          font-size: 13px;
        }

        .title {
          font-size: 16px;
          margin: 0;
          padding: 0 10px;
          background-color: #f6f6f6;
        }

        .pay {
          border: none;
          height: 100px;

          button {
            width: 140px;
            background-color: #ed4025;
            height: 40px;
            margin-top: 30px;
            border-radius: 0;
          }

          .payPrice {
            line-height: 0;
            font-size: 18px;
            font-weight: bolder;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
.moreContent {
  position: fixed;
  width: 700px;
  /*height: 460px;*/
  background-color: #fff;
  box-shadow: 2px 2px 5px #cccccc;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 20px;

  .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #e6e6e6;

    div {
      font-size: 20px;
      cursor: pointer;
    }

    h2 {
      height: 50px;
    }
  }

  li {
    border-bottom: 2px solid #e6e6e6;
    display: flex;

    .checkRa {
      line-height: 100px;

      input {
        width: 15px;
        height: 15px;
      }
    }

    .defaultAddress {
      padding: 20px 25px;
      width: 85%;
      height: 100px;

      .d_address {
        background-color: #000;
        color: #ffffff;
        font-size: 12px;
        width: 55px;
        padding: 2px;
        border-radius: 2px;
      }

      div {
        height: 30px;
        line-height: 30px;

        span {
          color: #999999;
          margin-right: 10px;
        }
      }
    }

    .right {
      height: 100px;
      padding-top: 30px;
      div {
        cursor: pointer;
      }
    }
  }

  .submit {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: end;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .add {
      cursor: pointer;
    }
    button {
      padding: 0 25px;
      height: 40px;
      line-height: 38px;
      border: 1px solid #979797;
      border-radius: 0;
      margin: 10px 10px;
    }

    .sure {
      background-color: #4c4c4c;
      color: #ffffff;
    }
  }
}
</style>
