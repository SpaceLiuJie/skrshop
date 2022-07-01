<template>
    <div class="edition">
        <div class="title">
            <span id="title">EDITION</span>
        </div>
        <div class="render">
            <div class="contentNeed">
                <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index"
                    @click="detail(item)" @mouseover="engraft(index)" @mouseout="exgraft" :bordered="false">
                    <div :style="{ width: `100%`, position: 'relative' }">
                        <div :class="{ mask: index == index_page }"
                            :style="{ backgroundColor: mask_background[index] }">
                        </div>
                        <img class="contentImg" slot="over" alt="example" :src="item.img" />
                    </div>
                    <span class="stride">stride.fun</span>
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
    name: 'Edition',
    data() {
        return {
            wantneedList: [],
            mask_background: [`rgba(19, 250, 250, 0.6)`, `rgba(58, 33, 218, 0.6)`, `rgba(250, 75, 236, 0.6)`],
            index_page: null,
        }
    },
    methods: {
        async getTypeOneList() {
            const { res } = await getTypeOneList("服饰");
            this.want = res.slice(261, 262);
            this.wantneed = this.want.concat(res.slice(268, 269))
            this.wantneedList = this.wantneed.concat(res.slice(271, 272))
        },
        detail(item) {
            this.$router.push(`/detail/${item.id}`);
        },
        //鼠标移入
        engraft(index) {
            this.index_page = index

        },
        //鼠标移出
        exgraft() {
            this.index_page = null
        },
    },
    created() {
        this.getTypeOneList();
    }

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

.front {
    line-height: 17px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.website {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 10px;
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

.render {
    width: 1240px;
    height: 480px;
    margin: 0 auto;
}

.stride {
    z-index: 10;
    position: relative;
    top: -340px;
    left: 30px;
    color: #fff;
}

.needContent:hover {
    outline: 1px solid rgb(244, 241, 241);
    box-shadow: 0px 3px 5px #f5f3f1;
}

.needContent {
    width: 360px;
    height: 450px;
    margin-left: 38px;
    float: left;
    outline: 1px solid rgb(245, 242, 242);
}

.contentImg {
    width: 360px;
    height: 360px;
    z-index: -10;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    animation: mask_ 1s;
}

@keyframes mask_ {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
