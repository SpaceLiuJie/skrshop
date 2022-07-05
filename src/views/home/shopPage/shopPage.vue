<template>
    <div class="shopPage">
        <Primarylist :shop="shop" :TypeOneLength="totalLength" :SortChange_list="SortChange_list" />
    </div>
</template>
<script>
import Primarylist from './primarylist/primarylist.vue'
import { twofiyAddDetail, onefiyAddDetail } from '../../../api/Home_page_navigation/classfiy.js'
export default {
    name: 'page',
    components:{
        Primarylist,
    },
    props: {
        oneSortDivShow:{
            type:Array,
            default:'',
        }
    },
    data() {
        return {
            shop: [], //商品总量
            totalLength: 0,//商品总长度
            SortChange_list: [], //热销商品
        }
    },
    methods: {
        twofiyAddDetail() {
            let name = this.$route.params.twolevlDetail; //获取当前路由参数
            twofiyAddDetail(name).then(res => { //获取二级商品列表
                if (res.code == 200) {
                    let shop = res.data;
                    this.shop = shop
                    console.log('shop', this.shop);
                    this.totalLength = this.shop.length;
                    console.log(this.totalLength);
                    // 价格从高到低的数据
                    let TypeOneHeight = [];
                    let data = JSON.parse(JSON.stringify(res.data));
                    TypeOneHeight = data.sort((a, b) => a.price - b.price);
                    console.log('价格从高到低的数据', TypeOneHeight);
                    let data_ = JSON.parse(JSON.stringify(res.data));
                    // 价格从低到高的数据
                    let TypeOneLow = [];
                    TypeOneLow = data_.sort((a, b) => b.price - a.price);
                    console.log('价格从高到低的数据', TypeOneLow);

                    // 销量从高到低
                    let datas_ = JSON.parse(JSON.stringify(res.data));
                    let TypeOneCount = [];
                    TypeOneCount = datas_.sort((a, b) => b.sale - a.sale);
                    console.log('销量从高到低', TypeOneCount);

                    // 热销商品截取展示
                    this.SortChange_list = [shop, TypeOneLow, TypeOneHeight, TypeOneCount];
                }
            })
        }
    },
    mounted() {
        this.twofiyAddDetail()
    },
    watch: {
        $route: {
            deep: true, // 深度加你太能干
            handler(to, from) {
                console.log("---------------------watch route----------------");
                console.log(to);
                this.twofiyAddDetail();

            },
        },
    }


}

</script>
<style lang="less" scoped>
.shopPage {
    width: 100%;
    // border: 1px solid #333;
}
</style>