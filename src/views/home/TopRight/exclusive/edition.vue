<template>
    <div class="edition">
        <div class="title">
            <span id="title">EDITION</span>
        </div>
        <div class="contentImg">
            <div class="Imgcontent one">
                <div class="mask maskone"></div>
                <span class="stride strideone">stride.fun</span>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
            <div class="Imgcontent">
                <div class="mask masktwo"></div>
                <span class="stride stridetwo">stride.fun</span>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
            <div class="Imgcontent">
                <div class="mask maskthree"></div>
                <span class="stride stridethree">stride.fun</span>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
        </div>
        <div class="ImgBot">
            <img class="BotImg"
                src="https://img.fishfay.com/shopgoods/1/962129532/zt-962129532/2d1151d153012246a530be9d9e88d9eb.jpg">
            <img class="BotImg"
                src="https://img.fishfay.com/shopgoods/17/A35046808/zt-A35046808/c6426b93d7cea8bc840cb19202de5f16.jpg">
            <img class="BotImg"
                src="https://img.fishfay.com/shopgoods/1/952129113/zt-952129113/9c2d3fce8dd7d7b6d92d85dc3d1d6b96.jpg">
            <img class="BotImg"
                src="https://img.fishfay.com/shopgoods/1/952129782/zt-952129782/64e21b95a84a85e780891d7bafb82cdf.jpg">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    cursor: pointer;
}

.ImgBot {
    width: 1240px;
    height: 296px;
    margin: 10px auto;
}

.BotImg {
    width: 295px;
    height: 295px;
    margin-left: 10px;
}

.title {
    width: 25%;
    padding-top: 20px;
    margin: 20px auto;
    text-align: center;
}

.strideTitle {
    line-height: 60px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.strideNet {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 30px;
}

#title {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

.contentImg {
    width: 1240px;
    height: 480px;
    margin: 0 auto;
}

.stride {
    float: left;
    width: 330px;
    height: 330px;
    color: #fff;
    background-size: 360px;
    padding-top: 30px;
    padding-left: 30px;
    position: relative;
    z-index: -1;
}

.mask {
    position: absolute;
    width: 360px;
    height: 360px;
    /* background-image: linear-gradient(rgb(138, 230, 236), transparent); */
    opacity: 0;
}

.maskone {
    background: rgb(138, 230, 236);
}

.masktwo {
    background: rgb(225, 49, 178);
}

.maskthree {
    background: rgb(246, 223, 15);
}

.Imgcontent:hover .mask {
    opacity: 0.7;
}

.Imgcontent:hover {
    outline: 1px solid rgb(244, 241, 241);
    box-shadow: 0px 3px 5px #f5f3f1;
}

.Imgcontent {
    width: 360px;
    height: 450px;
    margin-left: 38px;
    float: left;
    outline: 1px solid rgb(245, 242, 242);
}

.strideone {
    background-image: url(https://img.fishfay.com/shopgoods/1/952129114/zt-952129114/0c876180e87434125c9fd4ffb5a3d443.jpg);
}

.stridetwo {
    background-image: url(https://img.fishfay.com/shopgoods/1/962129145/zt-962129145/1145f56b1d6fc949a374ec04a3c7b027.jpg);
}

.stridethree {
    background-image: url(https://img.fishfay.com/shopgoods/1/962129781/zt-962129781/2dbb7381730a98c8e1b56192979571d7.jpg);
}
</style>
