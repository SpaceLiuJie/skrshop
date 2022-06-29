<template>
    <div class="alliances">
        <div class="title">
            <span id="title">营销联盟</span>
        </div>
        <div class="img">
            <img src="../../../assets/images/footerNav/img_marketing.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alliances',

};
</script>

<style scoped>
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
    margin: 60px 0 20px 0;
}

img {
    vertical-align: middle;
    border-style: none;
}

.img {
    width: 1240px;
    height: 500px;
    margin: 40px auto;
}
</style>
