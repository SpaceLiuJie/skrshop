<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside" type="card" :change="carouselChange" height="300px" class="carousel">
      <el-carousel-item v-for="(src, index) in imgs" :key="index">
        <img :src="src" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 商品列表渲染 -->
    <div class="list">
      <shop-item @onShopClick="linkDetail" v-for="(item, index) in shopList" :key="index" :shop="item"
        :imgHeight="'275px'"></shop-item>
    </div>
    <!-- 返回顶部 -->
    <back-top />
  </div>
</template>

<script>
// import '../../api/home.js'
// import "api/home.js";
// import "@/api/home.js";
import a from "@image/2053522.jpg";
import b from "@image/2053563.jpg";
import c from "@image/2053695.jpg";
import d from "@image/2053664.jpg";
import e from "@image/2053901.jpg";
import f from "@image/2053888.jpg";
import { getShopList } from "api/home.js";

let isButton = false; //控制是否到底 true 到底 false没到

export default {
  name: "Home",
  data() {
    return {
      imgs: [a, b, c, d, e, f],
      shopList: [],
      page: 1,
    };
  },
  methods: {
    carouselChange() {
      console.log("aaaaa");
    },
    getShopList() {
      getShopList(this.page).then((data) => {
        this.shopList = this.shopList.concat(data);
      });
    },
    scrollHandle() {
      // 页面高度
      let pageH = getComputedStyle(document.querySelector("#app"))["height"];
      pageH = parseInt(pageH);
      // 视图窗口高度
      let h = innerHeight;
      // 滚动条滚动高度
      let H = document.documentElement.scrollTop || document.body.scrollTop;
      // 到底条件
      if (h + H > pageH - 10) {
        // 到底了
        // 获取下一页数据
        this.page++;
        this.getShopList().then(() => {
          isButton = true;
        });
      }
    },
    linkDetail(e, item) {
      console.log('dianji十几');
      this.$router.push(`/detail/${item.Id}/${item.type_one}`)
    }
  },
  created() {
    this.getShopList();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle);
  },
  beforeDestroy() {
    console.log("destory run");
    window.removeEventListener("scroll", this.scrollHandle);
  },
};
</script>

<style scoped>
.home {
  width: 85%;
  margin: auto;
}

img {
  width: 100%;
  margin-top: 15px;
  height: 100%;
}
</style>