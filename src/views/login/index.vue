<template>
  <div class="login">
    <title-warp>登录</title-warp>
    <Member-join/>
  </div>
</template>

<script>
import TitleWarp from "@/components/login-register/TitleWarp.vue";
import MemberJoin from "./childComps/MemberJoin.vue"
export default {
  components: { TitleWarp,MemberJoin },
  name: "Login",
  created() {},
};
</script>

<style>
.login {
  width: 100%;
  margin-bottom: 2.6vw;
}
</style>