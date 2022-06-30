
<template>
  <el-carousel indicator-position="SwiperHreader">
    <el-carousel-item   v-for="(item,index) in TopSwiper" :key="index">
      <img
         @click="swiperClick(index)"
          alt="example"
          :src="item.swiperImg"
        />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "SwiperHreader",
  data() {
    return {
      SwiperHreader:{
         observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swipe
      }
    } ;
  },
  props:{
    TopSwiper :Array,
     height:String
    
  },
  methods: {
    swiperClick(index){
      let data = JSON.parse(this.TopSwiper[index].params)
      if(data.id!=undefined){
        this.$router.push(`/details/${data.id}`)
      }else{
        this.$router.push(`/secondary/${data.name}_${data.series}`)
      }
    }
  },

};
</script>

<style>
.el-carousel__container{
  height: 600px;
  width: 100%;
  position: relative;
  
}
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>