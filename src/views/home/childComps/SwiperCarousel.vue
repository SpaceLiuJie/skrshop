<template>
  <div class="SwiperCarousel">
    <swiper ref="SwiperCarousel" :options="SwiperCarousel">
      <swiper-slide v-for="(item, index) in SwiperCarousel_list.slice(20,28)" :key="index">
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
  name: "SwiperCarousel",
  data() {
    return {
      SwiperCarousel: {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      navigation: {
          nextEl: ".SwiperCarousel .swiper-button-next",
          prevEl: ".SwiperCarousel .swiper-button-prev",
        },
      },
    };
  },


  props:{
    SwiperCarousel_list
      :Array,
      
    
  },
   methods: {
     swiperClick(id){
      this.$router.push(`/detail/${id}`)
    }
  },

};
</script>

<style lang="less" scoped>
.SwiperCarousel {
  position: relative;
  width: 80%;
  margin: 0 auto;

}
.swiper-container {
  padding: 50px 0;
 height: 300px;
}

.swiper-slide-active {
  transform: scale(1) !important;
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