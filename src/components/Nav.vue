<template>
    <div class="TitleBag">
        <div class="nav">
            <!-- <h3>Title </h3> -->
            <div class="nacs">
                <img src="data:image/png;base64,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"
                    alt="">
            </div>
            <div class="ipt">
                <input type="text" placeholder="潮流,从搜索开始" v-model="search_content">
                <span @click="search"><svg t="1656586956214" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2167" width="200" height="200">
                        <path
                            d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z"
                            fill="#262626" p-id="2168"></path>
                    </svg></span>
            </div>
            <div class="navBag ">
                <div class="registerDiv" @click="LOGINOUT">
                    <p><svg t="1656339584889" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="23891" width="200" height="200">
                            <path
                                d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5-32.6 32.5-70.5 58.1-112.7 75.9-43.6 18.4-90 27.8-137.9 27.8-47.9 0-94.3-9.4-137.9-27.8-42.2-17.8-80.1-43.4-112.7-75.9-32.6-32.5-58.1-70.4-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-0.4-12.3-6.7-12.3z"
                                p-id="23892"></path>
                            <path
                                d="M956.9 505.7L815 393.7c-5.3-4.2-13-0.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112c4.1-3.2 4.1-9.4 0-12.6z"
                                p-id="23893"></path>
                        </svg></p>
                    <p><span class="register">LOGINOUT</span></p>
                </div>
                <div class="loginDiv" @click="myself">
                    <p><svg t="1656340034999" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="24064" width="200" height="200">
                            <path
                                d="M955.566829 1024H71.430244V717.299512h82.139785v81.92H153.350244v142.860488h720.296585V760.257561l-2.167883-40.900059 19.930537-1.058965H955.566829z"
                                fill="#333333" p-id="24065"></path>
                            <path d="M366.142439 708.308293h291.715122v91.910244H366.142439z" fill="#2E91E5"
                                p-id="24066"></path>
                            <path
                                d="M325.781854 487.264156c-32.298459-25.664937-57.543805-56.265054-75.026732-90.9312C232.522927 360.158283 223.281951 320.586927 223.281951 278.727805c0-37.633249 7.80238-74.1376 23.197347-108.494049 14.785561-33.007766 35.904937-62.608859 62.768702-87.974088C364.064468 30.500215 436.773463 1.998049 513.998049 1.998049c77.224585 0 149.93358 28.502166 204.750049 80.251629 26.863766 25.365229 47.983141 54.966322 62.768702 87.974088C796.911766 204.590205 804.714146 241.094556 804.714146 278.727805c0 37.223649-8.331863 73.777951-24.775805 108.653893-15.125229 32.088663-36.384468 61.310127-63.188292 86.86517l-55.156137-57.843512C702.354107 377.551298 724.792195 328.659044 724.792195 278.727805c0-108.52402-94.557659-196.807805-210.794146-196.807805s-210.794146 88.283785-210.794147 196.807805c0 57.903454 24.99559 108.384156 72.299396 145.957463l-49.721444 62.578888z"
                                fill="#333333" p-id="24067"></path>
                            <path
                                d="M412.317346 461.309502L138.125112 771.66642a3.876215 3.876215 0 0 1-5.474653 0.339668l-59.731669-52.768468a3.876215 3.876215 0 0 1-0.339668-5.474654L346.771356 403.406049a3.876215 3.876215 0 0 1 5.474654-0.339669l59.731668 52.768469a3.876215 3.876215 0 0 1 0.339668 5.474653zM613.930459 463.777093l274.182243 310.346927a5.149971 5.149971 0 0 0 7.262908 0.44956l57.833522-51.090107a5.149971 5.149971 0 0 0 0.449561-7.262907L679.476449 405.873639a5.149971 5.149971 0 0 0-7.262908-0.449561l-57.833521 51.090107a5.149971 5.149971 0 0 0-0.449561 7.262908z"
                                fill="#333333" p-id="24068"></path>
                        </svg></p>
                    <p><span class="login">MY</span></p>
                </div>
                <div class="shopCarDiv" @click="shopCar">
                    <p><svg t="1656338372817" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="23037" width="200" height="200">
                            <path
                                d="M384 960c-47.104 0-85.312-36.48-85.312-81.472S336.896 797.12 384 797.12s85.312 36.48 85.312 81.408C469.312 923.52 431.104 960 384 960z m426.688 0c-47.168 0-85.376-36.48-85.376-81.472s38.208-81.408 85.376-81.408c47.104 0 85.312 36.48 85.312 81.408C896 923.52 857.792 960 810.688 960zM262.272 186.24H1024l-91.968 407.232h-577.92l13.12 58.56h554.112l-18.56 81.408H298.24l-31.552-139.968h-0.256l-59.52-265.6-41.152-182.4H0V64h234.752l27.52 122.24z m18.368 81.408L335.68 512h527.424l55.232-244.352H280.64z"
                                fill="#000000" p-id="23038"></path>
                        </svg>
                    </p>
                    <!-- <p></p><span class="shopCar">购物车</span> -->
                    <p>{{ shopCar_length }}</p>
                </div>
            </div>

        </div>
        <div class="navtion" :class="{ 'fix-nav': navBarFixed }">
            <div id="contentNav" class="contentNav" >
                <div class="nacs" v-show="show" @click="nacs">
                    <img src="data:image/png;base64,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"
                        alt="">
                </div>
                <div class="onefiyList">
                    <div class="classfiyAddFoot_item" v-for="oneSort in onefiyList" :key="oneSort"
                        @mouseenter="twofiyAdd(oneSort)" @click="classfiyAddFoot_item(oneSort)">
                        {{ oneSort }}
                    </div>
                    <div class="twofiyList" @mouseleave="empty">
                        <ul class="twoSortDiv">
                            <li class="twoSort_hover" v-for="twoSort in twoLinked_Data" :key="twoSort"
                                @click="twolevl(twoSort)">{{ twoSort }}</li>
                        </ul>
                        <div class="oneSortDivShow">
                            <div id="oneSortDivShowItem" v-for="(oneSortTu, index) in oneSortDivShow" :key="index"
                                @click="detail(oneSortTu)">
                                <img :src="oneSortTu.img" alt="">
                                <p>{{ oneSortTu.title }}</p>
                                <p><span>www.stride.fun</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="PopDiv" @click="clickPOP"><span>POP</span></div>
                <div class="exclusiveDiv" @click="clickEXCLUSIVE"><span>EXCLUSIVE</span></div>
                <div class="eeventDiv" @click="clickEVENT"><span>EVENT</span></div>
                <div class="bestDiv" @click="BEST"><span>BEST</span></div>
                <div class="contentNav_right" v-show="show">

                    <div class="registerDiv">
                        <span class="register">注册</span>
                    </div>

                    <div class="loginDiv">
                        <span class="login">登录</span>
                    </div>
                    <div class="shopCarDiv" @click="shopCar">
                        <span class="shopCar">购物车</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { onefiyAdd, twofiyAdd, onefiyAddDetail, twofiyAddDetail } from '../api/Home_page_navigation/classfiy.js'
