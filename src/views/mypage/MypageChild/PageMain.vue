<template>
    <div class="PageMain">
        <div class="activityImg">
            <img src="https://image.wconcept.co.kr/images/builder/1/4/138/315/PC_mypage_1240x100_1_20210226162046.jpg"
                alt="" />
        </div>
        <div class="tableTitle">
            <div class="indentmore">
                <h2 class="indent">最近订单</h2>
                <span class="more">more+</span>
            </div>
            <div class="indentblurb">
                <el-table class="el-table" :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="订单日期" width="160">
                    </el-table-column>
                    <el-table-column prop="orderid" label="订单号" width="160">
                    </el-table-column>
                    <el-table-column prop="blurb" label="商品信息" width="400">
                    </el-table-column>
                    <el-table-column prop="num" label="数量" width="110">
                    </el-table-column>
                    <el-table-column prop="shopprice" label="商品价格" width="110">
                    </el-table-column>
                    <el-table-column prop="plan" label="进度" width="140">
                    </el-table-column>
                    <el-table-column label="操作" width="160">
                        <template>
                            <el-button @click="deleindent" type="danger">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="Myaddress tableTitle">
            <div class="addressadd">
                <h2 class="address">我的地址</h2>
                <div class="addaddress">
                    <button>+</button>
                    <span class="added">新增地址</span>
                </div>
            </div>
            <div class="indentblurb">
                <el-table class="el-table" :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="name" label="收货人姓名" width="200">
                    </el-table-column>
                    <el-table-column prop="orderid" label="收货人地址" width="600">
                    </el-table-column>
                    <el-table-column prop="blurb" label="收货人电话" width="230">
                    </el-table-column>
                    <el-table-column label="操作" width="200">
                        <template>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageMain',
    data() {
        return {
            tableData: [],
        }
    },
    methods: {
        deleindent() {
            this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    created() {

    }
}
</script>
<style lang="less" scoped>
.activityImg {
    width: 1240px;
    margin: 0 auto;
}

.tableTitle {
    width: 1240px;
    margin: 30px auto;
}

.indent {
    float: left;
}

.more {
    float: right;
    font-weight: bolder;
}

.el-table {
    border-top: 2px solid black;
}

.Myaddress {
    margin-top: 40px;
}

.address {
    float: left;
}

.addaddress {
    float: right;
}

button {
    margin-right: 10px;
    width: 30px;
    height: 20px;
}
</style>