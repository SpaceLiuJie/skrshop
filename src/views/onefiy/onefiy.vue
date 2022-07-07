<template>
    <div class="onefiy">
        <div class="title"><span>{{ onefiyClass }}</span></div>
        <div class="Tag">
            <div class="Tagitem">
                <div class="hotTag"><span>热门标签</span></div>
                <div class="hotTagitem">
                    <button v-for="(tag, index) in twoClassfiy_hot " :key="index" class="ant-btn">#{{ tag }}</button>
                </div>
            </div>
            <div class="TagSearch">
                <input type="text" placeholder="潮流,从搜索开始">
                <span><svg t="1656586956214" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2167" width="200" height="200">
                        <path
                            d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z"
                            fill="#262626" p-id="2168"></path>
                    </svg></span>
            </div>
        </div>
        <div class="Breadcrumb">
            <div class="ant-breadcrumb">
                <span>
                    <span class="ant-breadcrumb-lick"><a href="/home">Home</a></span>
                    <span class="ant-breadcrumb-separator">/</span>
                    <span class="ant-breadcrumb-lick">Primary</span>
                </span>
            </div>
        </div>
        <Primary :onefiyClass="onefiyClass" :oneSortDivShowHot="oneSortDivShowHot" :oneSortDivShow="oneSortDivShow">
        </Primary>
    </div>
</template>
<script>
import { onefiyAdd, twofiyAdd, onefiyAddDetail, twofiyAddDetail } from '../../api/Home_page_navigation/classfiy'
import Primary from "./onefiychilder/primaryItem.vue";
export default {
    name: 'onefiy',
    components: {
        Primary,
    },
    data() {
        return {
            onefiyClass: "",
            twoClassfiy: [],  //二级全部TAg
            twoClassfiy_hot: [],//二级需要渲染TAg
            oneSortDivShow: [], //一级分类数据
            oneSortDivShowHot: []//热销数据
        }
    },
    methods: {
       async title() {
            this.onefiyClass = this.$route.params.typeone
          await  this.$bus.$on('twoClassfiy', twoClassfiy => {
                // console.log('2132141411141214142 on执行');
                // console.log(this.twoClassfiy);
                this.twoClassfiy = twoClassfiy
                // console.log('12133出啊答案是时代大厦', this.twoClassfiy);
                let randomArr = [2, 7, 6, 0, 1];
                this.twoClassfiy_hot = [];
                // console.log('randomArr', randomArr);
                randomArr.forEach(key => {
                    this.twoClassfiy_hot.push(this.twoClassfiy[key])
                });

                // console.log('098775433221', this.twoClassfiy_hot);
                // this.$bus.$emit('twoClassfiy_hot',this.twoClassfiy_hot)
            })
           await this.$bus.$on('oneSortDivShow', oneSortDivShow => {
                this.oneSortDivShow = oneSortDivShow
                // console.log('一级数据',this.oneSortDivShow);
                this.oneSortDivShowHot = [];
                let randomArr2 = [5, 7, 6, 0, 1, 10, 9, 14, 12, 13,];
                randomArr2.forEach(key => {
                    // console.log(key);
                    this.oneSortDivShowHot.push(this.oneSortDivShow[key])
                });
                // console.log(this.oneSortDivShowHot,"13221231321212112312");
            })
        },
        // twofiyAdd() {
        //     this.onefiyClass = this.$route.params.typeone
        //     onefiyAdd(this.onefiyClass).then((data) => {
        //         console.log('一级数据');
        //         this.twoClassfiy = data.result;
        //         console.log(data);
        //     });
        //     // console.log(parent_name);
        //     // console.log(this.twofiyList);
        //     let twoList = this.twoClassfiy;
        //     // let click_count = this.count
        //     // if (click_count == 1) {
        //     //     // console.log('----------');
        //     //     this.twoLinked_Data = []; //清空数组
        //     // }
        //     let parent_name = this.$route.params.typeone
        //     twoList.forEach(key => {
        //         let name = key.parent_name
        //         if (name == parent_name) { //判读数据的name是否与点击name一致
        //             this.twoClassfiy_hot.push(key.name)
        //         }
        //     });
        //      console.log("this.twoClassfiy_hot", this.twoClassfiy_hot);//添加数据到数组(二级导航)中
        //     // this.count = 1;
        //     // console.log('----', this.twoLinked_Data);
        //     onefiyAddDetail(parent_name).then((data) => {
        //         // console.log(data.res);
        //         this.oneSortDivShow = data.res;
        //         console.log("一级商品数据1123", data);
        //         // console.log(this.oneSortDivShow);
        //     })
        // },
        // random() { //找出热门标签和热销数据   //需修改
        //     // let arr = []
        //     // let randomArr = [2, 7, 6, 0, 1];
        //     // //  this.twoClassfiy_hot = [];
        //     // console.log('randomArr', randomArr);
        //     // randomArr.forEach(key => {
        //     //     arr.push(this.twoClassfiy_hot[key])
        //     //     this.twoClassfiy_hot = arr

        //     // });
        //     // console.log(this.twoClassfiy_hot, '----------------------------------1231');

        //     // while (randomArr.length < 5) {
        //     //     let num = Math.round(Math.random() * this.twoClassfiy.length)
        //     //     // console.log(num);
        //     //     if (randomArr.indexOf(num) == -1) {
        //     //         randomArr.push(num)
        //     //     }
        //     // }



        //     // ------------------------------

        //     // this.oneSortDivShowHot = [];
        //     // let randomArr2 = [5, 7, 6, 0, 1, 10, 12, 43, 12, 9,];
        //     // while (randomArr2.length <10) {
        //     //     let num = Math.round(Math.random() * this.oneSortDivShow.length)
        //     //     // console.log(num);
        //     //     if (randomArr2.indexOf(num) == -1) {
        //     //         randomArr2.push(num)
        //     //     }
        //     // }

        //     // console.log('randomArr', randomArr);
        //     // randomArr2.forEach(key => {
        //     //     // console.log(key);
        //     //     this.oneSortDivShowHot.push(this.oneSortDivShow[key])
        //     // });
        //     // console.log('热销数据',this.oneSortDivShowHot);
        // }

    },
    mounted() {


        // this.random()
    },
    created() {
        // this.twofiyAdd()
        this.title();
    },
    watch: {
        $route: {
            deep: true, // 深度
            handler(to, from) {
                // console.log("---------------------watch route----------------123");
                this.title();
                // this.twofiyAdd()
                // this.random()


            },
        },

    }
}
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}

