<template>
  <div>
    <div class="shopcar fixed-width">
      <h3>
        <span>我的购物车</span>
        <i class="total-num">共{{ shopCar.length }}件</i>
      </h3>
      <div class="shopcar-top">
        <label class="checkbox-label checkbox-all">
          <input
            type="checkbox"
            v-model="isAll"
            @change="changeAll"
            class="checkbox-input"
          />
          <span>全选</span>
        </label>
      </div>
      <ul class="car-list fixed-width">
        <li class="car-item" v-for="(item, index) in shopCar" :key="index">
          <div class="checkbox-item">
            <label class="checkbox-label checkbox-one">
              <input
                type="checkbox"
                :value="item"
                v-model="checkeds"
                class="checkbox-input"
              />
            </label>
          </div>
          <div class="showImg">
            <img :src="item.img" />
            <!-- <img :src="a" alt=""> -->
          </div>
          <div class="infos">
            <div class="info-top">
              <div class="fl">
                <span class="info-name">{{ item.title }}</span>
                <p>
                  <span
                    >颜色: {{ item.params[0] }} ; 尺码: {{ item.params[1] }}
                  </span>
                </p>
              </div>
              <div class="fr">
                <div class="info-price">￥ {{ item.price }}</div>
                <div class="under-info-price">￥ {{ item.special_price }}</div>
                <a class="delete-one" @click="deleteShopCar(item)">删除</a>
              </div>
            </div>
            <div class="info-bom">
              <div class="fl">
                <span>数量 :</span>
                <div class="num">
                  <button @click="removeShopCar(item)">-</button>
                  <input type="text" :value="item.num" disabled />
                  <button @click="add(item)">+</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car-foot">
      <div class="sum-main fixed-width">
        <div class="left">
          <div class="fl">
            <label class="checkbox-label checkbox-all"> </label>
          </div>
          <div class="fr">
            <span>总价</span>
            <div class="total-price">￥ {{ totalPrice }}</div>
          </div>
        </div>
        <div class="car-pay">
          <a @click="payTotal">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import a from "@/assets/images/logo.png";
