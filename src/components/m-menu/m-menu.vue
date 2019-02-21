<template>
  <div class="m-menu">
    <ul>
      <li>
        <img src="@/assets/images/footer_btn_selected01.png" alt="">
        <span>首页</span>
      </li>
      <li>
        <img src="@/assets/images/footer_btn02.png" alt="">
        <span>学习</span>
      </li>
      <li>
        <img src="@/assets/images/footer_btn03.png" alt="">
        <span>工具</span>
      </li>
      <li>
        <img src="@/assets/images/footer_btn04.png" alt="">
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-menu {
    height: 163px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    ul {
      display: flex;
      height: 100%;

      li {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 67px;
          height: 67px;
          display: block;
        }

        span {
          font-size: 32px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          line-height: 69px;
        }
      }
    }
  }
</style>