<template>
  <div>
    <p>{{news_obj.news_title}}</p>
    <p>{{news_obj.news_con}}</p>
    <p>已有{{news_details[news_obj.news_id-1].news_count}}人收藏</p>
    <button @click="col(news_+obj.news_id-1)">收藏</button>
  </div>
</template>

<script>
var _this,a;
import { mapState } from "vuex";
export default {
  name: "news_detail",
  data() {
    return {
      news_obj: null
    };
  },
  created() {
    this.news_obj = this.$route.query.obj;
    _this = this;
    a = _this.news_obj.news_id-1;
  },
  computed: {
    col(a) {
      console.log( a);
      return this.$store.commit("col",a);
      // console.log(news_details[news_obj.news_id-1].news_count);
    },
    ...mapState({
      news_details: "news_details"
    })
  }
  // methods: {
  //   col() {
  //     // news_details[news_obj.news_id-1].news_count++;
  //     console.log(news_details[news_obj.news_id-1].news_count);
  //   }
  // },
  
  
};
</script>

<style scoped>

</style>

