<template>
  <div id="one">
    <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="two"> -->
      <swiper :options="swiperOption" ref="mySwiper"  class="two">
      <!-- slides -->
      <swiper-slide :key="i" v-for="(v,i) in swiperImgs">
        <img class="img1" :src="v" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <!-- 网络请求到的数据 -->
  <ul>
    <li v-show="show" :key="i" v-for="(v,i) in citys">
      {{v.name}}
    </li>
  </ul>
  </div>
  
</template>

<script>
export default {
  name: "swipe",
  data() {
    return {
      citys:[],
      show:true,
      swiperImgs: [
        require("./imgs/1.jpg"),
        require("./imgs/2.jpg"),
        require("./imgs/3.jpg"),
        require("./imgs/4.jpg"),
        require("./imgs/5.jpg"),
        require("./imgs/6.jpg"),
        require("./imgs/7.jpg"),
        require("./imgs/8.jpg")
      ],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  // 在组件创建完成时，进行网络请求
  created() {
    this.getCitys();
    this.getShops();
  },
  methods: {
    //axios请求的第一种方式: get请求
    getCitys() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      //get请求的第一种方式
      this.$http.get(api).then(res => {
        console.log("请求数据成功");
        console.log(res.data);
        this.citys = res.data;
        this.show = true;
      });
    },
    //axios请求的第二种方式: get请求
    getShops(){
      const api = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
      this.$http({
        url:api,
        method: "get",
        data:{//post请求 请求体

        }
      }).then(res => {//请求数据成功之后的回调函数
        console.log(res.data);
      });
    },
    // post请求
    addFood(){
      const api = "https://elm.cangdu.org/shopping/addfood";
      this.$http({
        url:api,
        method:"post",
        data:{
          restaurant_id:7,
          category_id : 1,
          name : "香辣牛腩米饭",

        }
      }).then(res=>{

      });
    }
  }
};
</script>

<style scoped>
#one {
  width: 500px;
  height: 500px;
  
}
.img1 {
  width: 220px;
  height: 220px;
}
</style>
