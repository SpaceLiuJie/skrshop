<template>
  <nav ref="nav">
    <div class="nav" :class="{ navFixed: isFixed }">
      <!--
        搜索
        todo:优化 变为公共组件
      -->
      <div>
        <div class="logo"><img src="../assets/images/logo.png" /></div>
        <div class="search" ref="search">
          <input type="text" id="search" placeholder="请输入想要的商品" />
          <input type="submit" value="搜索" @click="linkSearch" />
        </div>
      </div>
      <!--
        导航
        todo:优化导航
      -->
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <!-- 有token 表示已经登录  -->
          <router-link to="/shopcar" v-if="$store.state.user.token">购物车</router-link>
          <router-link to="/login" v-else>登录</router-link>
          <!-- <router-link to="/login">登录</router-link> -->
        </li>
        <li>
          <a to="/outlogin" @click="logout" v-if="$store.state.user.token">退出登录</a>
          <router-link to="/register" v-else>注册</router-link>
          <!-- <router-link to="/register">注册</router-link> -->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { remove } from '../utils/localStrage.js';
export default {
  name: "Nav",
  data() {
    return {
      isFixed: false,
      keyword: ''
    };
  },
  methods: {
    logout() {
      // 提示是否退出登录
      this.$confirm("确认退出登录吗？", "提示信息", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then((res) => {
        // 点击确认退出登录
        // 清空 token
        remove('user');
        // 删除vuex中user
        this.$store.dispatch('removeuser')

        this.$message({
          type: 'success',
          message: '退出登录成功'
        });
      })
        .catch((res) => {
          this.$message({
            type: 'info',
            message: '已取消退出登录'
          });
        })
    },
    linkSearch() {
      this.$router.push(`/search?keyword=` + this.keyword)
    }
  },
  mounted() {
    let navTopDom = this.$refs["nav"];
    let h = parseFloat(getComputedStyle(navTopDom)["height"]);
    let p = parseFloat(getComputedStyle(navTopDom)["paddingTop"]);
    let pb = parseFloat(getComputedStyle(navTopDom)["paddingBottom"]);
    let H = h + p + pb;
    window.addEventListener("scroll", () => {
      if (scrollY > H) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
// todo:优化scss 做项目中样式工程
nav {
  width: 100%;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 -5px 5px 10px rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;

  &>.nav {
    width: 80%;
    margin: 0 auto;
    background: #fff;

    &>div {
      width: 100%;
      position: relative;
      padding: 20px 0 10px 0;
      height: 105px;
    }

    .logo {
      float: left;

      img {
        width: 188px;
      }
    }

    .search {
      float: right;
      position: relative;
      transform: translateX(-100px) translateY(30px);

      &>input:nth-child(1) {
        width: 480px;
        height: 40px;
        font-size: 13px;
        padding-left: 20px;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
        transition: all 0.2s;

        &:hover {
          border-color: #aaaaaa;
        }

        &:focus {
          border-color: #c259c5;
        }
      }

      &>input:nth-child(2) {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        width: 90px;
        height: 41.5px;
        border: 1px solid #dfdfdf;
        color: #838383;
        font-size: 13px;
        background-color: #fff;
        border-radius: 0 5px 5px 0;
        transition: all 0.2s;
      }

      &>input:nth-child(2):hover {
        background-color: rgba(194, 89, 197, 0.1);
        color: rgba(194, 89, 197, 0.8);
        border-color: rgba(194, 89, 197, 0.8);
      }
    }

    ul {
      text-align: left;

      &>li {
        display: inline-block;
        font-weight: 700;
        text-align: center;
        margin: 0 16px;
        cursor: pointer;

        a {
          display: inline-block;
          width: 100%;
          padding: 2px 12px;
          color: #000;
          transition: all 0.3s;
          border-bottom: 2px solid transparent;

          &:hover {
            color: #800080;
            border-bottom: 2px solid #800080;
            text-decoration: none;
          }
        }
      }
    }
  }
}

.link-active {
  color: #800080 !important;
  border-bottom: 2px solid #800080 !important;
}

@keyframes backtop {
  from {
    transform: translate(0, -120%);
  }

  to {
    transform: translate(0, 0);
  }
}

.navFixed {
  position: fixed;
  top: 0px;
  width: 100% !important;
  padding: 0px 10%;
  z-index: 10;
  animation: backtop 0.5s;
}

.navA-color {
  color: #800080;
}

.navLi-border-bt {
  border-bottom: 2px solid #800080 !important;
}

.router-link-active {
  color: #800080 !important;
  border-bottom: 2px solid #800080 !important;
}
</style>