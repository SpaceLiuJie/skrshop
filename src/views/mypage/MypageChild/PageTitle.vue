<template>
    <div class="pagetitle">
        <div id="title">
            <span class="title">个人中心</span>
        </div>
        <span class="main" @click="goHome">去主页</span>
        <!-- <div class="PersonalDetails">
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
        </div> -->
        <p class="changePassword">
            <button type="primary" @click="showForget = true">修改密码</button>
        </p>
        <div class="forgetPassword" v-show="showForget">
            <div class="modify">
                <button class="closeModify" @click="showForget = false">X</button>
                <span class="changepass">修改密码</span>
                <p id="changeuser">
                    <label for="userMod" class="changeuser">用户名：</label>
                    <input type="text"
                        style="height:30px;width: 202px;background-color:whitesmoke;border: 1px solid rgb(125, 121, 121);"
                        placeholder="请输入用户名" id="userMod" v-model.trim="nameMod" @click="userModShow = false" />
                    <span v-show="userModShow" class="nocun">用户名不存在</span>
                </p>
                <p id="changeuser">
                    <label for="passwordMod" class="changeuser">新密码：</label>
                    <input
                        style="height:30px;width: 202px;background-color:whitesmoke;border: 1px solid rgb(125, 121, 121);"
                        type="password" placeholder="请输入新密码" id="passwordMod" v-model.trim="newPassword"
                        @click="passwordModShow = false" />
                    <span v-show="passwordModShow" class="nocun">新密码不能为空</span>
                </p>
                <button @click="confirmMod" class="done">确认</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { getUser } from '../../../api/mypage.js'
import { updatePassword } from '../../../api/mypage.js'
export default {
    name: 'PageTitle',
    data() {
        return {
            showForget: false,
            nameMod: "",
            newPassword: "",
            userModShow: false,
            passwordModShow: false,
        };
    },
    methods: {
        goHome() {
            this.$router.push("/home")
            console.log('去home');
        },
        confirmMod() {
            if (this.nameMod == "") {
                this.userModShow = true;
                return;
            } else if (this.newPassword == "") {
                this.passwordModShow = true;
                return;
            }
            updatePassword({
                username: this.nameMod,
                password: this.newPassword,
            }).then((res) => {
                if (res.code == 402) {
                    this.userModShow = true
                    return
                };
                this.showForget = false
                this.nameMod = ''
                this.newPassword = ''
                this.$message.success("密码修改成功！");
                // console.log(res);
            });
        },
    }
};
</script>

<style lang="less" scoped>
.pagetitle {
    width: 1240px;
    margin: 0 auto;
}

.nocun {
    font-size: 10px;
    color: red;
}

.changepass {
    font-size: 48px;
    font-weight: bolder;
    padding: 20%;
}

.forgetPassword {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000069;
    z-index: 999999;
}

.changeuser {
    line-height: 40px;
    color: rgb(125, 121, 121);
}

#changeuser {
    width: 280px;
    margin: 20px auto;
}

.title {
    width: 25%;
    padding-top: 20px;
    margin: 20px auto;
    text-align: center;
}

#title {
    color: rgba(0, 0, 0, 0.65);
    font-family: "ProximaNova-Thin";
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    margin: 60px 0 20px 0;
}

.modify {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    background-color: #fff;
    border: 1px solid #000;
}

.closeModify {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 25px;
    height: 25px;
    background-color: #fff;
    color: #000;
    border-radius: 19px;
    border: 1px solid #000;
    cursor: pointer;
    outline: none;
    z-index: 9999999;
}

.done {
    display: block;
    margin: 60px auto 0;
    width: 200px;
    height: 40px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    outline: none;
    cursor: pointer;
}

.main {
    cursor: pointer;
    width: 44px;
    text-align: center;
    font-weight: bolder;
    margin-left: 100px;
}

.main:hover {
    color: orangered;
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