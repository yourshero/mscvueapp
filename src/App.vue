<template>
  <div id="app" class="app">
    <m-head></m-head>
    <div class="main">
      <router-view />
    </div>
    <m-menu></m-menu>
  </div>
</template>
<script>
  import Mhead from './components/m-head/m-head';
  import Mmenu from './components/m-menu/m-menu';
  export default {
    name: 'App',
    components: {
      'm-head': Mhead,
      'm-menu': Mmenu,
    }
  }
</script>
<style lang='less' scoped>
  .app {
    background: #F2F2F2;
    .main {
      padding-top: 107px;
      padding-bottom: 163px;
    }
  }
</style>