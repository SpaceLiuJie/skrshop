<template>
  <div id="detail">

    <!-- 固定用法 $ruoter.go()  -1 返回上个界面 0 刷新页面 1 返回下个界面type="link" -->
    <button @click="$router.go(-1)" type="link">返回上一页</button>
    <button @click="$router.go(0)" type="link"> 刷新页面</button>

    <div class="goods">
      <div class="goods-left">
        <div class="warp">

          <div class="left">
            <!--图片 -->
            <img class="leftImg" ref="bigImgLeft" :src="amplifier_tu.small">
            <!-- 鼠标层罩 -->
            <div ref="mask" v-show="topShow" class="tops" :style="topStyle"></div>
            <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
            <div class="maskTop" @mouseenter="isEnterHandler(true)" @mousemove="moveHandler"
              @mouseout="isEnterHandler(false)"></div>
          </div>
          <!--显示放大效果的外元素 -->
          <div v-show="rShow" class="right">
            <!--              放大图片   -->
            <img :style="r_img" ref="bigImgRight" class=' rightImg' :src="amplifier_tu.small" />
          </div>
        </div>
        <div class="ShopSkuDetail_Tu">
          <div v-for="(item, index) in ShopSkuDetail_Tu " :key="index">
            <ul >
              <!-- <li><img :src="item.normal" alt="加载失败" /></li> -->
              <li @click="amplifier(item,index)"><img :src="item.small" alt="加载失败" /></li>
            </ul>
           
          </div>
        </div>
      </div>
      <div class="goods-right">
        <div class="top">
          <h3></h3>
          <span class="price">￥{{ ShopSkuDetail.special_price }}</span>
          <span class="price-underline">￥{{ ShopSkuDetail.price }}</span>
          <div class="promotiom">
            <span class="title" v-show="ShopSpuDetail.is_special != 0"> 促销 </span>
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
            <option v-for="(item, index) in size " :key="index">{{ item }}</option>
          </select>
          <label for="count">数量</label>
          <input type="number" id="count" min="1" v-model="num">
          <!-- <label for="size">样式</label>
          <select name="size" id="size">
            <option v-for="(item, index) in params " :key="index">{{ item }}</option>
          </select> -->
        </div>
        <div class="shop">
          <span class="join" @click="joinCar">加入购物车</span>
          <span class="shopping-car">立即购买</span>
        </div>
      </div>
    </div>

    <!-- <div class="details">
      <DetailsSortNav @jumptoWhich="whichOne" ref="DETAILS" :currentIndexIsOn="0" />
      <div class="details-img">
        <ul>
          <li>
            <img class='details-imgs' src="../../assets/images/shop.jpg" alt="">
          </li>
        </ul>
      </div>

    </div> -->
    <!-- <div class="review">
      <DetailsSortNav @jumptoWhich="whichOne" ref="REVIEW" :currentIndexIsOn="1" />
      <Review />
    </div>
    <div class="q_a">
      <DetailsSortNav @jumptoWhich="whichOne"  ref="Q_A" :currentIndexIsOn="2" />
      <QA/>
    </div>
    <div class="return_delivery"> 
      <DetailsSortNav @jumptoWhich="whichOne" ref="RETURN_DELIVERY" :currentIndexIsOn="3" />
      <ReturnDelivery />
    </div> -->

  </div>
</template>