// import {gainShopDetail} from '../api/detail.js'
import { getShopCar, deleteShopCar, addShopCar } from "@/api/shopcar.js";
export default {
    name: 'Title',
    data() {
        return {
            navBarFixed: false,
            show: false, //true时导航栏图片显示
            onefiyList: [], //一级分类
            twofiyList: [], //二级分类
            twoLinked_Data: [], // 一级导航点击关联数据
            count: 0, // 为1时清空 twoLinked_Data
            search_content: '',//搜索内容
            oneSortDivShow: [],//一级导航数据
            shopCar_length: 0,//购物车长度
        }
    },
    methods: {
        watchScroll() {
            // 滚动的距离
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            // 容器的高度
            var offsetTop = document.querySelector("#contentNav").offsetHeight;

            // console.log("scrollTop=>", scrollTop, "offsetTop=>", offsetTop);

            //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
            if (scrollTop > offsetTop) {
                this.navBarFixed = true;
                this.show = true;
            } else {
                this.navBarFixed = false;
                this.show = false;
            }
        },
        classfiyAddFoot() {
            // console.log(123);
            onefiyAdd().then((data) => {
                // console.log('一级数据');
                this.onefiyList = data.data;
                this.twofiyList = data.result;
                // console.log(data.data);
            });
        },
        twofiyAdd(parent_name) {
            // console.log(parent_name);
            // console.log(this.twofiyList);
            let twoList = this.twofiyList;
            let click_count = this.count
            if (click_count == 1) {
                // console.log('----------');
                this.twoLinked_Data = []; //清空数组
            }
            twoList.forEach(key => {
                let name = key.parent_name
                if (name == parent_name) { //判读数据的name是否与点击name一致
                    this.twoLinked_Data.push(key.name) //添加数据到数组(二级导航)中
                }
            });
            this.count = 1;
            // console.log('----', this.twoLinked_Data);
            onefiyAddDetail(parent_name).then((data) => {
                // console.log(data.res);
                this.oneSortDivShow = data.res;
                // console.log("一级商品数据", data);
                // console.log(this.oneSortDivShow);


            })
        },
        empty() {
            this.twoLinked_Data = []; //清空一级导航下分类数组
            this.oneSortDivShow = []; //清空一级导航数据渲染数组
        },
        twolevl(twoSort_name) {
            this.$router.push(`/twolevl/${twoSort_name}`);
        },
        search() {
            let searItem = this.search_content;
            // console.log('---', searItem);
            this.$router.push(`/search/${searItem}`);
            // console.log("wdawd",this.search_content);
            let search_content = this.search_content 
            // this.$store.dispatch('searchVal',search_content)
            this.search_content = '';
        },
        myself() {
            this.$router.push(`/mypage`)
        },
        clickEXCLUSIVE() {
            this.$router.push(`/exclusive`)
        },
        clickEVENT() {
            this.$router.push(`/event`)
        },
        clickPOP() {
            this.$router.push(`/POP`)
        },
        shopCar() {
            this.$router.push(`/shopCar`)
        },
        LOGINOUT() {  // 退出登录
            this.$store.dispatch("removeuser") //清空本地记录
            this.$router.push(`/login`)
        },
        detail(shopDetail) {   // 点击跳转到商品详情
            // console.log('-----------------------------------------------', shopDetail);
            this.$router.push(`/detail/${shopDetail.id}`);
            // this.$router.go(0)
        },
        getShopCar() {
            // Id用户得id
            let customer_id = this.$store.state.user.customer_id;
            let data = {
                customer_id,
            };
            // console.log('++++++++12323111++++++++++++++++++++++',data);
            getShopCar(data).then((data) => {
                // console.log(data);
                let shopCar = data.data;
                this.shopCar_length = shopCar.length


            });
        },
        nacs(){
            this.$router.push(`home`)
        },
        BEST(){
            this.$router.push(`MyBest`)
        },
        classfiyAddFoot_item(oneSort){
            this.$bus.$emit('twoClassfiy',this.twoLinked_Data)
            // console.log(this.oneSortDivShow,'231111=======================');
            this.$bus.$emit('oneSortDivShow',this.oneSortDivShow)
            // console.log('----------------------------bus执行',this.twoLinked_Data,this.oneSortDivShow);
            this.$router.push(`/onefiy/${oneSort}`)




        }
    },
    created() {
        },
    mounted() {
        this.getShopCar()
        this.classfiyAddFoot();
        window.addEventListener('scroll', this.watchScroll);
        this.$bus.$on('shopCarlength', shopCarlength => {
            // console.log('bus执行', shopCarlength);
            this.shopCar_length = shopCarlength
        })
    },
    destroyed() {
        // 移除事件监听
        window.removeEventListener("scroll", this.watchScroll);
    },
    watch:{
        $route: {
            deep: true, // 深度
            handler(to, from) {
                // console.log("---------------------watch route----------------");
               this.twofiyAdd()


            },
        },
    }
}
</script>
<style  scoped lang="less" >
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.TitleBag {
    width: 100%;
    min-width: 1270px;
}

