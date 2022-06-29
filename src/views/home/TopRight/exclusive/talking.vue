<template>
    <div class="talking">
        <div class="title">
            <span id="title">TALKING</span>
        </div>
        <div class="ImgBot">
            <div class="TalkImg">
                <img class="BotImg"
                    src="https://img.fishfay.com/shopgoods/1/952129110/zt-952129110/f23a9ce7759483b30a2005c5d1c9db4f.jpg">
                <p class="talkImgTitle">安踏男服史努比联名短袖短T恤2021新款短t</p>
                <p class="talkImgNet">www.stride.fun</p>
            </div>
            <div class="TalkImg">
                <img class="BotImg"
                    src="https://img.fishfay.com/shopgoods/1/962129143/zt-962129143/ed512bd9340a060a6aa7d44411ecad3b.jpg">
                <p class="talkImgTitle">安踏女服史努比联名短袖短T恤2021新款短t</p>
                <p class="talkImgNet">www.stride.fun</p>
            </div>
            <div class="TalkImg">
                <img class="BotImg" src="https://img.fishfay.com/shopgoods/1/152030609/zt-152030609.jpg">
                <p class="talkImgTitle">冬奥特许商品国旗款国旗青年梭织套头衫</p>
                <p class="talkImgNet">www.stride.fun</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Talking',


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
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

.ImgBot {
    width: 1240px;
    height: 501px;
    margin: 10px auto;
}

.talkImgTitle {
    text-align: center;
    margin: 30px 0 22px 0;
    font-family: "yg750";
    font-size: 20px;
    color: #333;
    line-height: normal;
}

.talkImgNet {
    font-family: "yg740";
    font-size: 12px;
    color: #666;
    line-height: 17px;
    text-align: center;
}

.TalkImg {
    width: 395px;
    height: 501px;
    float: left;
    margin-left: 10px;
    outline: 1px solid rgb(253, 252, 252);
}

.BotImg {
    width: 395px;
    height: 395px;
}
</style>
