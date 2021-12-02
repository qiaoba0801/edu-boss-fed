<template>
  <div id="app">
    <h1>哈利波特</h1>
    <p class="test">test</p>
    <!-- 根路由出口 -->
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss" scoped>
.test {
  color: $danger-color;
}
</style>
