<template>
    <div class="carousel">
        <div class="content">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="picture" v-for="(src, index) in imgs" :key="index">
                    <img class="imgbottom" :src="src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="cent">
            <div class="txt">
                <p>10%세일</p>
                <span>JSNY</span>
                <span>21SUMMER</span>
            </div>
            <div class="cet-img">
                <ul>
                    <li v-for="(item, index) in cetImg" :key="index">
                        <a href=""><img :src="item" alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MySwiper from "./MySwiper.vue";
export default {
    components: {
        MySwiper,
    },
    data() {
        return {
            imgs: [
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_2_20210415180123.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_6_20210415180048.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_3_20210415175853.jpg",
            ],
            cetImg: [
                "//image.wconcept.co.kr/productimg/image/img1/80/301239080.jpg",
                "//image.wconcept.co.kr/productimg/image/img1/74/301239074.jpg",
                "//image.wconcept.co.kr/productimg/image/img1/70/301239070.jpg",
            ],
        };
    },
};
</script>

<style lang='less' scoped>
.carousel {
    position: relative;
    width: 1145px;
    margin: 0 auto;
    top: 10px;
}

.content {
    position: relative;
    width: 1145px;
    margin: 0 auto;
    z-index: -1;
}

.imgbottom {
    width: 1145px;
    z-index: -1;
}

.cent {
    position: absolute;
    width: 1140px;
    margin: 0 auto;
    top: 145px;
    z-index: 1;
}

.txt {
    position: relative;
    z-index: 10;
    width: 1145px;
    height: 150px;
    margin: 0 auto;
    background-color: #ffffffa6;
    font-size: 12px;
    font-family: "yg740";

    p {
        font-size: 14px;
        padding-left: 200px;
        padding-top: 20px;
        color: #666;
    }

    span:nth-of-type(1) {
        display: block;
        margin-top: 3px;
        font-size: 40px;
        padding-left: 200px;
        color: #000;
    }

    span:nth-of-type(2) {
        display: block;
        font-size: 22px;
        padding-left: 200px;
    }
}

.cet-img {
    position: absolute;
    bottom: -10px;
    right: 165px;
    z-index: 10;
    padding: 10px;
    background-color: #fff;
    width: 457px;
    height: 205px;

    ul {
        display: flex;
        justify-content: space-between;

        li {
            width: 139px;
            height: 185px;
            margin-left: 10px;
            list-style: none;

            img {
                width: 100%;

            }
        }
    }
}
</style>