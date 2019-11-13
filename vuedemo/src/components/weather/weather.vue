<template>
  <div>
      <h1>天气</h1>
      <h2>紫外线：{{uv}}</h2>
      <h2>{{spa}}</h2>
  </div>
</template>

<script>
export default {
    name:"weather",
    data() {
      return {
        uv:"",
        spa:""
      }
    },
    methods: {
      getWeather(){
        const api = "https://free-api.heweather.net/s6/weather/lifestyle?location=auto_ip&key=b2da4e0091504bd0ad0b5d757d21c72b";
        this.$http({
          url:api,
          method:"get",
          data:{

          }
        }).then(res=>{
            console.log(res.data.HeWeather6[0].lifestyle[5]);
            this.uv = res.data.HeWeather6[0].lifestyle[5].brf;
            this.spa = res.data.HeWeather6[0].lifestyle[5].txt;
        });
        

      }
    },
    created() {
      this.getWeather();
    },
}
</script>

<style scoped>

</style>