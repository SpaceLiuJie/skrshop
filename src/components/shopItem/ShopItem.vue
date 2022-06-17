<template>
  <div class="shop" @click="shopClickHandle">
    <div class="div">
      <!-- <img :src="shop.img_list_url" alt="" :style="{ height: imgHeight }" /> -->
      <img v-lazy="shop.img_list_url" alt="" />
    </div>
    <div class="title">
      <span>{{ shop.title }}</span>
    </div>
    <div class="price">
      <span>￥{{ shop.price }}</span>
      <p v-html="shop.mack"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  /**
   * 预定义自定义属性shop
   * 作用:接受组件需要的数据
   */
  props: {
    shop: Object,
    /**
     * 因为:屏幕尺寸不同，每行展示商品数量数量不同，所以宽度是变化的
     * 为了让使用者可以自己设置宽度。
     */
    width: {
      type: String,
    },
    imgHeight: {
      type: String,
    }
  },
  methods: {
    shopClickHandle(e) {
      /**
       * 预定义自定义事件 onShopclick
       * 提供点击组件行为
       * 1:事件对象
       * 2：被点击商品数据
       */
      this.$emit("onShopClick", e, this.shop);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  cursor: pointer;
}

.shop {
  display: inline-block;
  margin: 10px 15px;
  text-align: center;
  font-size: 14px;
  width: 200px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.4);

  &:hover {
    outline: 2px solid rgba(67, 11, 235, 0.4);
    position: relative;
    top: -7px;
    box-shadow: 0px 10px 10px #91908e;
  }

  .title:hover {
    color: rgba(34, 222, 28, 0.763);
  }

  .div>img {
    height: 50px;
    width: 100px;
    height: 100px;
  }

  .price {
    display: flex;
    justify-content: space-between;

    &>span {
      font-size: 14px;
      padding-left: 50px;
      color: chocolate;
    }

    &>p {
      padding-right: 30px;
    }
  }
}
</style>