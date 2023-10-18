<template>
  <div class="box">
    <h1>我是App</h1>
    <p>{{ str }}</p>
    <hr>
    <h1>新增一个大标题</h1>
  </div>
</template>

<script setup lang="ts">
const str = '我爱你祖国'
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
