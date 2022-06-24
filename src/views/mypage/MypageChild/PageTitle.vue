<template>
    <div class="pagetitle">
        <h1 class="title">个人中心</h1>
        <div class="PersonalDetails">
            <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign">
                <el-form-item label="昵称：">
                    <el-input class="frame" v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="用户名：">
                    <el-input class="frame" v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input class="frame" v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input class="frame" v-model="formLabelAlign.type"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <p class="changePassword">
            <button type="primary">修改密码</button>
        </p>
    </div>
</template>

<script>
// import { getUser } from '../../../api/mypage.js'
// import { updatePassword } from '../../../api/mypage.js'
export default {
    name: 'PageTitle',
    data() {
        return {
            labelPosition: 'left',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
        };
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.pagetitle {
    width: 1240px;
    margin: 0 auto;
}

.title {
    font-size: 44px;
    margin: 10px auto;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}

.PersonalDetails {
    width: 40%;
    margin: 0 auto;
}

.frame {
    width: 400px;
}

.changePassword {
    width: 10%;
    margin: 0 auto;
}

button {
    width: 100px;
    height: 40px;
}
</style>