<template>
  <div class="backTop">
    <!--
      滚动监听的是window ；target不要写，如果是某个元素需要写target
     -->
    <el-backtop class="el-backtop" :visibility-height="height" :right="right">
      <!-- :bottom="botton" -->
      <div
        style="
           {
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            font-size: 13px;
          }
        "
      >
        {{ text }}
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {
    // todo: 如何完成自定义样式
    // style: {
    //     type: Object,
    //     default() {
    //         return {
    //         }
    //     }
    // },
    height: {
      type: Number,
      default: 300,
    },
    right: Number,
    button: Number,
    text: {
      type: String,
      default: "返回",
    },
  },
};
</script>

<style scoped>
</style>