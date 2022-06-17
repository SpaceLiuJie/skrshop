<template>
  <div class="login">
    <!-- el-form是表单组件
        :label-opsiton  设置label对其方式 left right
        label-width     设置label 的宽度
        model:表单绑定的数据 -->
    <el-form :lable-position="labelPosition" :label-width="labelWidth" :model="user" ref="userForm">
      <!-- el-form-item 需要是 el-form的子组件
            label: 填写label信息;
            label-width 设置当前 el-form-item 的label的宽度 -->
      <el-form-item label="用户名:" :rules="usernameRules" prop="username">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码:" :rules="passwordRules" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
      <div>
        <el-button @click="onSubmit('userForm')" class="btn" type="success">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { login } from "../../api/login.js";
import { set } from "../../utils/localStrage.js";

export default {
  name: "Login",
  data() {
    return {
      labelPosition: "right",
      labelWidth: "80px",
      user: {
        username: "",
        password: "",
      },
      /**
       * required 必填
       * min 最小长度
       * max 最大长度
       * type 类型
       * pattern 正则
       * validator 验证函数
       * message 提示信息
       * trigger 什么事件验证
       */
      usernameRules: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: "4", message: "输入内容不能小于4", trigger: "blur" },
        { max: "6", message: "输入内容最大不能大于6", trigger: "blur1" },
        {
          pattern: /\w{4,6}/,
          message: "请输入数字字母下划线",
          trigger: "blur",
        },
      ],
      passwordRules: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: "6", message: "输入内容不能小于6", trigger: "blur" },
        { max: "16", message: "输入内容最大不能大于16", trigger: "blur1" },
        {
          pattern: /\w{6,16}/,
          message: "请输入数字字母下划线",
          trigger: "blur",
        },
      ],
    };
  },
  methods: {
    onSubmit(str) {
      /**
       * this.$refs[ref] 获取ref绑定的dom元素
       * Form Method  validate
       * form. validate()
       * 1:el-form-item 需要 prop
       *
       * validate
       * 作用：表单验证
       * 参数：回调函数
       * 返回值是：promise实例
       */
      this.$refs[str].validate((valid) => {
        // valid 返回验证结果 true验证通过  false验证不通过
        console.log(valid);
        if (valid) {
          // 表单验证通过，发送登陆请求
          this.login();
        } else {
          // 表单验证不通过
          return false;
        }
      });
    },
    login() {
      this.$store.dispatch("setUser", this.user).then(() => {
        // 提示登录成功
        this.$message({
          message: "登录成功",
          type: "success",
        });

        // 跳转到首页.....? ? ? ?
        setTimeout(() => {
          this.$router.push("/home");
        }, 5000);
      });
      // login(this.user).then((result) => {
      //   if (result.code == 1) {
      //     let token = result.token;
      // 问题:1: HOME DETAIL shopcar 需要使用token
      // 解决:将token共享
      // 1:分析 home detal shopcar login 是否为关系性组件，--->没关系
      // 2:非关系的组件通信。vuex observeable bus.. .
      // 3:选择vuex
      // 问题 如何将token存储到vuex中

      // dispatch(action,parms) 触发store下index.js中的actions下面的函数
      // 参一：vuex中actions中的函数名
      // 参二：给setUser函数传入的实参
      // 触发 vuex actions中setUser函数
      // let user = {
      //   token,
      //   username: result.username,
      // };
      // set("user", JSON.stringify(user));
      // this.$store.dispatch("setUser", user);
      // 问题 页面刷新vuex中数据回到初始化。如何持久化存储vue
      // }
      // });
    },
  },
};
/**
 * 总结:
 * component Method
 */
</script>

<style lang="scss" scoped>
.login {
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