export default {
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
  };