export default {
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
  };