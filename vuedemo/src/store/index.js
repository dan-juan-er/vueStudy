import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import {actions} from './actions'
import getters from './getters'

Vue.use(Vuex)
//配置vuex store 存储器用来存储组件之间共享的资源
const store = new Vuex.Store({
    state,
    //修改状态的方法（共享方法—）相当于methods
    //mutations同步
    mutations,
    // actions类似于mutation 不同在于Action提交的是mutation 而不是直接变更状态,actions可以包含任何异步操作
    actions,
    //
    getters,
  });
  
//导出存储对象store 给外界使用
export default store;