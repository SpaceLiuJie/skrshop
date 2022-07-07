<template>
  <div id="app">
    <Nav></Nav>
    <!-- <div>
            <router-link to="/home">Home1</router-link>
        </div> -->
    <!-- <MyPage /> -->
    <!-- <Coupon /> -->
    <!-- <Login key="show"></Login> -->

    <!-- 侧边栏 小购物车 -->
    <Adside/>
    <router-view :key="$route.fullpath" />
    <!-- <FooterNav class="FooterNav"></FooterNav> -->
  </div>
</template>
<script>
import Nav from "../src/components/Nav.vue";
import MyPage from "./views/mypage/MyPage.vue";
import Login from "@/views/login/index.vue";
// import Coupon from './views/mypage/coupon/index.vue'
import FooterNav from "./components/footer/FooterNav.vue";
import Adside from "@/components/adside/Adside.vue";
export default {
  name: "APP",
  components: {
    Nav,
    MyPage,
    // Coupon,
    Login,
    FooterNav,
    Adside,
  },
  data() {
    return {
      show: true,
      Navshow: false,
    };
  },
  methods: {
    gainToken() {
      let gainToken = this.$store.state.user.token;
      // console.log("gainToken", gainToken);
      if (!gainToken) {
        this.show = true;
        this.Navshow = false;
      } else {
        this.show = false;
        this.Navshow = true;
      }
    },
  },
  created() {
    this.gainToken();
  },
  mounted() {
    this.gainToken();
  },
};
</script>

<style lang="less" scoped>
// .FooterNav{
//     position: absolute;
//     bottom: 0px;
// }
// .is-active{
//     background: green;
// }
</style>
