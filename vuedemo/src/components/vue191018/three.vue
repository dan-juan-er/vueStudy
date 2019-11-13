<template>
  <div id="three">
    <h1>three</h1>
    <strong>所有用户</strong>
    <ul>
      <li :key="i" v-for="(v,i) in todos">
        <span>{{v.text}}</span>
        <strong v-if="v.vip">vip用户</strong>
      </li>
    </ul>
    <p>{{getT.text}}</p>
    <h1>vip用户</h1>
    <ul>
      <li :key="i" v-for="(v,i) in vips">
        <p>{{v.text}}</p>
      </li>
    </ul>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import {mapMutations} from 'vuex';
export default {
  name: "three",
  created() {
    console.log(this.$route);
  },
  methods: {
    asyRedu(){
      this.$store.dispath("as")
    }
  },
  computed: {
    ...mapState(["todos"]),
    //计算属性
    getT(){
      return this.$store.getters.text;
    },
    vips(){
      return this.$store.getters.vipTodos;
    }
  }
};
</script>

<style scoped>
</style>