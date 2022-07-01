<template>
    <div class="edition">
        <div class="title">
            <span id="title">TALKING</span>
        </div>
        <div class="render">
            <div class="contentNeed">
                <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index"
                    @click="detail(item)">
                    <img class="contentImg" slot="over" alt="example" :src="item.img" />
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
    name: 'Talking',
    data() {
        return {
            wantneedList: [],
        }
    },
    methods: {
        async getTypeOneList() {
            const { res } = await getTypeOneList("服饰");
            this.want = res.slice(263, 264);
            this.wantneed = this.want.concat(res.slice(266, 267))
            this.wantneedList = this.wantneed.concat(res.slice(252, 253))
        },
        detail(item) {
            this.$router.push(`/detail/${item.id}`);
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

.render {
    width: 1240px;
    height: 501px;
    margin: 10px auto;
}

.needContent {
    width: 395px;
    height: 501px;
    float: left;
    margin-left: 10px;
    outline: 1px solid rgb(253, 252, 252);
}

.front {
    text-align: center;
    margin: 30px 0 22px 0;
    font-family: "yg750";
    font-size: 20px;
    color: #333;
    line-height: normal;
}

.website {
    font-family: "yg740";
    font-size: 12px;
    color: #666;
    line-height: 17px;
    text-align: center;
}

.contentImg {
    width: 395px;
    height: 395px;
}
</style>
