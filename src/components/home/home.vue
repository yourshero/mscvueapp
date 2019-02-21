<template>
  <div class="home">
    <m-head></m-head>
    <div class="main">
        {{msg}}
    </div>
    <m-menu></m-menu>
  </div>
</template>

<script>
  import Mhead from '../m-head/m-head';
  import Mmenu from '../m-menu/m-menu';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '首页'
      }
    },
    components: {
      'm-head': Mhead,
      'm-menu': Mmenu,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
    font-size: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>