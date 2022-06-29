<template>
    <div class="eventtop">
        <div class="content">
            <el-carousel :interval="5000" style="height:821px" arrow="always">
                <el-carousel-item style="height:821px" class="picture" v-for="(src, index) in imgs" :key="index">
                    <img class="imgbot" :src="src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="contentRight">
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/952129114/zt-952129114/0c876180e87434125c9fd4ffb5a3d443.jpg">
                <div class="boxbottitle">安踏男服史努比联名短袖短T恤2021新款短t</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/962129145/zt-962129145/1145f56b1d6fc949a374ec04a3c7b027.jpg">
                <div class="boxbottitle">安踏女服史努比联名短袖短T恤2021新款短t</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/962129781/zt-962129781/2dbb7381730a98c8e1b56192979571d7.jpg">
                <div class="boxbottitle">安踏女裤史努比联名针织短裤2021新款</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/952129115/zt-952129115/42f3719b093b02fd31cbea1def05de64.jpg">
                <div class="boxbottitle">安踏男服史努比联名短袖短T恤2021新款短t</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/952129111/zt-952129111/064daa642595010c8ff53672becc7cb6.jpg">
                <div class="boxbottitle">安踏男服史努比联名短袖短T恤2021新款短t</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
            <div class="box">
                <img class="boxbot"
                    src="https://img.fishfay.com/shopgoods/1/962129144/zt-962129144/bccb0dd965d618fb19eb2fb72e9969b7.jpg">
                <div class="boxbottitle">安踏女服史努比联名短袖短T恤2021新款短t</div>
                <div class="boxbotlink">www.stride.fun </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Eventtop',
    data() {
        return {
            imgs: [
                "//img.fishfay.com/shopgoods/1/962129532/zt-962129532/2d1151d153012246a530be9d9e88d9eb.jpg",
                "//img.fishfay.com/shopgoods/17/A35046808/zt-A35046808/c6426b93d7cea8bc840cb19202de5f16.jpg",
                "//img.fishfay.com/shopgoods/1/952129113/zt-952129113/9c2d3fce8dd7d7b6d92d85dc3d1d6b96.jpg",
                "//img.fishfay.com/shopgoods/1/952129782/zt-952129782/64e21b95a84a85e780891d7bafb82cdf.jpg",
            ],
        }
    },
    methods: {

    }

};
</script>

<style scoped>
* {
    cursor: pointer;
}

.eventtop {
    width: 1400px;
    margin: 5px auto;
}

.content {
    width: 822px;
    height: 822px;
    float: left;
    margin-top: 5px;
}

.contentRight {
    width: 492px;
    height: 912px;
    float: left;
}

.box {
    width: 193px;
    height: 294px;
    float: left;
    margin: 5px;
    outline: 1px solid rgba(0, 0, 0, 0.2);
}

.box:hover {
    outline: 2px solid rgba(67, 11, 235, 0.4);
    position: relative;
    top: -7px;
    box-shadow: 0px 10px 10px #bfbbb3;
}

.boxbot {
    width: 193px;
    height: 193px;
    margin: 5px 10x 5px 10px;
}

.boxbottitle {
    width: 145px;
    height: 24px;
    margin: 20px auto;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.boxbotlink {
    width: 145px;
    height: 21px;
    margin: 5px auto;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    text-align: center;
    font-feature-settings: 'tnum';
}
</style>
