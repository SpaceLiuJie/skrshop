<template>
  <div class="historyPage">
    <!-- 侧边栏客服 -->
    <div class="his_head">
      <h2>SKR线上</h2>
      <fork @click.native="handle()"></fork>
    </div>
    <div class="ser_text">
      <div >
        <div class="contents">
             <textarea 
            type="textarea"
       
          class="textarea"
          placeholder="客服将尽快回复您"
          v-model="message"
        />
        <button class="send" >发送</button>
        </div>
       
      </div>
      
    </div>
  </div>
</template>

<script>
import Fork from "./Fork.vue";
export default {
  components: {
    Fork,
  },
  name: "Service",
  data() {
    return {
      close: true,
      message:'',
    };
  },
  methods: {
    handle() {
      this.close = false;
      this.$emit("isCloseBar", this.close);
    },
  },
};
</script>

<style lang="less" scoped>
.historyPage {
  position: fixed;
  bottom: 0;
  width: 300px;
  height: 500px;
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 10px 10px 10px 5px #333;
}
.his_head {
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-weight: 500;
  text-align: center;
  background-color: #000;
  h2 {
    color: #fff;
  }
}
.ser_text {
  position: relative;
  width: 100%;
  height: 430px;
  padding: 5px;
  overflow: auto;
  background-color: #ddd;
}
.contents {
  padding: 20px 0;
  height: 380px;
  overflow-y: scroll;
  overflow: auto;
}
.send {
  position: absolute;
  right: 18px;
  bottom: 25px;
}
.textarea {
  position: fixed;
//   width: 230px;
  bottom: 60px;
}
</style>
