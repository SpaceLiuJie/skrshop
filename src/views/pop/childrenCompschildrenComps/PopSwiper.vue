<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in 7"
        :key="index"
        :style="{
          'background-image': `linear-gradient(to right,#fff 55%,${colorarr[index]} 100%)`,
        }"
      >
        <img
          :src="img[index]"
          alt=""
        />
        <div class="rigjt_text">
          <p :style="{ color: colorarr[index] }">{{ text[index] }}</p>
          <span v-if="index != 6">右划查看下一款➡</span>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "@/api/swiper-bundle";
import "@/assets/less/swiper-bundle.css";
export default {
  name: "Pop",
  data() {
    return {
      colorarr: [
        "rgba(44, 58, 71, .4)",
        "rgba(41, 128, 185, .4)",
        "rgba(253, 114, 114, .4)",
        "rgba(202, 211, 200, .4)",
        "rgba(61, 61, 61,.4)",
        "rgba(241, 144, 102,.4)",
        "rgba(225, 95, 65,.4)",
        "rgba(248, 165, 194,.4)",
        "rgba(61, 193, 211.4)",
      ],
      text: ["拒绝平庸", "千刃", "游心", "星流", "教父", "裂变", "无极"],
      img:[
        "https://img.fishfay.com/shopgoods/4/112048808/zt-112048808/ce1168005ccc33232587a20b6b712ad1.jpg",
        "https://img.fishfay.com/shopgoods/4/112048880A/zt-112048880A/7a726455cd3a2d453038750bed851976.jpg",
        "https://img.fishfay.com/shopgoods/4/112048818A/zt-112048818A/5f1fa3a0005d843b3c5ab2fa6edc385e.jpg",
        "https://img.fishfay.com/shopgoods/4/112048868A/zt-112048868A/bcc29939853f61837599cc2e19a0baca.jpg",
        "https://img.fishfay.com/shopgoods/4/112048860/zt-112048860/8bf4c7a730ba14e10f625de6e302f369.jpg",
        "https://img.fishfay.com/shopgoods/1/112118812/zt-112118812/435ef501389428f8e3bc509c1d96bf73.jpg",
        "https://img.fishfay.com/shopgoods/4/112118845/zt-112118845/367d18b2084ddcc818d3585d794fc401.jpg"
      ]
    };
  },
  mounted() {
    new Swiper(".mySwiper", {
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
    });
  },
  components: { Swiper },
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
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
  width: 100%;
  height: 45vw;
  .swiper-slide {
    position: relative;
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    img {
      height: 100%;
      user-select: none;
      display: block;
      width: 50%;
    }
    .rigjt_text{
      position: absolute;
      top: 40%;
      left: 70%;
      text-align: right;
      p {
        letter-spacing: 30px;
        font-size: 33px;
        margin: 10px;
      }
      span{
        color: #60544f;
        font-weight: 700;  
        letter-spacing: 10px;
        font-size: 20px;
      }
    }
  }
}
</style>