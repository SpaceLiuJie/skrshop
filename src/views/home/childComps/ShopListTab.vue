<!--
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-12 17:42:12
 * @LastEditTime: 2021-04-20 22:19:45
 * @LastEditors: He Xiantao
-->
<template>
  <div class="ShopListTab">
    <ul class="tab">
      <li class="tabitem" v-for="(item, index) in TypeTwoList" @click="liclick(index) "
        :class="{ active: page == index }" :key="index"  style="list-style-type:none;">
        {{item}}
      </li>
    </ul>
    <div class="content">
      <div class="AnCard">
        <div hoverable class="card" v-for="(item,index) in ShopListTab_list[page]" :key="index"
          @click="cardclick(item.id)">
          <img class="imgs" alt="example" :src="item.img" />
          <div>
           <p>{{item.title}}</p>
              <p class="description">www.stride.fun</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopListTab",
    data() {
      return {
        page: 0
      }
    },
    methods: {
      liclick(index) {
        this.page = index
        // console.log(index);
      },
      cardclick(id) {
        this.$router.push(`/details/${id}`)
      }
    },
    props: {
      ShopListTab_list: {
        type: Array,
      
      },
      TypeTwoList: {
        type: Array,
   
      },
    },
  };
</script>

<style lang="less" scoped>
  .tab {
    display: flex;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    padding: 10px 0;
    font-size: 20px;

    .tabitem {
      width: 100px;
      text-align: center;
      cursor: pointer;
      font-family: "ProximaNova-Semibold";
      color: #b5b5b5;
      border-bottom: 3px solid transparent;
      transition: all ease-in-out 0.2s;
    }
  }

  .active {
    border-bottom: 3px solid black !important;
  }

  .content {
    width: 100%;
  }

  .AnCard {
    width: 100%;
    padding: 0 10px;
    display: flex;
    text-align: center;

    .card {
      width: calc((100% / 6) - 8px);
      margin: 4px;
       border: 1px solid #e8e8e8;
.imgs{
    width: 300px;height: 300px;
}
      .img {
        width: 100%;
      }
    }

    .description {
      color: #666;
      font-family: "yg740";
      font-size: 12px;
      line-height: 1.5;
      word-break: keep-all;
    }
  }

  /deep/ .ant-card-meta-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    font-family: "ProximaNova-Bold";
    font-size: 20px;
  }
</style>