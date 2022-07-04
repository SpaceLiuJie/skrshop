<template>
    <div id="twolevlDetail">
        <div class="title">
            <h4>{{ twolevl_content }}</h4>
        </div>
        <div class="nav"><span @click="$router.back()">Home</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>Twolevl</span>
        </div>
        <div class='tuShow'>
            <div class="tuShowContent">
                <span>{{ twolevl_content }}专区</span>
                <p>www.stride.fun</p>
            </div>
        </div>
        <div class="daily">
            <p>今日推荐</p>
        </div>
        <div class="dailyContent">
            <div class="statistics">
                <shop-page></shop-page>
                <!-- <div class="count"><span>共计{{ dailyContentTuShow.length }}件</span></div>
                <div class="countClass">
                    <el-select v-model="options[0].value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                           
                        </el-option>
                    </el-select>&nbsp;&nbsp;
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in optionsPrice" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div> -->
            </div>
            <!-- <div class="dailyContentTuShow">
                <div class="dailyContentTuShowList" v-for="(item, index) in dailyContentTuShow" :key="index" @click="ShopDetail(item)">
                    <div class="dailyContentTuShow_content">
                        <img :src="item.img" alt="">
                        <p>{{ item.title }}</p>
                        <p>{{ item.price }}</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import ShopPage from '../home/shopPage/shopPage.vue'
import { onefiyAdd, twofiyAdd, onefiyAddDetail, twofiyAddDetail } from '../../api/Home_page_navigation/classfiy'
export default {
    name: "twolevlDetail",
    components:{
        ShopPage,
    },
    data() {
        return {
            twolevl_content: '',
            // count: 0,
            // options: [{
            //     value: '选项1',
            //     label: '每页30'
            // }, {
            //     value: '选项2',
            //     label: '每页60'
            // }, {
            //     value: '选项3',
            //     label: '每页90'
            // }],
            // optionsPrice: [{
            //     value: '选项1',
            //     label: '价格最高'
            // }, {
            //     value: '选项2',
            //     label: '价格最低'
            // }, {
            //     value: '选项3',
            //     label: '销售最高'
            // }],
            // value: '默认',
            dailyContentTuShow: [ //今日推荐数据
                {
                    title: '安踏1',
                    img_url: 'https://img.fishfay.com/shopgoods/4/162030704/zt-162030704.jpg',
                    price: 60,
                },
                {
                    title: '安踏2',
                    img_url: 'https://img.fishfay.com/shopgoods/4/162030704/zt-162030704.jpg',
                    price: 60,
                },
            ],
        }
    },
    methods: {
        // let twolevlDetail = this.$route.params.twolevlDetail,
        twolevlDetail() {
            let Detail = this.$route.params.twolevlDetail;
            this.twolevl_content = Detail
            console.log(this.twolevl_content);

        },
        twolevlData() {
            let Detail = this.$route.params.twolevlDetail;
            twofiyAddDetail(Detail).then(res => { //获取二级商品列表
                this.dailyContentTuShow = res.data;


            })
        },
        ShopDetail(item){
            console.log(item);
            this.$router.push(`/detail/${item.id}`)
        }

    },
    created() {
        this.twolevlDetail()
        this.twolevlData();


    },
    mounted() {
        // this.twolevlData();

    },
    watch: {
        $route: {
            deep: true, // 深度
            handler(to, from) {
                console.log("---------------------watch route----------------");
                console.log(to);
                this.twolevlDetail()
                // this.getTypeOneShop();
                this.twolevlData();

            },
        },

    }
}
</script>
<style lang="less" scoped>
#twolevlDetail {
    width: 100%;
    background-color: #fff;

    .title {
        // margin: 30px auto;
        // min-width: 1270px;
        // max-width: 1670px;
        font-size: 30px;

        // border: 1px solid #333;
        h4 {
            width: 200px;
            margin: 30px auto;
            text-align: center;
        }
    }

    .nav {
        width: 200px;
        margin: 0 auto;
        text-align: center;

        span {
            color: #333;
        }
    }
    .tuShow {
        width: 80%;
        background-color: #333;
        height: 251px;
        margin: 20px auto;


        .tuShowContent {
            color: #fff;
            // margin-top: 50px;
            // border: 1px solid #333;
            margin-left: 30px;
            height: 80px;
            line-height: 80px;
            padding: 30px;

            span {
                font-size: 50px;
            }

            p {
                color: #999;
            }

        }
    }

    .daily {
        width: 80%;
        background-color: #fff;
        height: 30px;
        margin: 20px auto;
        border-bottom: 2px solid #333;

        p {
            padding-left: 10px;
        }
    }

    .dailyContent {
        width: 80%;
        margin: 10px auto;

        .statistics {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;

        }
    }

    .dailyContentTuShow {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .dailyContentTuShowList {
            // width: 100%;


            .dailyContentTuShow_content {
                width: 300px;
                text-align: center;

                img {
                    width: 293px;
                    height: 293px;
                }
            }
        }
    }
}
</style>
