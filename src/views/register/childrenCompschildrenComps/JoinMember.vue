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

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" type="email"> </el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model.number="ruleForm.phone"
            style="width: 18vw"
          ></el-input>
          <el-button
            v-show="codeFlag"
            ref="verify"
            @click="verify_btn"
            class="verify"
            >点击获取验证码</el-button
          >
          <el-button v-show="!codeFlag" disabled class="verify"
            >{{ codeNum }}秒后再次发送</el-button
          >
        </el-form-item>
        <el-form-item
        style="width: 14vw;"
          label="验证码"
          prop="code"
        >
          <el-input v-model.number="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item class="btn_Content" style="text-align: center">
          <el-button style="width: 10vw" @click="registerBtn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { register, getMessage } from "@/api/register.js";
export default {
  comments: { register, getMessage },
  name: "LoginWrap",
  data() {
    // 用户名验证
    const checkUser = (rule, value, callback) => {
      let reg_user = /^[a-zA-Z0-9_-]{4,16}$/;
      this.flagNum = false;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!reg_user.test(value)) {
        return callback(
          new Error(
            "用户名为4到16位,可以包括字母、数字、下划线、减号。请输入正确的用户名"
          )
        );
      } else {
        this.flagNum = true;
      }
    };
    // 密码验证
    const checkPass = (rule, value, callback) => {
      let reg_pass =
        /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/;
      this.flagNum = false;
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (!reg_pass.test(value)) {
        return callback(
          new Error(
            "密码应为字母，数字，特殊符号(~!@#$%^&*()_.),两种及以上组合,8-16位字符串。请输入正确的密码"
          )
        );
      } else {
        this.flagNum = true;
      }
    };
    // 邮箱验证
    const checkEmail = (rule, value, callback) => {
      let reg_email =
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      this.flagNum = false;
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else if (!reg_email.test(value)) {
        return callback(new Error("请输入正确的邮箱地址"));
      } else {
        this.flagNum = true;
      }
    };
    // 手机号验证
    const checkPhone = (rule, value, callback) => {
      let reg_phone =
        /^(13[0-9]|14[5-9]|15[0-35-9]|16[25-7]|17[0-8]|18[0-9]|19[0135689])[0-9]{8}$/;
      this.flagNum = false;
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else if (!reg_phone.test(value)) {
        return callback(new Error("请输入正确的手机号"));
      } else {
        this.flagNum = true;
        this.phoneVeifly = true;
      }
    };
    const checkcode = (rule, value, callback) => {
      this.flagNum = false;
      if (this.codeVeifly === "") {
        callback(new Error("请先获取验证码"));
      } else if (value === "") {
        return callback(new Error("请输入验证码"));
      } else {
        this.flagNum = true;
      }
    };
    return {
      codeFlag: true,
      codeNum: "",
      codeVeifly: "",
      phoneVeifly: false,
      ruleForm: {
        pass: "",
        user: "",
        email: "",
        phone: "",
        code: "",
        flagNum: true,
      },
      rules: {
        pass: [
          { required: true, validator: checkPass, trigger: ["blur", "change"] },
        ],
        user: [
          { required: true, validator: checkUser, trigger: ["blur", "change"] },
        ],
        email: [
          {
            required: true,
            validator: checkEmail,
            trigger: ["blur", "change"],
          },
        ],
        phone: [
          {
            required: true,
            validator: checkPhone,
            trigger: ["blur", "change"],
          },
        ],
        code: [
          { required: true, validator: checkcode, trigger: ["blur", "change"] },
        ],
      },
    };
  },
  methods: {
    // 获取验证码
    verify_btn() {
      let datas = {
        options: "",
      };
      if (this.phoneVeifly) {
        getMessage(datas)
          .then((data) => {
            this.codeVeifly = data.data.Code;
            // console.log("验证码为：", this.ruleForm.codeNum);
          })
          .catch((data) => {
            alert("请求失败");
          });
        this.codeNum = 4;
        this.codeFlag = false;
        this.timer = setInterval(() => {
          this.codeNum--;
          if (this.codeNum < 1) {
            this.codeFlag = true;
            clearInterval(this.timer);
          }
        }, 1000);
      }else{
        alert('请输入正确的手机号')
      }
    },
    // 注册按钮
    registerBtn() { 
      let registerFlag =
        this.ruleForm.pass != "" &&
        this.ruleForm.user != "" &&
        this.ruleForm.email != "" &&
        this.ruleForm.phone != "" &&
        this.codeVeifly != "" &&
        1;
      if (!registerFlag) {
        alert("请完善您的信息");
      }else{
        alert("注册成功")
        this.$router.push(`/login`);
      }
      // if (this.codeVeifly == this.ruleForm.code) {
      //   console.log(this.codeVeifly,this.ruleForm.code);
      //   alert('相等')
      // }else{
      //   console.log(this.codeVeifly,this.ruleForm.code);
      //   alert('bu等')
      // }
      //   return

// 验证码问题
      return
      let data = {
        username: this.ruleForm.user,
        password: this.ruleForm.pass,
        email: this.ruleForm.email,
        VerificationCode:this.ruleForm.code,
      };
      register(data).then((data) => {
        console.log("这个数据", data);
        if (data.code == 200) {
        alert("注册成功");
        this.$router.push(`/login`);
      }else{
        alert(data.message)
      }
      });
     
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
  right: -1.9vw;
}
</style>