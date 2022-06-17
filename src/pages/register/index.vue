<template>
  <div class="register">
    <!-- el-form是表单组件
        :label-opsiton  设置label对其方式 left right
        label-width     设置label 的宽度
        model:表单绑定的数据 -->
    <el-form :lable-position="labelPosition" :label-width="labelWidth" :model="user" ref="userForm">
      <!-- el-form-item 需要是 el-form的子组件
            label: 填写label信息;
            label-width 设置当前 el-form-item 的label的宽度 -->
      <el-form-item label="注册名:" :rules="usernameRules" prop="username">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码:" :rules="passwordRules" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
      <div>
        <el-button @click="onSubmit('userForm')" class="btn" type="success">注册</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { register } from "../../api/register.js";
export default {
  name: "Register",
  data() {
    // validateUserName 自定义验证函数
    // rule:
    // value表单验证数据
    // callback回调函数;
    //     回参: 提示信息;
    const validateUserName = (rule, value, callback) => {
      console.log("validate user name ");
      console.log(rule);
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (value.length < 4) {
        return callback(new Error("长度不能小于4"));
      }
      if (value.length > 6) {
        return callback(new Error("长度不能大于6"));
      }
      let patten = /\w{4,6}/;
      if (!patten.test(value)) {
        return callback(new Error("内容不合法，请输入数字字母下划线"));
      }
      callback();
    };
    const validatorPsd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      if (value.length < 6) {
        return callback(new Error("长度不能小于6"));
      }
      if (value.length > 16) {
        return callback(new Error("长度不能大于16"));
      }
      let patten = /\w{4,6}/;
      if (!patten.test(value)) {
        return callback(new Error("内容不合法，请输入数字字母下划线"));
      }
      callback();
    };
    return {
      labelPosition: "right",
      labelWidth: "80px",
      user: {
        username: "",
        password: "",
      },
      usernameRules: {
        validator: validateUserName,
        required: true,
        trigger: "blur",
      },
      passwordRules: [
        { validator: validatorPsd, required: true, trigger: "blur" },
      ],
    };
  },
  methods: {
    onSubmit(str) {
      this.$refs[str].validate((valid) => {
        // validate 返回验证结果 true验证通过  false验证不通过
        if (valid) {
          // 表单验证通过，发送注册请求
          this.setRegister();
        }
      });
    },
    setRegister() {
      return register(this.user).then((data) => {
        if (data.code == 1) {
          // 提示注册成功
          this.$message({
            message: "注册成功",
            type: "success",
          });
          // 跳转到登陆页面
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        }
      });
    },
  },
};
/**
 * 总结:
 * component Method
 */
</script>

<style lang="scss" scoped>
.register {
  margin: 30px auto;
  width: 40%;
  border: 1px solid rgb(241, 236, 236);
  box-shadow: 0px 5px 5px #91908e;

  .el-form {
    margin: 30px auto;
    margin-right: 20px;

    .el-button {
      margin-left: 45px;
      width: 20%;
    }
  }
}
</style>