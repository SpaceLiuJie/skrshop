<template>
  <div id="detail" >
   
      <!-- 固定用法 $ruoter.go()  -1 返回上个界面 0 刷新页面 1 返回下个界面type="link" -->
      <button @click="$router.go(-1)" type="link">返回上一页</button>
      <button  @click="$router.go(0)" type="link"> 刷新页面</button>
 
    <div class="goods">
      <div class="goods-left">
        <div class="warp">
          <div class="left">
            <!--图片 -->
            <img class="leftImg" ref="bigImgLeft" src="../../assets/images/shop.jpg">
            <!-- 鼠标层罩 -->
            <div  ref="mask" v-show="topShow" class="tops" :style="topStyle"></div>
            <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
            <div class="maskTop"
             @mouseenter="isEnterHandler(true)"
              @mousemove="moveHandler"
              @mouseout="isEnterHandler(false)"></div>
          </div>
          <!--显示放大效果的外元素 -->
          <div  v-show="rShow" class="right" >
            <!--              放大图片   -->
            <img :style="r_img" ref="bigImgRight" class=' rightImg'  src="../../assets/images/shop.jpg"/>
          </div>
        </div>
        <div class="imgList">
          <ul>
            <li >
            </li>
          </ul>
        </div>
      </div>
      <div class="goods-right" >
        <div class="top">
          <h3></h3>
          <span class="price">￥378</span>
          <span class="price-underline">￥389</span>
          <div class="promotiom">
            <span class="title" >  促销 </span>
            <span class="promotiom-explain">官方全场包邮</span>
          </div>
          <span></span>
        </div>
        <div class="goods-img">
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="choose">
          <label for="size">尺码</label>
          <select name="size" id="size">
            <option ></option>
          </select>
          <label for="count">数量</label>
          <input type="number" id="count" min="1" >
        </div>
        <div class="shop">
          <span class="join" >加入购物车</span>
          <span class="shopping-car" >立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'



export default {
  name: "Details",
  props: ['id'],
  data(){
    return{
      topStyle:{transform:''},
        r_img: {},
        topShow:false,
        rShow:false,
        imgWidthLeft:'',
        imgWidthRight: '',
        mackWidth: '',
        mackHeight: '',
        size: ['XS','S','M','L','XL','2XL','3XL','4XL','5XL'],
        shopNum: 1,
        currentIndex: '',
        currentStyle: '',
        styleSize: 'XS',
        visible: false,
        lastStyle: ''
    }
  },
  methods:{
    
     whichOne(ref){
        this.$refs[ref].$el.scrollIntoView(true)
      },
 // 判断鼠标是否移入
      isEnterHandler(isEnter) {
        this.topShow = isEnter
        this.rShow = isEnter
        this.imgWidthLeft = this.$refs.bigImgLeft.offsetWidth
        if (isEnter) {
          var finalStyle = this.$refs.mask.currentStyle ? this.$refs.mask.currentStyle : document.defaultView.getComputedStyle(this.$refs.mask, null)
          this.mackWidth = parseFloat(finalStyle.width)
          this.mackHeight = parseFloat(finalStyle.height)
        }
      },
      // 鼠标移动函数
      moveHandler(event) {
        this.imgWidthRight = this.$refs.bigImgRight.offsetWidth
        let x = event.offsetX
        let y = event.offsetY
        let halfMackWidth = this.mackWidth
        let halfMackHeight = this.mackHeight
        let topX = (x-halfMackWidth/2) < 0 ? 0:(x-halfMackWidth/2)
        let topY = (y-halfMackHeight/2) < 0 ? 0:(y-halfMackHeight/2)
        if(topX>this.imgWidthLeft-halfMackWidth) topX = this.imgWidthLeft-halfMackWidth
        if(topY>this.imgWidthLeft-halfMackHeight) topY = this.imgWidthLeft-halfMackHeight
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${this.imgWidthRight*((topX)/this.imgWidthLeft)}px,-${this.imgWidthRight*((topY)/this.imgWidthLeft)}px)`
      },
      // 点击小图切换大图
      // changeImg(event,index){
      //   this.$refs.bigImgLeft.src = event.target.src
      //   this.$refs.bigImgRight.src = event.target.src
      //   this.currentIndex = index
      //   // console.log(event.target.title);
      //   this.currentStyle = event.target.title
      // },
  }
};

</script>

<style>
* {
  box-sizing: border-box;
}
#detail {
  width: 1240px;
  height: 100%;
  margin: 0 auto;
}
.back_or_forward {
  background-color: #fff;
  color: skyblue;
  margin: 30px 0 40px;
}
.goods {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}
.goods-left{
     width: 625px;
      position: relative;
}
.wrap{
  width: 625px;
  height: 625px;
}
.left{
   width: 625px;
  height: 625px;
  border: 1px solid teal;
  float: left;
  position: relative;
  cursor: pointer;
}
.tops{
  width: 340px;
  height: 340px;
  background-color: #efefef;
  opacity: 0.4;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
}
.maskTop{
  width: 625px;
  height: 625px;
  position: absolute;
  z-index: 5;
   top: 0;
  left: 0;
}
.leftImg{
  width: 625px;
  height: 625px;
   display: inline-block;

}
.right{
  left: 645px;
  width: 516px;
  height: 516px;
    border: 1px solid #efefef;
          position: absolute;
          overflow: hidden;
          z-index: 2;
}
.rightImg{
  display: inline-block;
  width: 950px;
  height: 950px;
  position: absolute;
  top: 0;left: 0;


}.imgList{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: -70px;
  height: 100%;

}
.imgList >ul>img{
  cursor: pointer;
  width: 60px;height: 60px;
  margin: 0 10px 10px 0;
}
.goods-right {
  width: 485px;
  margin-left: 30px;
  height: 625px;
}
.top {
  height: 250px;
}
.top h3 {
  font-size: 30px;
}
.top span {
  color: #b0b0b0;
}
.price {
  font-size: 26px;
  font-weight: 500;
  color: #000;
}
.underline {
  color: #b0b0b0;
  margin-left: 5px;
  font-size: 16px;
  text-decoration-line: line-through;
}
.promotion {
  font-size: 14px;
  width: 495px;
  height: 65px;
  margin-top: 25px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
}
.title {
  display: inline-block;
  width: 44px;
  height: 22px;
  margin: 0 10px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
}
.promotiom-explain {
  margin-left: 10px;
}
.goods-img {
  height: 280px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.goods-img ul {
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.goods-img li {
  box-sizing: border-box;
  width: 65px;
  height: 65px;
  margin: 0px 10px 10px 0;
}
.goods-img img {
  cursor: pointer;
  width: 63px;
  height: 63px;
  display: block;
  margin: 0 auto;
}
.choose {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
#count {
  width: 40%;
  outline: none;
  border: none;
  height: 30px;
  line-height: 30px;
  text-indent: 20px;
}
#size {
  width: 40%;
  outline: none;
  border: none;
  height: 45px;
  line-height: 45px;
  text-indent: 20px;
  margin-right: 20px;
}
.shop{
  display :flex; 
        justify-content: space-between;
}
.shop>span{
   height :60px;
          line-height: 60px;
          font-size:  20px;
          text-align:  center ;
          cursor:  pointer;
}
.join{
  width : 223px;
          background-color:  #fff;
          color:  #000;
          border:  1px solid #666666;
}
.shopping-car{
  width:  223px;
          background-color:  #000;
          color:  #fff;
}
</style>