<template>
  <div class="shop" @click="shopClickHandle" :style="{width}">
    <div class="div">
        <!-- todo 优化提供用户选择是否懒加载
                提供预定义懒加载图片
        -->
        <img v-lazy="shop.img"  alt="" :style="{height:imgHeight}" >
    </div>
    <div class="title">
        <span>商品名称：{{shop.title}}</span>
    </div>
    <div class="price">
        <span>商品价格：{{shop.price}}</span>
        <p v-html="shop.mack"></p>
    </div>
  </div>
</template>

<script>
export default {
    name:'ShopItem',
    /**
     * 预定义自定义属性 shop
     * 作用：接收组件需要的数据
     */
    props: {
        shop: Object,
        /**
         * 因为屏幕尺寸不同，每行展示商品数量不同，所以宽度时变化的，为了让使用者可以自己设置宽度
         */
        width: {
            type:String,
            default:'22%'
        },
        imgHeight: {
            type: String,
            default: '175px',
        }
    },
    methods: {
        shopClickHandle(e) {
            // 预定自定义事件 onShopClick
            // 提供点击组件行为
            // 1：事件对象 2：被点击商品数据
            this.$emit('onShopClick',e,this.shop)
        }
    }
}
</script>

<style lang="less" scoped>
.shop{
    border: 2px solid rgb(193, 61, 208);
    margin: 5px;
    display: inline-block;
    padding: 10px 10px;
    text-align: center;
    .div>img{
        width: 60%;
    }
    .title {
        font-weight: 900;
    }
    .price {
        display: flex;
        justify-content: space-between;
        &> span{
            margin: 0 auto;
            font-size: 16px;
            color: rgb(105, 30, 30);
        }

    }
}
</style>