.onefiy {
    width: 100%;

    .Tag {
        display: flex;
        justify-content: space-between;
        padding: 0 38px;
        line-height: 50px;
        align-items: center;
    }

    .title {

        text-align: center;
        color: #333;
        font-family: "ProximaNova-Thin";
        font-size: 48px;
        text-transform: uppercase;
        text-align: center;
        margin: 60px 0 20px 0;
        font-weight: 100;
    }

    .Tagitem {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;

        .hotTag {
            width: 20%;
            line-height: 50px;
            text-align: center;
        }

        .hotTagitem {
            width: 70%;

            // box-sizing: border-box;
            .ant-btn {
                margin: 5px 10px;
                height: 40px;
                padding: 0 20px;
                font-size: 16px;
                border-radius: 40px;
                color: rgba(0, 0, 0, 0.65);
                background: #fff;

            }

            .ant-btn:hover {
                background: #007aff;
                color: #fff;
            }
        }
    }

    .TagSearch {
        width: 14%;
        line-height: 100%;
        box-sizing: border-box;

        border-bottom: 1px solid #333;

        input {
            width: 85%;
            border: 0px;
            outline: none;
        }

        .icon {
            width: 14px;
            height: 14px;
        }
    }

    .Breadcrumb {
        width: 58%;
        display: flex;
        align-items: center;
        margin: 20px auto;

        .ant-breadcrumb {
            text-align: left;


            .ant-breadcrumb-separator {
                margin: 0 8px;
                color: rgba(0, 0, 0, 0.45);
            }

            .ant-breadcrumb-lick {
                span {
                    color: rgba(0, 0, 0, 0.65);

                    a {
                        cursor: pointer;
                    }

                    a:hover {
                        color: #007aff;
                    }
                }
            }
        }
    }

}
</style>