<!--组件的布局 -- 组件模板内容-->
<template>
  <div id="app">
    <!-- 页面自动刷新 - 浏览器的热更新 -->
    <!-- <img src="./assets/logo.png"> -->
    <!--
      <h1 v-text="msg"></h1> 
      <h2 v-text="count"></h2> 
      <button @click="add()">点击</button> 
    -->
    <!-- <router-link to='/first'>first</router-link> -->
    <!-- <First></First> -->
    
    <router-view/>
  </div>
</template>
<!--组件的js部分-->
<script>
import First from './components/First'
export default {
  name: 'App',
  data(){
    return{
      msg:"hello",
      count:1
    }
  },
  methods: {
        add(){
         this.count++;
        }
    },
    components:{
      First
    }
}
</script>
<!--组件的样式部分-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
