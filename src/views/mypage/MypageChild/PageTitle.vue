<template>
    <div class="pagetitle">
        <div id="title">
            <span class="title">个人中心</span>
        </div>
        <span class="main" @click="goHome">去主页</span>
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
        goHome() {
            this.$router.push("/coupon")
            console.log('去home');
        }
    }
};
</script>

<style scoped>
.pagetitle {
    width: 1240px;
    margin: 0 auto;
}

.title {
    width: 25%;
    margin: 40px auto;
    text-align: center;
}

#title {
    color: rgb(5, 5, 5);
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

.main {
    cursor: pointer;
    width: 44px;
    text-align: center;
    font-weight: bolder;
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