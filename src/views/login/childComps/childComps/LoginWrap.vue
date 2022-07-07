<template>
  <div class="loginWrap">
    <div class="inpGroup">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input v-model.number="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn_Content">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')" style="margin-left: 5vw;">注册</el-button>
          <span class="inputBtn" @click="showImg">
            <img src="@/assets/images/login/forget.png" alt="" width="32px" v-show="imgShow" />
            <img src="@/assets/images/login/rember.png" alt="" width="32px" v-show="!imgShow" />
            <label>记住账号</label>
          </span>
        </el-form-item>
      </el-form>

    </div>
    <div class="btnGroup">
      <ul class="link">
        <li>
          <a href="javascript:;">找回用户名</a>
        </li>
        <li>
          <a href="javascript:;">忘记密码</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginWrap",
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      /*setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value) {
            callback(new Error(""));
          } else {
            callback();
          }
        }
      }, 1000);*/
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      imgShow: true,
      ruleForm: {
        pass: "",
        user: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
      // console.log(formName);
      // console.log(this.ruleForm.pass);
      // console.log(this.ruleForm.user);
      let username = this.ruleForm.user;
      let password = this.ruleForm.pass;
      this.$store.dispatch('setUser', { username, password }).then((res) => {
        // console.log('res------------', res);
        if (res.code == 200) {
          this.$message({
            message: "登录成功",
            type: "success",
          });
          setTimeout(() => {
            this.$router.push("/home");
           
          }, 500);

        } else {
          this.$message({
            message: "登录失败",
            type: "error",
          });
        }

      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.push('/register')
    },
    showImg() {
      this.imgShow = !this.imgShow;
    },
  },
 
};
</script>

<style lang="less" scoped>
.loginWrap {
  position: relative;
  margin: 0 auto;
  width: 48vw;

  .inpGroup {
    width: 34vw;
    padding-bottom: 2vw;

    span.inputBtn {
      position: relative;
      display: inline-block;
      margin: 0.7vw 0.1vw 0.7vw 6vw;

      img {
        position: absolute;
        top: 0;
        left: 0;
      }

      label {
        display: block;
        position: relative;
        color: #000;
        font-family: "ProximaNova-Regular", "yg740";
        line-height: 2vw;
        padding-left: 3vw;
        user-select: none;
      }
    }
  }

  // .btn_Content{
  //   display: flex;
  //   justify-content: space-between;
  // }
  .btnGroup {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12.4vw;

    .link {
      margin-top: 1.4vw;
      padding: 0;
      text-align: center;

      li {
        position: relative;
        display: inline;

        a {
          padding: 0.3vw 0.7vw 0.3vw 1vw;
          color: #000;
          font-size: 0.9vw;
        }

        &:last-child::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 0;
          width: 1px;
          height: 0.8vw;
          background-color: #e2e2e2;
        }
      }
    }
  }
}
</style>