 <template>
  <div class="loginWrap">
    <p style="text-align: right">
      <span style="color: #f56c6c">*</span><span>必填项</span>
    </p>
    <div class="inpGroup">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model.number="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model.number="ruleForm.phone"
            style="width: 18vw"
          ></el-input>
          <el-button ref="verify" @click="verify_btn" class="verify">获取验证码</el-button>
        </el-form-item>
        <el-form-item class="btn_Content" style="text-align: center">
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginWrap",
  data() {
    var reg_user = /^[a-zA-Z0-9_-]{4,16}$/;
    var reg_pass =
      /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/;
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!reg_user.test(value)) {
        return callback(
          new Error(
            "用户名为4到16位,可以包括字母、数字、下划线、减号。请输入正确的用户名"
          )
        );
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg_pass.test(value)) {
        return callback(
          new Error(
            "密码应为字母，数字，特殊符号(~!@#$%^&*()_.),两种及以上组合,8-16位字符串。请输入正确的密码"
          )
        );
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      }
    };
    return {
      ruleForm: {
        pass: "",
        user: "",
        email: "",
        phone: "",
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        user: [{ required: true, validator: checkUser, trigger: "blur" }],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    verify_btn(){
        // this.$refs.verify.setAttribute('disabled');
        console.log(this.$refs.verify.validate);
    },
  },
};
</script>

<style lang="less" scoped>
.loginWrap {
  position: relative;
  margin: 0 auto;
  width: 48vw;
  border-top: 1px solid black;
  .inpGroup {
    width: 34vw;
    padding-bottom: 2vw;
    padding-left: 5vw;
  }
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
.btn_Content {
  margin: 0 auto;
}
.phone_box {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}
.verify {
  position: relative;
  right: -2.2vw;
}
</style>