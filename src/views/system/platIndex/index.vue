<template>
  <div class="app-container">
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
      <div class="load_title">正在加载系统资源，请耐心等待9999</div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { getPlatIndex } from "@/api/system/platIndex";
import { encrypt, decrypt } from "@/utils/jsencrypt";

export default {
  name: "plaIndex",
  data() {
    return {
      userName: "",
      key: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: true,
        code: "",
        uuid: "",
      },
    };
  },
  created() {
    this.login();
    this.getCookie();
  },
  methods: {
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get("rememberMe");
      this.loginForm = {
        username:
          username === undefined ? this.$route.query.userName : username,
        password:
          password === undefined
            ? this.$route.query.userName
            : decrypt(password),
      };
    },
    login() {
      this.loginForm.userName = this.$route.query.userName;
      this.loginForm.key = this.$route.query.key;
      Cookies.set("username", this.$route.query.userName, { expires: 30 });
      Cookies.set("password", encrypt(this.$route.query.key), {
        expires: 30,
      });
      this.$store
        .dispatch("LoginMain", this.loginForm)
        .then(() => {
          console.log('111')
          this.$router.push({ path: this.redirect || "/" });
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>