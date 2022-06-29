<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/images/shop.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/shop.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/shop.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/shop.jpg" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from"../../api/swiper-bundle.js";
import "../../assets/less/swiper-bundle.css";
export default {
  name: "Pop",
  mounted(){
    var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    })
  },
};
</script>

<style lang="less" scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
      user-select: none;
    .swiper-slide img {
      display: block;
      width: 100%;
    }
  }
}
</style>