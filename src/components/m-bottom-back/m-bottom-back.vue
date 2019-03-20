<template>
  <div class="m-bottom-back">
      返回列表
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props:{
        
    },
    data() {
      return {
        msg: '板块标题',
      }
    },
    mounted(){
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-bottom-back{
        height:140px;
        background:rgba(254,164,0,1);
        font-size:40px;
        font-weight:bold;
        line-height: 140px;
        text-align: center;
        color:rgba(244,249,242,1);
        position: fixed;
        left: 0;
        bottom:163px;
        width: 100%;
  }
</style>