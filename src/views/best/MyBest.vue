<template>
  <div id="best">
    <div class="title">
      <p>最好的</p>
    </div>
    <div class="topSelect">
      <table-item @tabItem="getTab"></table-item>
      <Render :getmsg="msg" />
    </div>
  </div>
</template>

<script>
import TableItem from "./childComps/TableItem.vue";
import Render from "./childComps/Render.vue";
export default {
  components: {
    TableItem,
    Render,
  },
  name: "MyBest",
  data() {
    return {
      msg: "All",
    };
  },
  methods: {
    getTab(val) {
      this.msg = val;
    },
  },
};
</script>

<style lang="less" scoped>
#best {
  font-size: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  .title {
    p {
      color: rgb(51, 51, 51);
      font-family: ProximaNova-Thin;
      font-size: 48px;
      text-transform: uppercase;
      text-align: center;
      margin: 60px 0px 20px;
      font-weight: 100;
    }
  }
  .topSelect {
    box-sizing: border-box;
    width: 100%;
    margin: 10px auto;
  }
}
</style>
