<template>
    <div class="severcenter">
        <div class="title">
            <span id="title">服务中心</span>
        </div>
        <div class="centertop">
            <div class="top"> 常见问题 </div>
            <div class="top"> 消息 </div>
            <div class="top"> 会员福利 </div>
            <div class="top"> 查询 </div>
            <div class="top"> 客户反馈 </div>
        </div>
        <div class="centertop">
            <div class="top"> 常见问题 </div>
            <div class="top"> 消息 </div>
            <div class="top"> 会员福利 </div>
            <div class="top"> 查询 </div>
            <div class="top"> 客户反馈 </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Severcenter',

};
</script>

<style scoped>
* {
    cursor: pointer;
}

.title {
    width: 25%;
    padding-top: 20px;
    margin: 20px auto;
    text-align: center;
}

#title {
    color: rgba(0, 0, 0, 0.65);
    font-family: "ProximaNova-Thin";
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    margin: 60px 0 30px 0;
}

.centertop {
    width: 80%;
    height: 45px;
    margin: 0 auto;
    background-color: #f3f3f3;
}

.top {
    width: 15%;
    height: 35px;
    float: left;
    text-align: center;
    margin-left: 4%;
    padding-top: 10px;
}
</style>
