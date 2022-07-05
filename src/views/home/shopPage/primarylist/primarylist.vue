<template>
    <div class="PrimaryList">
        <!-- <div class="hearder">
            <div class="left">
                <p>今日推荐</p>
            </div>
        </div> -->
        <div class="sort">
            <span>共计{{ TypeOneLength }}</span>
            <div>
                <el-select v-model="value1" style="width: 120px" @change="handleChangePage">
                    <el-option v-for="(item, index) in PageLength" :value="item" :key="index">
                        每页{{ item }}
                    </el-option>
                </el-select>
                <el-select v-model="value2" style="width: 120px" @change="handleChangeType">
                    <el-option v-for="(item, index) in SortChange" :value="item" :key="index">{{ item }}</el-option>
                </el-select>
            </div>
        </div>
        <div class="dailyContentTuShow">
            <div class="dailyContentTuShowList" v-for="(item, index) in TypeOne_init.slice(sliceStart, sliceEnd)"
                :key="index" @click="ShopDetail(item)">
                <div class="dailyContentTuShow_content">
                    <img :src="item.img" alt="">
                    <p>{{ item.title }}</p>
                    <p>{{ item.price }}</p>
                </div>
            </div>
        </div>
        <div class="page">
            <el-pagination :current-page="current" :default-current="1" :total="TypeOneLength"
                :page-Size="thisPageLength" @change="changepage" layout="prev, pager, next"></el-pagination>

        </div>
    </div>
</template>
<script>
export default {
    name: 'primarylist',
    data() {
        return {
            PageLength: ["30", "60", "90"],
            SortChange: ["默认", "价格最高", "价格最低", "销量最高"],
            // 每页条数
            value1: 30,
            value2: "默认",
            thisPageLength: 30,
            // 截取条数从第几个开始
            sliceStart: 0,
            sliceEnd: 30,
            // 页数
            current: 1,
            TypeOne_init: [],
        }
    },
    props: {
        shop: {
            type: Array,
            default: "",
        },
        TypeOneLength: {
            type: Number,
            default: 0,
        },
        SortChange_list: {
            type: Array,
            default: "",
        },
        // HotSale: {
        //     type: Array,
        //     default: "",
        // },
    },
    created() {
        // this.shopitem()
    },
    watch: {
        //  $route: {
        //     deep: true, // 深度加你太能干
        //     handler(to, from) {
        //         // console.log("---------------------watch route----------------");
        //         // console.log(to);
        //         // this.twolevlDetail()
        //         // // this.getTypeOneShop();
        //         // this.twolevlData();
        //          this.shopitem()

        //     },
        // },
        shop: {
            deep: true, // 深度加你太能干
            handler(to, from) {
                // console.log("---------------------watch route----------------");
                // console.log(to);
                // this.twolevlDetail()
                // // this.getTypeOneShop();
                // this.twolevlData();
                this.shopitem()
            }
        }
    },
    methods: {
        shopitem() {
            this.TypeOne_init = this.shop;
        },
        // 选择框选择的条数传给每页条数
        handleChangePage(key) {
            this.current = 1;
            this.sliceStart = 0;
            console.log("key", key);
            this.thisPageLength = parseInt(key);
            this.sliceEnd = parseInt(key);
            // this.getTypeOneList_init();
        },
        // 截取的数据从多少条开始 == 页码*每页条数
        changepage(page) {
            this.current = page;
            console.log(page);
            this.sliceStart = (page - 1) * this.thisPageLength;
            this.sliceEnd = this.sliceStart + this.thisPageLength;
        },
        // 点击选择框渲染对应排序数据
        handleChangeType(key) {
            console.log('key,idex', key, index);
            let index = this.SortChange.indexOf(key)
            console.log("index", index);
            console.log(this.SortChange_list);
            this.TypeOne_init = this.SortChange_list[index];
        },
        ShopDetail(item) {
            this.$router.push(`/detail/${item.id}`)
        }

    }
}
</script>

<style lang="less" scoped>
.sort {
    display: flex;
    justify-content: space-between;
}

.dailyContentTuShow {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .dailyContentTuShowList {
        // width: 100%;
        // width: 100%;
        // padding: 0 10px;
        // display: flex;
        // text-align: center;
        // flex-wrap: wrap;
            text-align: center;


        .dailyContentTuShow_content {
            // width: calc((100% / 5) - 8px);
            margin: 10px;
            box-sizing: border-box;
            margin: 0;
            padding: 10px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            list-style: none;
            font-feature-settings: 'tnum';
            position: relative;
            background: #fff;
            border-radius: 2px;
            transition: all 0.3s;
            


                img {
                    width: 220px;
                    height: 220px;
                }
        }
    }
}

.page {
    margin: 0 auto;
    text-align: center;
}
</style>
