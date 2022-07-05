<template>
  <div class="search">
    <!-- 二次搜索显示 -->
    <div class="againSearch">
      <p>
        "{{ word }}"共有 <span>{{ num }}</span> 个搜索结果
      </p>
    </div>
    <!-- 搜索页面主导航 -->
    <div class="nav">
      <nav>
        <el-radio-group class="big-product" v-model="radio1">
          <el-radio-button
            class="product"
            style="width: 33%"
            label="产品"
            @click.native="getSearchShopList"
            >产品({{ num }})</el-radio-button
          >
          <el-radio-button
            class="product"
            style="width: 33%"
            label="活动"
            @click.native="getActivityList"
            >活动({{ activityNumber }})</el-radio-button
          >
          <el-radio-button
            class="product"
            style="width: 33%"
            label="买家秀"
            @click.native="getShowList"
            >买家秀({{ showNumber }})</el-radio-button
          >
        </el-radio-group>
      </nav>
    </div>
    <!-- 商品列表组件 -->

    <div class="list" v-if="this.shopList !== 0">
      <shop-item
        @onShopClick="linkDetail"
        v-for="(item, index) in shopList"
        :key="index"
        :shop="item"
        :imgHeight="'275px'"
      ></shop-item>
    </div>
    <div v-if="this.activeShow == true">
      <h1>暂时没有活动</h1>
    </div>
    <!-- 买家秀 -->

    <div class="show" v-if="this.showShow == true">
      <ul>
        <li v-for="x in 120" :key="x">
          <img
            src="http://image.wconcept.co.kr/images/upload/wdna/RP210413104342_KE8M.jpeg"
            alt=""
          />
          <div>@Drawpaint100</div>
        </li>
      </ul>
    </div>

    <!-- 分页功能 -->
    <div class="page">
      <el-pagination
        background
        :page-size="30"
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ShopItem from "@/components/shopItem/ShopItem.vue";
import { searchShopList } from "@/api/search.js";
export default {
  name: "Search",
  components: {
    ShopItem,
  },
  data() {
    return {
      word: "",
      num: "2",
      firstA: "",
      total: "",
      radio1: "产品",
      shopList: [],
      productNumber: 0,
      activityNumber: 0,
      showNumber: 120,
      activeShow: false,
      showShow: false,
    };
  },
  methods: {
    getSearchShopList() {
      this.activeShow = false;
      this.showShow = false;
      // let word={
      //   name:this.$store.state.search_val.search_val
      // }
      let word = this.$route.params.searItem
      searchShopList(word).then((data) => {
        this.shopList = data.data;
        console.log("新",this.shopList);
        console.log("这个数据",data);
        this.num = data.data.length;
        this.word =word;
      });
    },
    linkDetail(e, shop) {
      this.$router.push(`/detail/${shop.store}/${shop.getSpu}`);
    },
    getActivityList() {
      this.showShow = false;

      this.activeShow = true;
    },
    getShowList() {
      this.activeShow = false;
      this.showShow = true;
    },
  },

  // getShowList(){
  //   activeShow= false;
  //   this.shopList = [];

  // },
  created() {
    this.getSearchShopList();
    console.log("页面创建了");
  },
  watch:{
     $route: {
            deep: true, 
            handler(to, from) {
                console.log("---------------------watch route----------------");
                   this.getSearchShopList();


            },
        },
  }
};
</script>

<style lang="less" scoped>
.search {
  margin: 0;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  .againSearch {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7.4vh;
    background-color: #fafafa;
    border-top: 1px solid #e1e1e1;
    width: 64.5vw;
    height: 17.6vh;
    font-weight: border;
    font-size: 3.6vh;
    p {
      font-size: 3.6vh;
      span {
        color: #0ec3b2;
      }
    }
  }
}

.nav {
  margin-top: 10vh;
  padding: 0 17.3vw;
  .router-link-active {
    background-color: #333;
    color: white;
  }

  nav {
    .big-product {
      width: 100%;
      background-color: #fff;
      el-radio-button__inner {
        width: 100px;
      }
    }
    el-radio-group {
      .product {
        padding: 1.6vh 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #000;
        cursor: pointer;
        //   font-size: 1.9vh !important;
        color: #5a5a5a;
        &:last-of-type {
          border: none;
        }
      }
    }

    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
  }
}
//   分页
.page {
  position: fixed;
  bottom: 5vh;
  left: 40%;
}

.show {
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1.5vh 0;
    margin-top: 7vh;
    li {
      width: 18%;
      position: relative;
      margin-bottom: 3.5vh;
      img {
        width: 100%;
      }
      div {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        padding: 0.5vh 1vh;
      }
    }
  }
}
</style>
