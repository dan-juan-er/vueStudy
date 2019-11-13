
<template>
  <div id="app">
    <span>one页面中的内容--数量：{{count}}</span>
    <button @click="add()">增加</button>
    <button @click="increment(1)">增加mutations</button>
    <br />
    <br />

    <span>方式一：{{getNum}}</span>
    <!-- 或者 -->
    <span>方式二：store中num的值：{{$store.state.num}}</span>
    <button @click="increment(1)">增加8</button>
    <p>count1:{{count1}}</p>
    <p>count2:{{count2}}</p>
    <p>count3:{{count3}}</p>
    <p>count4:{{count4}}</p>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";
import {mapMutations} from 'vuex';
export default {
  name: "one",
  data() {
    return {
      count: 1
    };
  },
  methods: {
    //自定义组件中的方法
    add() {
      this.count++;
    },
    // addN(v) {
    //   return this.$store.commit("increment", v);
    // }也可以使用辅助函数
    ...mapMutations(["increment"])
  },
  computed: {
    //  方式一：通过计算属性获取store存储器中的state值
    getNum() {
      return this.$store.state.num;
      //this.$store获取store存储器
    },
    ...mapState({
      //  a.直接使用函数写法 state接收store中state状态值
      count1(state) {
        return state.count1;
      },
      // b. 利用箭头函数 (参数)=>(函数体)
      count2: state => {
        return state.count2;
      },
      // c.如果箭头函数只有一个参数， 函数体只有一行代码，可以省略{}，默认的return也能省略
      count3: state => state.count3,
      //d 如果计算属性名和访问的state中的属性名一样，还可以 "count4"指代state => state.count4
      count4: "count4"
    })
    
  }
  //  方式二:使用辅助函数
  //   computed: mapState({
  //     //  a.直接使用函数写法 state接收store中state状态值
  //     count1(state) {
  //         return state.count1;
  //     },
  //     // b. 利用箭头函数 (参数)=>(函数体)
  //     count2: (state) =>  {return state.count2},
  //     // c.如果箭头函数只有一个参数， 函数体只有一行代码，可以省略{}，默认的return也能省略
  //     count3:state => state.count3,
  //     //d 如果计算属性名和访问的state中的属性名一样，还可以 "count4"指代state => state.count4
  //     count4:"count4",

  //   })
};
</script>

<style scoped>
</style>