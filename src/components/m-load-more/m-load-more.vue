<template>
  <div class="m-load-more">
      {{p_text}}
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props:{
        text:String
    },
    data() {
      return {
          p_text:this._props.text
      }
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .m-load-more{
            font-size:34px;
            color:rgba(184,184,184,1);
            height: 137px;
            text-align: center;
            line-height: 137px;
            border-top: 1px solid #C9C9C9;
            background: #fff;
    }
</style>