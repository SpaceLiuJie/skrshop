<template>
    <div class="allshop">
        <div class="tab-btn">
            <ul>
                <li v-for="(item, index) in btn" :key="index" @click="onbtn(item,index)"
                    :class="{ btn_bor: avtiveIndex == index ? true : false }">
                    <button>{{ item }}</button>
                </li>
            </ul>
            <div class="sort">
                <ul>
                    <li v-for="(item, index) in sort" :key="index">
                        <a @click="upthis">{{ item }}</a>
                    </li>
                </ul>
            </div>
            <div class="select">
                <el-select v-model="value" style="width:150px;" size="mini" placeholder=" 진행중 이벤트 ">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Allshop',
    data() {
        return {
            btn: ["All", "鞋类", "服饰", "配件", "儿童专区"],
            sort: ["全部", "收藏", "趋势", "社论", "销售", "事件"],
            avtiveIndex: "0",
            options: [{
                label: ' 진행중 이벤트 '
            }, {
                label: ' 진행중 이벤트 '
            }],
            value: ''
        };
    },
    methods: {
        onbtn(item,index) {
            this.$bus.$emit('getdata', item)
            this.avtiveIndex = index;
            this.$emit('listTma', this.btn[index])
        },
        upthis() {
            this.$router.push("/event")
        }
    },
    mounted() {

    },
    created() {

    }

}
</script>

<style lang="less" scoped>
* {
    cursor: pointer;
}

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
        width: 70%;
        float: left;
        height: 32px;
        margin: 24px auto;
        margin-left: 60px;

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

                    &:hover {
                        color: rgb(238, 9, 9);
                    }
                }
            }

            li:last-of-type {
                border: none;
            }
        }
    }

    .select {
        width: 150px;
        height: 20px;
        margin-right: 80px;
        margin-top: 30px;
        float: right;
    }
}
</style>
