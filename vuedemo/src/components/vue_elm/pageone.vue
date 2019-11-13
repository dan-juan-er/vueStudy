<template>
  <div>
      <h1>登录成功</h1>
  </div>
</template>

<script>
export default {
    name:"pageone",
    methods: {
        
    },
    created() {
        console.log(this.$route.query)
    }
}
</script>

<style scoped>

</style>