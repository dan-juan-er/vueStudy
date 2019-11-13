<template>
  <div>
    
    <ul id="news">
      <!-- <li :key="i" v-for="(v,i) in news_details">{{v.news_title}} <router-link :to="'/news_detail/'+v.news_id+'?news_title='+v.news_title+'&news_con='+v.news_con">点我立即前去查看,已有{{v.news_count}}人收藏</router-link>  </li> -->
      <li :key="i" v-for="(v,i) in news_details">{{v.news_title}} <router-link :key="news_details.news_id" :to="{name:'news_detail',query:{obj:v}}">点我立即前去查看,已有{{v.news_count}}人收藏</router-link>  </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "news_index",
  computed: {
    getNames() {
      return this.$store.state.names;
    },
    ...mapState({
      news_details: "news_details"
    })
  }
};
</script>

<style scoped>
#news{
    list-style-type: none;
}
#news li{
    border: 1px solid black;
    margin-bottom: 20px;
    line-height: 50px;
    
}

</style>