import { getShopCar, deleteShopCar, addShopCar } from "@/api/shopcar.js";
export default {
  name: "ShopCar",
  data() {
    return {
      // 多选数组
      checkeds: [],
      flag: true,
      shopCar: [],
      totalPrice: 0,
      isAll: false, // 是否全选
    };
  },
  methods: {
    // 跳转结算页面
    payTotal() {
      // console.log(this.checkeds);
      if (this.checkeds.length <= 0) {
        return;
      } else {
        this.$store.dispatch("shopcarSet/shopcarSet", this.checkeds);
      }
      this.$router.push("/payTotal");
    },
    getShopCar() {
      // Id用户得id
      let customer_id = this.$store.state.user.customer_id;
      let data = {
        customer_id,
      };

      getShopCar(data).then((data) => {
        // if(data.length<=0){
        //   console.log('购物车为空');
        //   return;
        // }else{
        //  let b = data.data.map((item) => {
        // console.log(data);
        if (data.code == 402) {
          return;
        } else {
          for (let i = 0; i < data.data.length; i++) {
            if (data.data.length <= 0) {
              break;
            } else {
              data.data[i].params = JSON.parse(data.data[i].params);
              // console.log(data.data);
              break;
            }
          }
          // console.log('shopCar数据',data.data);
          this.shopCar = data.data;
          let shopCarlength = this.shopCar.length
          this.$bus.$emit('shopCarlength',shopCarlength)
        }
      });
    },

    // 减一
    removeShopCar(item) {
      // console.log(item);
      var items = item;
      if (item.num <= 1) {
        return;
      } else {
        items.num--;

        let datas = {
          id: item.id,
        };
        deleteShopCar(datas);
        addShopCar(items).then((data) => {
          item = data;
          this.getShopCar();
        });
      }
    },
    // 加一
    add(item) {
      console.log(item);
      var items = item;
      items.num++;

      console.log(item);

      //  item.params = JSON.parse(item.params)

      let datas = {
        id: item.id,
      };
      deleteShopCar(datas);
      addShopCar(items).then((data) => {
        item = data;
        this.getShopCar();
      });
      console.log(item);
    },
    // 删除
    deleteShopCar(item) {
      let data = {
        id: item.id,
      };
      deleteShopCar(data).then((data) => {
        console.log("删除成功");
        this.getShopCar();
      });
    },
    changeAll() {
      if (this.isAll) {
        this.checkeds = this.shopCar;
      } else {
        this.checkeds = [];
      }
    },
  },
  created() {
    this.getShopCar();
  },
  watch: {
    checkeds: {
      deep: true, // 对象数组,深度监听
      handler(val) {
        let res = 0;
        // 求总价钱
        val.forEach((item) => {
          res += item.num * item.price;
        });
        this.totalPrice = res;
        // 根据用户选中列表项,判断选否需要选中全选.
        if (val.length === this.shopCar.length) {
          this.isAll = true;
        } else {
          this.isAll = false;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.checkbox-label {
  .checkbox-input {
    margin-right: 0.3vw;
  }
}
.fixed-width {
  max-width: 1200px;
  margin: 30px auto;
  overflow: hidden;
}
.shopcar {
  margin-bottom: 50px;
  h3 {
    position: relative;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      display: block;
      width: 55px;
      height: 4px;
      background-color: #000;
      span {
        font-size: 28px;
        font-weight: 600;
        vertical-align: middle;
        overflow: hidden;
      }
    }
    .total-num {
      font-size: 12px;
      color: #999;
      font-style: normal;
      margin-left: 10px;
      display: inline-block;
      line-height: 35px;
      vertical-align: bottom;
      font-weight: 400;
    }
  }
}
.info-name {
  font-size: 22px;
  font-weight: 800;
}
.car-list {
  .car-item {
    width: 100%;
    height: 140px;
    border-bottom: 1px solid #c3c3c3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
    .checkbox-item {
      width: 40px;
    }
    .showImg {
      margin: 0 25px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .infos {
      flex: 1;
      overflow: hidden;
      margin: 20px 0;
      p {
        margin: 0;
      }
      .info-top {
        overflow hidden .fl {
          float: left;
          .info-name {
            font-size: 18px !important;
            margin: 0;
          }
          p {
            height: 22px;
            margin: 16px;
          }
        }
        .fr {
          float: right;
          .info-price {
            font-size: 16px;
            color: #000;
            margin-bottom: 1vh;

            font-weight: 500;
          }
          .under-info-price {
            text-decoration-line: line-through;
            color: #777;
            text-align: right;
            margin-bottom: 1vh;
          }
          .delete-one {
            padding-left: 1vw;
            cursor: pointer;
          }
        }
      }
      .info-bom {
        overflow: hidden;

        a {
          color: #000;
        }
        .fl {
          display: flex;
          justify-content: flex-start;
          span {
            margin-right: 20px;
          }
          .num {
            button {
              cursor: pointer;
              width: 32px;
              height: 26px;
              background-color: #fff;
              border: 1px solid rgb(196, 187, 187);
            }
            input {
              width: 78px;
              height: 22px;
              text-align: center;
            }
          }
        }
        .fr {
          float: right;
        }
      }
    }
  }
}
.car-foot {
  width: 100%;
  height: 70px;
  background-color: #3e3e3e;
  .left {
    float: left;
    width: 1000px;
    height: 40px;
    border-right: 3px solid #999;
    margin-top: 15px;
    color: #fff;
    margin-right: 20px;
    .fl {
      float: left;
      line-height: 40px;
      font-size: 12px;
      .checkbox-label {
        margin-right: 20px;
      }
      a {
        color: #fff;
      }
    }
    .fr {
      float: right;
      line-height: 40px;
      margin-right: 25px;
      font-size: 13px;
      .total-price {
        display: inline-block;
        line-height: 30px;
        font-size: 22px;
      }
      span {
        display: block;
        line-height: 10px;
        font-size: 12px;
      }
    }
  }
  .car-pay {
    float: right;
    width: 150px;
    height: 40px;
    margin-top: 15px;
    a {
      cursor: pointer;
      display: inline-block;
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #ed4025;
      color: #fff;
    }
  }
}
</style>
