<template>
  <div class="memberJoin">
    <div class="joinCont">
      <LoginWrap/>
      <ThirdParty/>
      <NonMember/>
    </div>
  </div>
</template>

<script>
import LoginWrap from './childComps/LoginWrap.vue';
import NonMember from './childComps/NonMember.vue';
import ThirdParty from './childComps/ThirdParty.vue';
export default {
  components: { LoginWrap,ThirdParty,NonMember},
  name: "MemberJoin",
}
</script>

<style lang="less" scoped>
.memberJoin{
    margin: 0 auto;
    width: 1240px;
    .joinCont {
        padding-top: 60px;
        margin-bottom: 180px;
        border-top: 2px solid #171717;
    }
}
</style>