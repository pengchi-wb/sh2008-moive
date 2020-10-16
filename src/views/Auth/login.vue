<template>
  <div class="login">
    <el-container>
      <el-header>登录</el-header>
      <el-main>
        <el-form :rules="rules" :model="formData" ref="formData">
          <el-form-item label="手机号" prop="mobile">
            <el-input
              placeholder="请输入手机号"
              v-model="formData.mobile"
              maxlength="11"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="formData.password"
            ></el-input>
          </el-form-item>

          <el-button type="primary" @click="submitForm('formData')"
            >登录</el-button
          >
        </el-form>
      </el-main>
      <el-footer>@ copy : 2020 SH-HTML5-2008</el-footer>
    </el-container>
  </div>
</template>

<script>
//引入userLogin
import { userLogin } from "@/api/api";

export default {
  data() {
    return {
      formData: {
        mobile: "",
        password: "",
      },
      rules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },

          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号格式错误",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },

          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  created() {
    this.eventBus.$emit("footerNav", false);
  },
  beforeDestroy() {
    this.eventBus.$emit("footerNav", true);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          //将用户名和密码进行提交（API）
          let ret = await userLogin(this.formData);
          // console.log(ret);
          if (ret.data.code == 1000) {
            //登录成功
            //存储数据
            this.$store.commit("updataToken", ret.data.data._token);
            // 跳转至个人中心页面
            if (this.$route.query.refer) {
              this.$router.push({ path: this.$route.query.refer });
            } else {
              this.$router.push({ path: "./center" });
            }
          } else {
            //登录失败
            alert(ret.data.info);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 50px;
  .el-container {
    width: 80%;
    margin-left: 40px;
    .el-header {
      font: size 22px;
    }
  }
}
</style>
