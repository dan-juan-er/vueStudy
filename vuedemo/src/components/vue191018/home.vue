<template>
    <div id="app">
        <h1>首页</h1>
        <router-link to='/one'>one</router-link>
        <router-link to='/two'>two</router-link>
        <router-link to='/three'>three</router-link>
        <router-link to='/swipe'>swiper</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
 name:"home"   
}
</script>

<style scoped>
#app{
    border: 1px solid black
}
</style>