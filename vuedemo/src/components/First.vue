<template>
  <div>
    <router-link to="/second">跳转到second页面</router-link>
    <h1>臭哥哥</h1>
    <ul>
      <li>chou</li>
      <li>ge</li>
      <li>ge</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "First"
};
</script>