.nav {
    /* width: 1670px; */
    /* width: 100%; */
    max-width: 1670px;
    min-width: 1260px;
    margin: 0 auto;
    height: 60px;
    /* border: 1px solid #333; */
}

.nacs {
    width: 172px;
    height: 65px;
    float: left;
    clear: both;
}

.nav .nacs>img {
    width: 172px;
    height: 60px;
}

.ipt {
    border-bottom: 2px solid #333;
    width: 375px;
    top: 10px;
    float: left;
    margin-left: 325px;
    margin-top: 12px;

    .icon {
        width: 20px;
        height: 20px;
    }

}

.ipt input {
    border: none;
    width: 313px;
    height: 32px;
    margin: auto 10px;

}

.ipt input:focus {
    border: 0px solid #fff;
    border: none;
    outline: none;
}

.ipt button {
    height: 33px;
    width: 50px;
}

.nav .registerDiv {
    /* float: left; */
    /* margin-left: 350px; */
    cursor: pointer;
    line-height: 60px;
    margin-top: 10px;

    .icon {
        width: 20px;
        height: 20px;
    }

    p {
        line-height: 20px;
        text-align: center;
        margin: 0 auto;
    }
}

.nav .loginDiv {
    /* float: left; */
    margin-left: 15px;
    line-height: 60px;
    cursor: pointer;
    margin-top: 10px;

    .icon {
        width: 20px;
        height: 20px;
    }

    p {
        text-align: center;
        line-height: 20px;
        margin: 0 auto;
    }
}

