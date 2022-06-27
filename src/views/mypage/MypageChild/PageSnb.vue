<template>
    <div class="PageSnb">
        <div class="PageSnbTop">
            <ul class="ulTop">
                <li class="liTop" v-for="item in typeOne" :key="item">
                    <span class="contentStyleT">{{ item }}</span>
                </li>
            </ul>
        </div>
        <div class="PageSnbBot">
            <div class="innerContent" v-show="isShow">
                <div class="inner">
                    <ul class="ulBot" v-for="(item, index) in typeTwo" :key="index">
                        <li class="liBot" v-for="content in item" :key="content">
                            <span class="contentStyle">{{ content }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="showHide">
                <button @click="divShowHide" v-show="btnShow">▲</button>
                <button @click="divShowHide" v-show="!btnShow">▼</button>
            </div>
        </div>
    </div>
</template>

<script>
const typeOne = [
    "我的♡",
    "订单管理",
    "我的活动",
    "购物优惠",
    "信息管理",
    "查询内容",
];
const typeTwo = [
    ["我的♡物品", "我的♡品牌", "我的♡风格"],
    ["订购/配送查询", "取消/交换/退货查询", "收到的礼品盒", "签发凭证"],
    ["进货通知", "活动参与明细"],
    ["会员等级", "优惠券", "预收款", "购物券"],
    ["修改会员信息", "管理地址簿", "W.工资管理", "退款账户管理", "会员退出"],
    ["商品Q&A", "商品评价", "1:1查询"],
];
export default {
    name: "PageSnb",
    data() {
        return {
            typeOne,
            typeTwo,
            isShow: true,
            btnShow: true,
        };
    },
    methods: {
        divShowHide() {
            this.isShow = !this.isShow;
            this.btnShow = !this.btnShow
        },

    },
};
</script>

<style lang="less" scoped>
.PageSnb {
    margin-bottom: 60px;
    margin-top: 60px;
    width: 100%;
}

.PageSnbTop {
    width: 100%;
    min-width: 1240px;
    border-top: 1px solid #e6e6e6;
    background-color: #f3f3f3;
}

.ulTop {
    display: flex;
    margin: 0 auto;
    width: 1240px;
    list-style: none;
}

.liTop {
    position: relative;
    width: 206px;
    text-align: center;
    line-height: 41px;
    color: #333;
}

.contentStyleT {
    font-size: 15px;
    font-weight: bolder;
}

.liTop:not(:first-child)::before {
    content: "";
    width: 1px;
    height: 14px;
    background-color: #e5e5e5;
    display: block;
    position: absolute;
    top: 12px;
    left: 0;
}

.PageSnbBot {
    width: 100%;
}

.innerContent {
    border-bottom: 1px solid #e6e6e6;
}

.inner {
    display: flex;
    padding: 9px 0;
    margin: 0 auto;
    width: 1240px;
}

.ulBot {
    position: relative;
    width: 206px;
    height: 128px;
    list-style: none;
}

.ulBot:not(:first-child)::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 1px;
    height: 100%;
    background-color: #e5e5e5;
}

.liBot {
    width: 100%;
    line-height: 25px;
    text-align: center;
    color: #4c4c4c;
}

.contentStyle {
    font-size: 14px;
}

.showHide {
    position: relative;
    margin: 0 auto;
    width: 1240px;
}

button {
    position: absolute;
    top: -1px;
    right: 0;
    width: 30px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    background-color: #fff;
    outline: none;
    border: 1px solid #e6e6e6;
    border-top-width: 0;
    font-size: 12px;
    color: #000;
    cursor: pointer;
}

button:last-child {
    background-color: #f3f3f3;
}
</style>