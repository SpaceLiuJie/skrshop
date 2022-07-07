<template>
    <div class="primaryitemRight">
        <div class="hearder">
            <div class="left">
                <p>今日推荐</p>
            </div>
        </div>
        <List :shop="shop" :TypeOneLength="totalLength" :SortChange_list="SortChange_list" />
    </div>
</template>
<script>
import List from '../../../home/shopPage/primarylist/primarylist.vue'
export default {
    name: "primaryitemRight",
    components: {
        List,
    },
    data() {
        return {
            shop: [], //商品总量
            totalLength: 0,//商品总长度
            SortChange_list: [], //热销商品
        }
    },
    props: {
        oneSortDivShow: {
            type: Array,
            default: '',
        }
    },
    methods: {
        detail() {
            let shop = this.oneSortDivShow;
            this.shop= shop
            // console.log('shop', this.shop);
            this.totalLength = this.shop.length;
            // console.log(this.totalLength);
            // 价格从高到低的数据
            let TypeOneHeight = [];
            let data = JSON.parse(JSON.stringify(this.shop));
            TypeOneHeight = data.sort((a, b) => a.price - b.price);
            // console.log('价格从高到低的数据', TypeOneHeight);
            let data_ = JSON.parse(JSON.stringify(this.shop));
            // 价格从低到高的数据
            let TypeOneLow = [];
            TypeOneLow = data_.sort((a, b) => b.price - a.price);
            // console.log('价格从高到低的数据', TypeOneLow)

            // 销量从高到低
            let datas_ = JSON.parse(JSON.stringify(this.shop));
            let TypeOneCount = [];
            TypeOneCount = datas_.sort((a, b) => b.sale - a.sale);
            // console.log('销量从高到低', TypeOneCount);

            // 热销商品截取展示
            this.SortChange_list = [shop, TypeOneLow, TypeOneHeight, TypeOneCount];
            // console.log(this.SortChange_list);
        }
    },
    mounted(){
        this.detail()
    },
    watch:{
         $route: {
            deep: true, // 深度加你太能干
            handler(to, from) {
                // console.log("---------------------watch route----------------");
               
                this.detail();

            },
        },
    }

}
</script>
<style scoped lang="less">
* {
    box-sizing: border-box;
}

.primaryitemRight {
    width: 80%;

    .hearder {
        width: 100%;
        height: 54px;
        border-top: 1px solid #e1e1e1;
        border-bottom: 2px solid #000;
        background-color: #fbfbfb;
        display: flex;
        justify-content: flex-end;

        .left {
            display: flex;
            width: 99%;
            align-items: flex-start;
            float: left;
        }
    }

}
</style>