<template>
  <div id="app">
    <span>two页面中的内容--数量：{{count}}</span>
    <button @click="add()">增加</button>
    <br />
    <br />
    <p>{{getP}}</p>
    <span>store中num的值：{{getNum}}</span>
    <button @click="dec(1)">减少</button>
    <ul>
      <li :key="i" v-for="(v,i) in getNames">{{v}}</li>
    </ul>
    <p>count1:{{count1}}</p>
    <p>count2:{{count2}}</p>
    <button @click="jump()">跳转one</button>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";

export default {
  name: "two",
  data() {
    return {
      count: 1,
      price: 5
    };
  },
  methods: {
    add() {
      this.count++;
    },
    dec(v) {
      this.$store.commit("reduce", v);
    },
    jump() {
      //编程式路由跳转,传值params,query
      //router  找到该路由 route 路由对象
      this.$router.push({
        name: "three",
        query: {
          user: "文弓虽"
        },
        params: {
          id: 5
        }
      });
    }
  },
  computed: {
    getP() {
      return this.price + 90;
    },
    getNum() {
      return this.$store.state.num;
      //this.$store获取store存储器
    },
    getNames() {
      return this.$store.state.names;
    },
    //  ...mapState(["count1","count2"])
    //或者
    ...mapState({
      count1: "count1",
      count2: "count2"
    })
  }
  // computed: mapState(["count1","count2"])
};
</script>

<style scoped>
</style>