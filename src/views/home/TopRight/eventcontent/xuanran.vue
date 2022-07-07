<template>
    <div class="render">
        <div class="contentNeed">
            <div hoverable class="needContent" v-for="(item, index) in wantneedList" :key="index" @click="detail(item)">
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
        <div class="pagination">
            <div id="components-pagination-demo-mini">
                <el-pagination :page-count="page" :page-size="30" @current-change="pageChange" background
                    layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { onefiyAddDetail } from 'api/Home_page_navigation/classfiy.js'
export default {
    name: 'Render',
    data() {
        return {
            btn: '',
            wantneedList: [],
            total: 100,
            page: 1,
        };
    },
    methods: {
        pageChange(count) {
            this.page = count;
            if (date != "All") {
                let start = (count - 1) * 10 + 1;
                let end = start + 10 - 1;
                const { res } = onefiyAddDetail("服饰");
                this.wantneedList = res.slice(0, 10)
            }
        },
        getType() {
            onefiyAddDetail("服饰").then(data => {
                this.all = data.res.slice(0, 21)
                onefiyAddDetail("鞋类").then(data => {
                    this.want = this.all.concat(data.res.slice(0, 21))
                    onefiyAddDetail("配件").then(data => {
                        this.wantneed = this.want.concat(data.res.slice(0, 21))
                        onefiyAddDetail("儿童专区").then(data => {
                            this.wantneedList = this.wantneed.concat(data.res.slice(0, 21))
                        })
                    })
                })
            })
        },
        getTypeList() {
            this.$bus.$on('getdata', item => {
                this.btn = item
                this.getTypeOneList()
            })
        },
        getTypeOneList() {
            let date = this.btn;
            if (date == "All") {
                onefiyAddDetail("服饰").then(data => {
                    this.all = data.res.slice(0, 21)
                    onefiyAddDetail("鞋类").then(data => {
                        this.want = this.all.concat(data.res.slice(0, 21))
                        onefiyAddDetail("配件").then(data => {
                            this.wantneed = this.want.concat(data.res.slice(0, 21))
                            onefiyAddDetail("儿童专区").then(data => {
                                this.wantneedList = this.wantneed.concat(data.res.slice(0, 21))
                            })
                        })
                    })
                })
            }
            onefiyAddDetail(date).then(data => {
                this.wantneedList = data.res.slice(0, 84)
            })
        },
        detail(item) {
            this.$router.push(`/detail/${item.id}`);
        },
    },
    created() {
        this.getTypeList();
        this.getType();
    },
};
</script>

<style lang="less" scoped>
* {
    cursor: pointer;
}

.render {
    width: 90%;
    margin: 0 auto;
}

#components-pagination-demo-mini {
    width: 150px;
    height: 20px;
    margin: 20px auto;
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
    height: 270px;
    width: 150px;
    outline: 1px solid rgb(219, 215, 215);
    margin-left: 15px;
    margin-top: 15px;
    float: left;
}

.needContent:hover {
    outline: 2px solid rgba(221, 220, 224, 0.4);
    box-shadow: 0px 3px 3px #e8e6e4;
    position: relative;
    top: -7px;
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
    width: 1000px;
    border: 1px solid rgb(241, 236, 236);
    margin: 15px auto;
}

.front {
    font-size: 14px;
    height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    width: 150px;
    height: 150px;
}
</style>
