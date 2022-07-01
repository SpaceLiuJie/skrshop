<template>
    <div class="wantneed">
        <div class="title">
            <span id="title">WANT.NEED</span>
        </div>
        <div class="titlebutton">
            <button class="numall">
                <span class="all">+ALL</span>
                <span class="allnum">(10943)</span>
            </button>
        </div>
        <div class="wantcontent">
            <div class="contentNeed">
                <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index"
                    @click="detail(item)">
                    <img class="contentImg" alt="example" :src="item.img" />
                    <p class="front">{{ item.title }}</p>
                    <p class="website">www.stride.fun</p>
                    <div class="price">
                        <span class="discount_after">{{ item.special_price }}</span>
                        <span class="discount">{{
                                item.price
                        }}</span>
                        <span class="percent">{{ parseInt((item.special_price / item.price) * 100) }}%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTypeOneList } from '../../../../api/exclusive.js'
export default {
    name: 'Wantneed',
    data() {
        return {
            wantneedList: []
        }
    },
    methods: {
        async getTypeOneList() {
            const { res } = await getTypeOneList("服饰")
            this.wantneedList = res.slice(200, 208)
        },
        detail(shopDetail) {
            this.$router.push(`/detail/${shopDetail.id}`);
        },
    },
    created() {
        this.getTypeOneList()
    }

};
</script>

<style lang="less" scoped>
* {
    cursor: pointer;
}

.price {
    height: 20px;
}

.discount_after {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    padding-right: 15px;
}

.needContent {
    height: 246.5px;
    width: 136.5px;
    outline: 1px solid rgb(219, 215, 215);
    margin-left: 15px;
    float: left;
}

.needContent:hover {
    outline: 2px solid rgba(221, 220, 224, 0.4);
    box-shadow: 0px 3px 3px #e8e6e4;
}

.discount {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
}

.percent {
    color: red;
    font-size: 16px;
    padding: 35px;
}

.website {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    height: 15px;
}

.contentNeed {
    width: 1240px;
    margin: 0 auto;
}

.front {
    font-size: 14px;
    height: 28px;
}

.title {
    width: 25%;
    margin: 40px auto;
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

.all {
    line-height: 1.499;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
}

.titlebutton {
    width: 100%;
    height: 36px;
    margin: 20px auto;
}

.numall {
    width: 125px;
    height: 35px;
    padding: 0 20px 0 18px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    color: #aca9a9;
    background-color: #ffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.numall:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: #969393;
}

.numall:focus {
    border-color: #40a9ff;
    text-decoration: none;
    background: #fff;
    outline: 0;
}

.contentImg {
    width: 136.5px;
    height: 136.5px;
}
</style>
