<template>
    <div class="Aslide">
        <div class="mask">
            <p>{{ onefiyClass }}</p>
            <span>stride.fun</span>
        </div>
        <div>
            <div class="header">
                <p>热销</p>
            </div>
        </div>
        <div class="ant-list">
            <div class="ant-spin-nested-loading">
                <div class="ant-spin-container">
                    <ul class="ant-list-items">
                        <li class="ant-list-item" v-for="(oneSortDivShowHotitem, index) in oneSortDivShowHot"
                            :key="index">
                            <div class="ant-list-item-meta-content">
                                <h4 class="ant-list-item-meta-title">
                                    <a href="">{{ oneSortDivShowHotitem.title }}</a>
                                </h4>
                                <div class="ant-list-item-meta-description">{{ 1666 }}件</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "primaryitemLeft",
    data() {
        return {

        }
    },
    props: {
        onefiyClass: {
            type: String,
            default: "",
        },
        oneSortDivShowHot: {
            type: Array,
            default: '',
        }
    },
    created(){
        
    },
    watch:{
       

    }
}
</script>
<style scoped lang="less">
* {
    box-sizing: border-box;
}

.Aslide {
    width: 16%;

    .mask {
        height: 155px;
        padding: 30px 0 0 30px;
        background-color: #5a5a5a;
        font-size: 30px;
        font-family: "ProximaNova-Thin";
        color: #fff;
        letter-spacing: -1px;
        line-height: 26px;
        font-weight: 100;
    }

    .header {
        height: 53px;
        background-color: #f2f2f2;
        font-family: "yg740";
        font-size: 18px;
        color: #333;
        padding: 16px 0 16px 30px;
    }

    .ant-list {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

        .ant-spin-nested-loading {
            position: relation;

            .ant-spin-container {
                position: relative;
                transition: opacity 0.3s;

                .ant-list-items {
                    margin: 0;
                    padding: 0;
                    list-style: none;

                    .ant-list-item {
                        padding: 20px 30px 0 30px;
                        border-bottom: 1px solid #e8e8e8;
                        // display: flex;
                        align-items: center;
                        padding: 12px 0;

                        .ant-list-item-meta-content {
                            display: flex;
                            justify-content: space-between;
                            box-sizing: border-box;

                            .ant-list-item-meta-title {
                                width: 80%;
                                color: rgba(0, 0, 0, 0.65);
                                font-size: 14px;
                                line-height: 22px;

                                a {
                                    font-size: 12px;
                                    color: #666;
                                    text-decoration: none;
                                }
                            }

                            .ant-list-item-meta-description {
                                color: rgba(0, 0, 0, 0.45);
                                font-size: 14px;
                                line-height: 22px;
                                padding-top: 17px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>