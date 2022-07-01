<template>
    <div class="eventtop">
        <div class="content">
            <el-carousel :interval="5000" style="height:821px" arrow="always">
                <el-carousel-item style="height:821px" class="picture" v-for="(src, index) in imgs" :key="index">
                    <img class="imgbot" :src="src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="render">
            <div class="contentNeed">
                <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index"
                    @click="detail(item)">
                    <img class="contentImg" alt="example" :src="item.img" />
                    <p class="front">{{ item.title }}</p>
                    <p class="website">www.stride.fun</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getTypeOneList } from '../../../../api/exclusive.js'
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
            wantneedList: [],
        }
    },
    methods: {
        async getTypeOneList() {
            const { res } = await getTypeOneList("服饰");
            this.want = res.slice(261, 263);
            this.wantn = this.want.concat(res.slice(265, 266))
            this.wantneed = this.wantn.concat(res.slice(267, 269))
            this.wantneedList = this.wantneed.concat(res.slice(271, 272))
        },
        detail(item) {
            this.$router.push(`/detail/${item.id}`);
        },
    },
    created() {
        this.getTypeOneList();
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

.render {
    width: 492px;
    height: 912px;
    float: left;
}

.needContent {
    width: 193px;
    height: 294px;
    float: left;
    margin: 5px;
    outline: 1px solid rgba(0, 0, 0, 0.2);
}

.needContent:hover {
    outline: 2px solid rgba(67, 11, 235, 0.4);
    position: relative;
    top: -7px;
    box-shadow: 0px 10px 10px #bfbbb3;
}

.contentImg {
    width: 193px;
    height: 193px;
    margin: 5px 10x 5px 10px;
}

.front {
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

.website {
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