.nav .shopCarDiv {
    /* float: left; */
    margin-left: 15px;
    line-height: 60px;
    cursor: pointer;
    margin-top: 10px;

    .icon {
        width: 20px;
        height: 20px;
    }

    p {
        line-height: 20px;
        text-align: center;
        margin: 0 auto;
    }
}

.contentNav {
    width: 1670px;
    min-width: none;
    height: 60px;
    color: #fff;
    margin: 0 auto;
    position: relative;
    left: 0px;
}

.contentNav .nacs>img {
    width: 172px;
    height: 55px;
}



.contentNav .PopDiv {
    float: left;
    line-height: 55px;
    margin-left: 50px;
    font-weight: 900;
}

.contentNav .PopDiv:hover {
    color: greenyellow;
}

.contentNav .exclusiveDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .exclusiveDiv:hover {
    color: greenyellow;
}

.contentNav .eeventDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .eeventDiv:hover {
    color: greenyellow;
}

.contentNav .bestDiv {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;
}

.contentNav .bestDiv:hover {
    color: greenyellow;
}

.fix-nav {
    position: fixed;
    top: 0;
    z-index: 999;
}

.contentNav .fix-nav_show {
    display: none;
}

.contentNav .classfiyAddFoot_item {
    float: left;
    line-height: 55px;
    margin-left: 30px;
    font-weight: 900;

}

.contentNav .classfiyAddFoot_item:hover {
    color: greenyellow;
}

.contentNav_right .registerDiv {
    float: left;
    margin-left: 280px;
    cursor: pointer;
    margin-top: 10px;
    /* clear: both; */
}

.contentNav_right .registerDiv>span:hover {
    color: greenyellow;
}

.contentNav_right .loginDiv>span:hover {
    color: greenyellow;
}

.contentNav_right .shopCarDiv>span:hover {
    color: greenyellow;
}

.contentNav_right .loginDiv {
    float: left;
    margin-left: 15px;
    cursor: pointer;
    margin-top: 10px;
}

.contentNav_right .shopCarDiv {
    float: left;
    margin-left: 15px;
    cursor: pointer;
    margin-top: 10px;
}

.onefiyList {
    /* justify-content: center; */
    margin-left: 375px;
    /* margin: 0 auto; */
    /* clear: both; */
    /* position: relative; */
    background-color: #fff;
    z-index: 9;
    width: 100%;
}

.navtion {
    width: 100%;
    background-color: black;
    clear: both;
    color: chocolate;
}

.twofiyList {
    width: 99%;
    margin-top: 60px;
    background-color: #fff;
    left: 0px;
    position: absolute;
    z-index: 99;
    display: flex;
    // height: 400px;

    .oneSortDivShow {
        margin-top: 8px;
        width: 500px;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;

        // border:1px solid #333;
        #oneSortDivShowItem {
            width: 140px;
            height: 250px;
            margin-left: 15px;
            border: 1px solid #333;

            img {
                width: 135px;
                height: 173px;
            }

            p {
                overflow: none;
                line-height: 20px;
                color: #333;
                overflow: hidden;
                padding-top: 5px;
                text-overflow: ellipsis;
                white-space: nowrap;

                span {
                    color: #999;
                    font-size: 14px;
                }
            }
        }

    }

}

.twofiyList .twoSortDiv {
    display: flex;
    flex-wrap: wrap;
    color: black;
    width: 500px;
    margin-left: 15%;
}

.twofiyList .twoSortDiv>li {
    width: 130px;
    line-height: 25px;
    margin: 5px 10px;

}

.twoSort_hover:hover {
    color: greenyellow;
}

.navBag {
    display: flex;
    width: 25%;
    justify-content: center;
    float: right;
}
</style>>