<template>
  <div class="m-learn-title">
      <strong>{{title}}</strong>
      <span>——幕思城培养方法</span>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props:{
        tit:String
    },
    data() {
      return {
          title:this._props.tit
      }
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-learn-title{
        height: 142px;
        line-height: 142px;
        background: #fff;
        padding-left: 21px;
        strong{
            font-size:48px;
            color: #000000;
        }
        span{
            font-size:34px;
            color: #707070;
        }
    }
</style>