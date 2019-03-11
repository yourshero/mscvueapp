<template>
  <div class="m-back">
      <img src="../../assets/images/m_back.png" alt="">
      <span>【2019-01-02班】</span>
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
    .line{
        border-bottom:1px solid rgba(87,87,87,.36);
    }
  .m-back{
      position: relative;
      text-align: center;
      height: 141px;
      line-height: 141px;
      background: #fff;
      img{
          position: absolute;
          left: 34px;
          display: block;
          width:25px;
          height:47px;
          top: 50%;
          margin-top:-23.5px;
      }
      span{
          font-size:42px;
          font-weight:bold;
          color:rgba(91,91,91,1);
      }
  }
</style>