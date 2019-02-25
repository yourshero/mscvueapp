<template>
  <div class="m-head">
    <div class="m-head-box">
      <img src="@/assets/images/search_btn.png" alt="">
      <span>课程搜索</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '头部搜索2'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-head {
    height: 107px;
    background: rgba(242, 242, 242, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    .m-head-box {
      height: 67px;
      width: 859px;
      background: #fff;
      border-radius: 34px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        display: block;
      }

      span {
        font-size: 32px;
        font-family: FZLTHJW--GB1-0;
        font-weight: normal;
        color: rgba(157, 157, 157, 1);
        line-height: 23px;
      }
    }
  }
</style>