<template>
  <div class="render">
    <list-top :listTop="getmsg"></list-top>
    <list-middle :listMiddle="getmsg"></list-middle>
    <list-bottom :listBottom="getmsg"></list-bottom>
  </div>
</template>

<script>
import ListTop from "./childComps/ListTop.vue";
import ListMiddle from "./childComps/ListMiddle.vue";
import ListBottom from "./childComps/ListBottom.vue";
export default {
  name: "Render",
  components: {
    ListTop,
    ListMiddle,
    ListBottom,
  },
  props: {
    getmsg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.render{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
