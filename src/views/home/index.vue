<template>
  <div>
    <!-- 头部轮播 -->
    <SwiperHreader :TopSwiper="TopSwiper" v-if="TopSwiper.length > 0" />
    <Title> <p>Basketball shoes</p> </Title>
    <AnCard :AnCard_list="AnCard_list" v-if="AnCard_list.length > 0"/>
       <Title><p>Skate shoes</p></Title>
      <SwiperList
      :SwiperList_list="SwiperList_list"
      v-if="SwiperList_list.length > 0"
    />
    <Title><p>Running shoes</p></Title>
  </div>
</template>
<script>
import Title from "../../components/title/Title.vue";
import SwiperHreader from "./childComps/SwiperHreader.vue";
import AnCard  from'./childComps/AnCard';
import SwiperList from "./childComps/SwiperList.vue";
import { getTopswiper } from "../../api/home.js";
import { onefiyAddDetail,twofiyAddDetail} from "../../api/Home_page_navigation/classfiy";


export default {
  name: "Home",
  data() {
    return {
      TopSwiper: [],
      AnCard_list: [],
   SwiperList_list:[]
    };
  },
  components: {
    Title,
    SwiperHreader,
    AnCard,
    SwiperList
},
  methods: {
    // 轮播图片
    getTopswiper() {
      console.log(222222222222);
      getTopswiper().then(res => {
        if (res.code != 200) return;
        this.TopSwiper = res.res;
      });
    },
    //获取篮球鞋
      AnCard_init() {
twofiyAddDetail("篮球鞋").then((res)=>{
   if (res.code != 200) return;
        this.AnCard_list= res.data;
})
  },
  // 获取板鞋
  SwiperList_init(){
     console.log(33333333333333);
    twofiyAddDetail('板鞋').then((res)=>{
      if(res.code !=200 )return;
      this.SwiperList_list=res.data
    })
  }
  
},
created() {
   
    this.getTopswiper();
    this.AnCard_init();
    this.SwiperList_init()
  }
}
</script>

<style lang="less" scoped>
.margin {
  margin-top: 20px;
}
</style>