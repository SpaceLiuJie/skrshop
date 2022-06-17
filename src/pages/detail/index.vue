<template>
  <div class="detail">
    <h1>相关商品展示</h1>
    <el-button type="success" @click="$router.back()">返回</el-button>
    <div class="item">
      <magnifying-glass :imgsrc="shop.img_list_url" :width="'400px'"></magnifying-glass>
      <div class="dec">
        <p class="title">{{ shop.title }}</p>
        <p>{{ shop.price }}</p>
        <el-button type="danger">加入购物车</el-button>
      </div>
    </div>
    <div class="list">
      <shop-item @onShopClick="replaceLink" v-for="item in shopList" :shop="item" :key="item.Id" />
    </div>
  </div>
</template>

<script>
import { getDetail, getShopList } from '../../api/detail.js'
export default {
  name: "Detail",
  data() {
    return {
      shop: {},
      shopList: [],
    }
  },
  methods: {
    getDetail() {
      let id = this.$route.params.id;
      getDetail(id).then((data) => {
        this.shop = data[0]
      });
    },
    getTypeOneShop() {
      let type = this.$route.params.type_one;
      getShopList(type).then((data) => {
        console.log("获取相关商品");
        this.shopList = data;
      });
    },
    replaceLink(e, shop) {
      console.log('--------------------------------',shop);
      this.$router.replace(`/detail/${shop.Id}/${shop.type_one}`);
    }
  },
  created() {
    this.getDetail();
    this.getTypeOneShop();
  },

  // 总是显示上一次的相关商品，慢一步
  // beforeRouteUpdate(to, from, next) {
  //   this.getDetail()
  //   this.getTypeOneShop()
  //   next()
  // },
  // watch 监听属性
  watch: {
    // 监听路由地址变化
    $route: {
      deep: true,
      handler(to, from) {
        console.log("---------------------watch route----------------");
        console.log(to);
        this.getDetail()
        // this.getTypeOneShop()
      }
    }
  }
};
</script>

<style scoped>
</style>