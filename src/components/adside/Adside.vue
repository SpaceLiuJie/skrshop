<template>
  <div>
    <div class="side-menu" ref="sideMenu">
      <div class="side-i" ref="side-i">
        <!-- 购物车图标 -->
        <div class="side-shop">
          <i class="el-icon-s-operation" :style="{ color: '#fff' }" @click="showService(1)"> </i>
        </div>
        <!-- 客服图标 -->
        <div class="side-service" ref="side-service">
          <i class="el-icon-chat-dot-square" @click="showHistory(2)"></i>
        </div>
      </div>
      <!--返回顶部 底部 -->
      <div class="arrow">
        <!-- 顶部 -->
        <i class="el-icon-upload2 icon_btn" @click="returnTop" v-if="isShowUp">
        </i>
        <!-- 底部 -->
        <i
          class="el-icon-download icon_btn"
          @click="returnBottom"
          v-if="isShowDown"
        ></i>
      </div>
    </div>
    <!-- 拓展页面 -->
    <div class="expand" ref="expand">
      <shop-car v-show="isShowService" @isCloseBar="isClose"></shop-car>
      <Service v-show="isShowHistory" @isCloseBar="isClose"></Service>
    </div>
  </div>
</template>

<script>
import ShopCar from "./ShopCar.vue";
import Service from "./Service.vue";
export default {
  components: {
    ShopCar,
    Service,
  },
  name: "Adside",
  data() {
    return {
      isShowUp: false,
      isShowDown: true,
      //右侧页面的显示隐藏
      last: "",
      isShowService: true,
      isShowHistory: false,
      flag: true, //节流阀
    };
  },
  methods: {
    isClose(val) {
      // 侧边栏右上角按钮的点击事件
      this.showExpanBar(val);
    },
    showService(a) {
      if (a === this.last) {
        this.showExpanBar(false);
        this.last = "";
      } else {
        this.showExpanBar(true);
        // this.$router.push("/service");
        this.isShowService = true;
        this.isShowHistory = false;
        this.last = a;
      }
    },
    showHistory(a) {
      if (a === this.last) {
        this.showExpanBar(false);
        this.last = "";
      } else {
        this.showExpanBar(true);
        // this.$router.push("/history");
        this.isShowHistory = true;
        this.isShowService = false;
        this.last = a;
      }
    },
    returnTop() {
      // 返回顶部
      if (this.flag) {
        this.flag = false;
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop1 = setInterval(() => {
          document.body.scrollTop =
            document.documentElement.scrollTop =
            top -=
              50;
          if (top <= 0) {
            clearInterval(timeTop1);
          }
          this.flag = true;
        }, 10);
      }
    },
    returnBottom() {
      // 返回底部
      if (this.flag) {
        this.flag = false;
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop =
            document.documentElement.scrollTop =
            top +=
              100000;
          console.log();
          if ((top = window.screen.height)) {
            clearInterval(timeTop);
          }
          this.flag = true;
        }, 10);
      }
    },
    showExpanBar(value) {
      // value 为true，则显示侧边栏
      if (value) {
        this.$refs.expand.style.right = 0 + "px";
        this.$refs.sideMenu.style.right = 300 + "px";
      } else {
        this.$refs.expand.style.right = -300 + "px";
        this.$refs.sideMenu.style.right = 0 + "px";
        this.last = " ";
      }
    },
  },
  mounted() {
    // 返回顶部、返回底部按钮的显示隐藏
    window.onscroll = function () {
      //  滚动条的高度
      let scrollBar = document.documentElement.scrollTop;
      // 页面高度
      let bodyHeight = document.body.scrollHeight;
      // 可视区高度
      let clientH = document.body.clientHeight;
      // console.log(scrollBar, bodyHeight, clientH);
      if (scrollBar <= 19) {
        this.isShowUp = false;
      } else {
        this.isShowUp = true;
      }
      if (clientH + scrollBar >= bodyHeight - 19) {
        this.isShowDown = false;
      } else {
        this.isShowDown = true;
      }
    }.bind(this);
  },
};
</script>

<style lang="less" scoped>
.side-menu {
  position: fixed;
  right: 0;
  bottom: 30px;
  width: 55px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  background-color: #0d0d0d;
  transition: all 0.7s;
  z-index: 999;
}

.side-i {
  width: 55px;
  background-color: #0d0d0d;
  transition: all 0.5s;
}
.side-shop {
  width: 100%;
  padding: 11px 0;
}
.side-service {
  padding: 11px 0;
}

.arrow {
  background-color: #0d0d0d;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
  .icon_btn {
    display: block;
    width: 55px;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }

.anticon {
  cursor: pointer;
}

.expand {
  position: fixed;
  bottom: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  transition: all 0.7s;
  z-index: 999;
}
</style>
