<template>
    <div class="allshop">
        <div class="tab-btn">
            <ul>
                <li @click="All">All</li>
                <li @click="footwear">鞋类</li>
                <li @click="costume">服饰</li>
                <li @click="accessories">配件</li>
                <li @click="Kids">儿童专区</li>
            </ul>
            <div class="sort">
                <ul>
                    <li v-for="(item, index) in sort" :key="index">
                        <a href="">{{ item }}</a>
                    </li>
                </ul>
            </div>
            <div class="wantcontent">
                <div class="contentNeed">
                    <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index">
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
    </div>
</template>

<script>
import { getTypeOneList } from '../../../../api/exclusive.js'
export default {
    name: 'Allshop',
    data() {
        return {
            sort: ["全部", "收藏", "趋势", "社论", "销售", "事件"],
            wantneedList: [],
        };
    },
    methods: {
        All() {
            getTypeOneList().then(() => {
                const { res } = getTypeOneList("鞋类");
                this.wantneedList = res;
            })
        },
        footwear() {
            getTypeOneList().then(() => {
                const { res } = getTypeOneList("鞋类");
                this.wantneedList = res;
            })
        },
        costume() {
            getTypeOneList().then(() => {
                const { res } = getTypeOneList("服饰");
                this.wantneedList = res;
            })
        },
        accessories() {
            getTypeOneList().then(() => {
                const { res } = getTypeOneList("配件");
                this.wantneedList = res;
            })
        },
        Kids() {
            getTypeOneList().then(() => {
                const { res } = getTypeOneList("儿童专区");
                this.wantneedList = res;
            })
        },
    },
}
</script>

<style lang="less" scoped>
.tab-btn {
    width: 100%;
    height: 60px;
    margin-bottom: 100px;

    >ul {
        display: flex;
        width: 85%;
        margin: auto;

        >li {
            width: 20%;
            height: 100%;
            text-align: center;
            line-height: 60px;
            border: 1px solid #b5b5b5;
            border-bottom: 2px solid #000;
            list-style: none;

            button {
                width: 100%;
                font-size: 18px;
                font-weight: 600;
                background-color: #fff;
                outline-style: none;
                border: none;
                cursor: pointer;
            }
        }

        .btn_bor {
            border: 2px solid #000;
            border-bottom: none;
        }
    }
}

.tab-btn {
    .sort {
        display: flex;
        justify-content: space-between;
        width: 85%;
        height: 32px;
        margin: 24px auto;

        ul {
            display: flex;
            width: 100%;
            height: 100%;

            li {
                height: 100%;
                padding: 6px 20px 6px 21px;
                border-right: 1px solid #ccc;
                list-style: none;

                a {
                    color: #666;
                    text-decoration: none;
                    transition: color 0.3s;
                    font-size: 14px;
                }
            }

            li:last-of-type {
                border: none;
            }
        }
    }
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

.contentNeed {
    width: 1240px;
    margin: 0 auto;
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

.contentImg {
    width: 136.5px;
    height: 136.5px;
}

.front {
    font-size: 14px;
    height: 28px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.website {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    height: 15px;
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
</style>
