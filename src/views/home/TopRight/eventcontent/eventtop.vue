<template>
    <div class="eventtop">
        <div class="content">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="picture" v-for="(src, index) in imgs" :key="index">
                    <img class="imgbottom" :src="src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Eventtop',
    data() {
        return {
            imgs: [
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_2_20210415180123.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_6_20210415180048.jpg",
                "//image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_3_20210415175853.jpg",
            ],
        }
    },
    methods: {

    }

};
</script>

<style scoped>
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
} */

.content {
    width: 1145px;
    border: 1px solid black;
    margin: 0 auto;
}

.imgbottom {
    width: 1145px;
}
</style>
