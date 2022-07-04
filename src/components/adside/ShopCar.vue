<template>
  <div class="service">
    <!-- 侧边栏购物车 -->
    <header>
      <h3>购物车</h3>
      <fork @click.native="handle()"></fork>
    </header>
    <p class="shopCar">
      <span>共 {{ shopCar.length }} 件宝贝</span>
      <button @click="$router.push('/shopcar')">管理</button>
    </p>
    <div class="leary">
      <ul>
        <li v-for="(shop, index) in shopCar" :key="index">
          <img :src="shop.img" />
          <div>
            <h4>{{ shop.title }}</h4>
            <span>数量: {{ shop.num }} </span>
            <p>
              ￥ {{ shop.price }} <span>￥{{ shop.special_price }} </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Fork from "./Fork.vue";
import { getShopCar } from "@/api/shopcar.js";
export default {
  components: {
    Fork,
  },
  name: "ShopCar",
  data() {
    return {
        close:true,
        shopCar:[],
    };
  },
  methods: {
    handle() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
    },
     getShopCar() {
      // Id用户得id
      let customer_id = this.$store.state.user.customer_id;
      let data = {
        customer_id,
      };
      getShopCar(data).then((data) => {
        console.log(data);
        if (data.code == 402) {
          return;
        } else {
          for (let i = 0; i < data.data.length; i++) {
            if (data.data.length <= 0) {
              break;
            } else {
              data.data[i].params = JSON.parse(data.data[i].params);
              console.log(data.data);
              break;
            }
          }
          this.shopCar = data.data;
        }
      });
    },
  },
  created() {
    this.getShopCar();
  },
};
</script>

<style lang="less" scoped>
.service {
  position: relative;
  width: 300px;
  height: 100%;
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 10px 10px 10px 5px #333;
  overflow-y: scroll;

  .leary {
    width: 90%;
    margin: 20px auto;
    text-align: center;

    ul {
      height: 100%;
      width: 100%;

      li {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          width: 60px;
          height: 60px;
        }

        div {
          margin-left: 10px;
          flex: 1;
          text-align: left;
          font-size: 12px;

          h4 {
            line-height: 25px;
            height: 25px;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p {
            color: #000;

            span {
              color: #bdb6b3;
              text-decoration-line: line-through;
            }
          }
        }
      }
    }
  }
}

header > h3 {
  width: 300px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #000;
  color: #fff;
}

.shopCar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background-color: #ccc;
  padding: 0 10px;
  font-size: 12px;

  button {
    width: 50px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #ddd;
  }
}
</style>
