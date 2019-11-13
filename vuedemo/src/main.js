// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// let Vue = require('组件路径')
// main.js入口的全局js文件
//导入vue.js核心库 es6中的导入 import

import Vue from 'vue'
//导入App.vue组件 取名叫App组件
//导入路由模块 在router文件夹下的index.js
import App from './App'
import router from './router'
// 导入store文件夹中的index.js
import store from './store'
import './swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//index中div的id为app
  store,
  router,//注册路由
  components: { App },//注册局部组件，将App组件内容解析到#app所在的div内容中去，也就是index.html
  template: '<App/>'//
})
