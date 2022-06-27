<template>
    <div class="edition">
        <div class="title">
            <span id="title">EDITION</span>
        </div>
        <div class="contentImg">
            <div class="Imgcontent one">
                <span class="stride strideone">stride.fun</span>
                <div class="mask"></div>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
            <div class="Imgcontent">
                <span class="stride stridetwo">stride.fun</span>
                <div class="mask"></div>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
            <div class="Imgcontent">
                <span class="stride stridethree">stride.fun</span>
                <div class="mask"></div>
                <span class="strideTitle">安踏男服史努比联名短袖短T恤2021新款短t</span><br />
                <span class="strideNet">www.stride.fun</span>
            </div>
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

.Imgcontent:hover {
    outline: 1px solid rgb(183, 179, 179);
    box-shadow: 0px 3px 5px #e8e6e4;
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

.img-caption {
    width: 360px;
    height: 360px;
    margin-left: 38px;
    z-index: -1;
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
    width: 330px;
    height: 330px;
}

.mask {
    position: absolute;
    border: 4px solid black;
    top: 0;
    left: 0;
    width: 330px;
    height: 330px;
    background-color: #935414;
    opacity: 0;
}

.stride:hover .mask {
    opacity: 1;
}

.Imgcontent {
    width: 360px;
    height: 450px;
    margin-left: 38px;
    float: left;
    outline: 1px solid rgb(220, 217, 217);
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
