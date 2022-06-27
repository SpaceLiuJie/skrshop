<template>
    <div class="coupon">
        <div class="couponTitle">
            <h2>购物优惠</h2>
        </div>
        <div class="couponContent">
            <el-table class="el-table" :data="tableDate" stripe style="width: 100%">
                <el-table-column prop="id" label="优惠id" width="200">
                </el-table-column>
                <el-table-column prop="name" label="优惠name" width="240">
                </el-table-column>
                <el-table-column prop="start_time" label="开始时间" width="280">
                </el-table-column>
                <el-table-column prop="end_time" label="结束时间" width="280">
                </el-table-column>
                <el-table-column label="操作" width="240">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="deletVoucher(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination :page-count="page" :page-size="30" @current-change="pageChange" background
                layout="prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getVoucher, deletVoucher } from '../../../api/mypage.js'
export default {
    name: 'Coupon',
    data() {
        return {
            tableDate: [],
            total: 30,
            page: 1,
        }
    },
    methods: {
        pageChange(count) {
            this.page = count;
            this.getVoucher();
        },
        getVoucher() {
            let data = {
                page: this.page,
                store_id: 1,//怎样获取店铺的id
            }
            getVoucher(data).then((data) => {
                console.log(data);
                this.tableDate = data.data;
            })
        },
        deletVoucher(item) {
            this.$confirm('此操作将永久删除该优惠券, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let data = {
                    id: item.id,
                }
                deletVoucher(data).then((data) => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getVoucher();
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
};
</script>

<style scoped>
.couponTitle {
    width: 100px;
    height: 50px;
    text-align: center;
    margin: 10px auto;
}

.couponContent {
    border-top: 2px solid black;
    width: 1240px;
    margin: 0 auto;
}

.page {
    width: 1240px;
    margin: 0 auto;
    position: fixed;
    bottom: 45px;
}
</style>