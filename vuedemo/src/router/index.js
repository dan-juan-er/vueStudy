import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
//标签路径导入First组件
// import HelloWorld from '../components/HelloWorld'
//@router 文件夹的上级src
import Home from '@/components/vue191018/home'
import One from '@/components/vue191018/one'
import Two from '@/components/vue191018/two'
import Three from '@/components/vue191018/three'
import Swipe from '@/components/vue191018/swipe'
import Login from '@/components/vue_elm/login'
import Pageone from '@/components/vue_elm/pageone'
import News_index from '@/components/news/news_index'
import News_detail from '@/components/news/news_detail'
import Weather from '@/components/weather/weather'
Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:"news",
    //   component:News_index
    // },
    // {
    //   path:'/news_detail',
    //   name:"news_detail",
    //   component:News_detail
    // }
    // {
    //   path:'/',
    //   name:"home",
    //   component: Home,
    //   children:[
    //     {
    //       path:'/one',
    //       name:"one",
    //       component: One
    //     },
    //     {
    //       path:'/two',
    //       name:"two",
    //       component:Two
    //     },
    //     {
    //       path:'/three',
    //       name:"three",
    //       component:Three
    //     },
    //     {
    //       path:'/swipe',
    //       name:"swipe",
    //       component:Swipe
    //     }
    //   ]
    // },
    {
      path:'/',
      name:"login",
      component: Login
    },
    {
      path:"/pageone",
      name:"pageone",
      component:Pageone
    }
    // {
    //   path:'/',
    //   name:"weather",
    //   component: Weather
    // }
    
  ]
})
