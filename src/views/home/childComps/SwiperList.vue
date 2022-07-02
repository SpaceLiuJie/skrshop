<template>
  <div class="SwiperList">
    <swiper ref="SwiperList" :options="SwiperList">
      <swiper-slide v-for="(item, index) in SwiperList_list.slice(20,28)" :key="index">
        <div  class="card">
          <img  class="card-img" @click="swiperClick(item.id)" alt="example"  :src="item.img" />
          <br><br><br>
          <div >
                   <p>{{item.title}}</p>
              <p class="description">www.stride.fun</p>
       
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    　　
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  name: "SwiperList",
  data() {
    return {
      SwiperList: {
       
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: true,
     
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        },
        navigation: {
          nextEl: ".SwiperList .swiper-button-next",
          prevEl: ".SwiperList .swiper-button-prev",
        },
      },
    };
  },
  props:{
    SwiperList_list
    :Array,
   
    },
  
  computed: {
    swiper() {
      return this.$refs.SwiperList.$swiper;
    },
  },
  methods: {
     swiperClick(id){
      this.$router.push(`/detail/${id}`)
     
    }
  },
  mounted() {
    this.swiper.slideTo(2, 1000, false);
  },
};
</script>

<style lang="less" scoped>
.SwiperList {
  position: relative;
  width: 80%;
  margin: 0 auto;

}
.swiper-container {
  padding: 50px 0;
 height: 300px;
}

.swiper-slide-active {
  transform: scale(1.2) !important;
  flex-shrink: 0;
}
.swiper-button-prev {
  left: -8%;
}
.swiper-button-next {
  right: -8%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
  z-index: 1;
}
.card{
  text-align: center;
  height: 300px;
  margin: 4px;
border: 1px solid #e8e8e8;
  .card-img {
 width: 129px;
 text-align: center;
}
}
</style>