<script > 
import Vue from 'vue'
import { gaingetSkuDetail, gaingetSpuDetail } from '@/api/detail.js'
import { addShopCar, deleteShopCar } from '../../api/shopcar';
export default {
  name: "Details",
  components: {
    // DetailsSortNav,
    // ReturnDelivery,
    // QA,
    // Review,
    // Details,
  },
  props: ['id'],
  data() {
    return {
      topStyle: { transform: '' },
      r_img: {},
      topShow: false,
      rShow: false,
      imgWidthLeft: '',
      imgWidthRight: '',
      mackWidth: '',
      mackHeight: '',
      size: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
      shopNum: 1,
      currentIndex: '',
      currentStyle: '',
      styleSize: 'XS',
      visible: false,
      lastStyle: '',
      ShopSpuDetail: '',//数据详情信息
      ShopSkuDetail: '',//数据详情信息
      ShopSkuDetail_Tu: [],
      amplifier_tu:'',//点击切换图片
      num: 1,
      params: [], // 所有样式
      paramsCar:'',//当前选择商品样式


    }
  },
  methods: {

    whichOne(ref) {
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
      let topX = (x - halfMackWidth / 2) < 0 ? 0 : (x - halfMackWidth / 2)
      let topY = (y - halfMackHeight / 2) < 0 ? 0 : (y - halfMackHeight / 2)
      if (topX > this.imgWidthLeft - halfMackWidth) topX = this.imgWidthLeft - halfMackWidth
      if (topY > this.imgWidthLeft - halfMackHeight) topY = this.imgWidthLeft - halfMackHeight
      // 通过 transform 进行移动控制
      this.topStyle.transform = `translate(${topX}px,${topY}px)`
      this.r_img.transform = `translate(-${this.imgWidthRight * ((topX) / this.imgWidthLeft)}px,-${this.imgWidthRight * ((topY) / this.imgWidthLeft)}px)`
    },
    // 点击小图切换大图
    // changeImg(event,index){
    //   this.$refs.bigImgLeft.src = event.target.src
    //   this.$refs.bigImgRight.src = event.target.src
    //   this.currentIndex = index
    //   // console.log(event.target.title);
    //   this.currentStyle = event.target.title
    // },
    shopDetail() {
      let Id = this.$route.params.id;
      console.log(Id);
      gaingetSpuDetail(parseInt(Id)).then(data => {
        console.log("数据详情信息获取成功gaingetSpuDetail", data);
        this.ShopSpuDetail = data.data[0];
        console.log(this.ShopSpuDetail);
      })
      gaingetSkuDetail(parseInt(Id)).then(data => {
        console.log("数据详情信息获取成功gaingetSkuDetail", data);
        this.ShopSkuDetail = data.data[0];
        // console.log(this.ShopSkuDetail);
        this.ShopSkuDetail_Tu = JSON.parse(data.data[0].imgs);
        this.params = JSON.parse(data.data[0].param);
        // console.log(this.params);
        console.log('ShopSkuDetail_Tu------', this.ShopSkuDetail_Tu);
        // console.log('ShopSkuDetail_Tu------', this.ShopSkuDetail_Tu[0]);
          this.amplifier_tu= this.ShopSkuDetail_Tu[0]
          this.paramsCar = this.params[0]
      })
    },
    amplifier(item,index){
      this.amplifier_tu = item;
      console.log(index);
      this.paramsCar = this.params[index];
      
    },
    joinCar() {
        let customer_id = this.$store.state.user.customer_id
        let params = this.paramsCar;
        let num = this.num;
        let sku_id = this.ShopSkuDetail.id;
       console.log('添加购物车参数--------',customer_id,sku_id,num,params);
       let data={
          customer_id,sku_id,num,params,
       }
        addShopCar(data).then(data=>{
            if (data.code == 200) {
              this.$message({
                message:'添加购物车成功',
                type:'success',
              })
            }else{
               this.$message({
                message:'添加购物车失败',
                type:'error',
              })
            }
        })
    }
  },
  created() {
    this.shopDetail()
  }
};

</script>

<style lang="less">
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

.goods-left {
  width: 625px;
  position: relative;
}

.wrap {
  width: 625px;
  height: 625px;
}

.left {
  width: 625px;
  height: 625px;
  border: 1px solid teal;
  float: left;
  position: relative;
  cursor: pointer;
}

.tops {
  width: 340px;
  height: 340px;
  background-color: #efefef;
  opacity: 0.4;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
}

.maskTop {
  width: 625px;
  height: 625px;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
}

.leftImg {
  width: 625px;
  height: 625px;
  display: inline-block;

}

.right {
  left: 645px;
  width: 516px;
  height: 516px;
  border: 1px solid #efefef;
  position: absolute;
  overflow: hidden;
  z-index: 2;
}

.rightImg {
  display: inline-block;
  width: 950px;
  height: 950px;
  position: absolute;
  top: 0;
  left: 0;


}

.imgList {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: -70px;
  height: 100%;

}

.imgList>ul>img {
  cursor: pointer;
  width: 60px;
  height: 60px;
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

.shop {
  display: flex;
  justify-content: space-between;
}

.shop>span {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}

.join {
  width: 223px;
  background-color: #fff;
  color: #000;
  border: 1px solid #666666;
}

.shopping-car {
  width: 223px;
  background-color: #000;
  color: #fff;
}

.ShopSkuDetail_Tu {
  position: fixed;
  width: 150px;
  left: 0px;
  height: 100%;
overflow:scroll;
  // border:1px solid #333;
  img {
    width: 100px;
    height: 100px;
  }
}

// .warp{
//   display: flex;

// }
</style>