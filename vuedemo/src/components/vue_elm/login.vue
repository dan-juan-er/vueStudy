<template>
  <dir>
      <p id="p1">hello</p>
      <i class="el-icon-share"></i>
    <h1>登录界面</h1>
    <input v-model="username" placeholder="账号" type="text" />
    <br />
    <input v-model="password" placeholder="密码" type="text" />
    <br />
    <input v-model="captcha_code" placeholder="验证码" ype="text" />
    <br />
    <img :src="code">
    <button @click="getCode()">换一张</button>
    <br />
    <button @click="loginBtn()">登录</button>
  </dir>
</template>

<script>
import { Loading } from 'element-ui'
let loadingInstance;
export default {
  name: "login",
  data(){
      return{
          code:'',
          username:"",
          password:"",
          captcha_code:""
      }
  },
  beforeCreate() {
    //   Loading.service(options);
      loadingInstance = Loading.service({
          fullscreen:true,
          background:"grey",
          text:"拼命加载中。。。",
          spinner:"el-icon-fork-spoon"
      });
// this.$nextTick(() => { 
//   loadingInstance.close();
// });

  },
  created() {
      this.getCode();
  },
  methods: {
    //获取验证码
    getCode(){
        const api = "https://elm.cangdu.org/v1/captchas";
        this.$http({
            url:api,
            method:"post",
            withCredentials:true,//默认为false用于表示用户代理是否跨域请求的情况下从其他跨域中发送cookies
            data:{

            }
        }).then(res=>{
            console.log(res.data);
            this.code = res.data.code;
            // loadingInstance.close();
        });
    },
    //登录操作
    loginBtn(){
        const api = 'https://elm.cangdu.org/v2/login';
        this.$http({
            url:api,
            method:"post",
            withCredentials:true,
            data:{
                username:this.username,
                password:this.password,
                captcha_code:this.captcha_code
            }
        }).then(res=>{
            console.log(res);
            if (res.data.message) {
                alert("wrong");
                return;
            }
            //登录成功，跳转到首页
            this.$router.push({
                name:"pageone",
                query:res.data
            });
        });
    }
  }
};
</script>

<style scoped>

</style>