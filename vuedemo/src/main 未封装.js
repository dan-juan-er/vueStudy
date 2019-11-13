// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// let Vue = require('组件路径')
// main.js入口的全局js文件
//导入vue.js核心库 es6中的导入 import
import Vue from 'vue'
import Vuex from 'vuex'
//导入App.vue组件 取名叫App组件
//导入路由模块 在router文件夹下的index.js
import App from './App'
import router from './router'
Vue.use(Vuex)

Vue.config.productionTip = false
//配置vuex store 存储器用来存储组件之间共享的资源
const store = new Vuex.Store({
  //state状态值 类似于组件中的data数据源
  state: {
    num: 8,
    names: ['宋', '文', '弓', '虽'],
    count1: 10,
    count2: 20,
    count3: 30,
    count4: 40,
    count5: 50,
    news_details: [
      {
        news_id: 1,
        news_title: "震惊！郑州某男子每天起个大早是为了这个...",
        news_count: 1,
        news_con: "震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个...震惊！郑州某男子每天起个大早是为了这个..."
      },
      {
        news_id: 2,
        news_title: "99%的人都不知道的秘密！速看！",
        news_count: 2,
        news_con: "99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！99%的人都不知道的秘密！速看！"
      },
      {
        news_id: 3,
        news_title: "一位老人的九句话，终身受用,朋友圈都转疯了!!",
        news_count: 3,
        news_con: "一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!一位老人的九句话，终身受用,朋友圈都转疯了!!"
      },
      {
        news_id: 4,
        news_title: "人到了一定年龄，必须扔掉这四样东西...",
        news_count: 4,
        news_con: "人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西...人到了一定年龄，必须扔掉这四样东西..."
      },
      {
        news_id: 5,
        news_title: "外地人快把郑州人羡慕死了就因为这10件事··",
        news_count: 5,
        news_con: "外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··外地人快把郑州人羡慕死了就因为这10件事··"
      },
      {
        news_id: 6,
        news_title: "什么?海报居然还能这样设计???",
        news_count: 6,
        news_con: "什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???什么?海报居然还能这样设计???"
      },
      {
        news_id: 7,
        news_title: "人到了一定年龄，必须扔掉这四样东西...",
        news_count: 7,
        news_con: "万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!万万没想到，这样吃鸡蛋对身体竟然有害处!"
      }
    ],
    todos: [{
      text: "文弓虽1",
      vip: false
    },
    {
      text: "文弓虽2",
      vip: true
    },
    {
      text: "文弓虽3",
      vip: false
    },
    {
      text: "文弓虽4",
      vip: true
    },
    {
      text: "文弓虽5",
      vip: false
    }
    ]
  },
  //修改状态的方法（共享方法—）相当于methods
  //mutations同步
  mutations: {
    //组件中通过store.commit('方法名',参数1...)调用   参数一：接收store中的state对象
    increment(state, a) {
      // state.num += a;
      // 或者
      this.state.num += a;
    },
    reduce(sta, a) {
      sta.num -= a;
    },
    col(sta, a) {
      sta.news_details[a].news_count++;
    }
  },
  // actions类似于mutation 不同在于Action提交的是mutation 而不是直接变更状态,actions可以包含任何异步操作
  actions:{
    //异步的递减 context类似store对象
    asyncReduce(context){
    //假设在异步当中每次请求需要一秒时长；异步请求成功之后，触发mutations中的方法。
        context.commit("reduce",5);
    }
  },
  //
  getters: {
    //类似于组件中的computed，依赖于state创建共享属性，该方法对state中的数据做处理的
    //获取所有的VIP用户state参数获取state状态对象
    text(state) {
      return state.todos[2];
    },
    // vipTodos(state){
    //  return state.todos.filter(function (v){
    //     return v.vip;
    //   })
    // }
    //简化版 箭头函数
    vipTodos(state) {
      return state.todos.filter(v => v.vip)
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',//index中div的id为app
  store,
  router,//注册路由
  components: { App },//注册局部组件，将App组件内容解析到#app所在的div内容中去，也就是index.html
  template: '<App/>'//
})
