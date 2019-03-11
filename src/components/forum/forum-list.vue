<template>
    <!-- 论坛列表 -->
  <div class="forum-list">
     <m-back class="line"></m-back>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  import mBack from '@/components/m-back/m-back';
  export default {
    name: 'HelloWorld',
    components:{
      'm-back':mBack
    },
    mounted: function () {
      
    },
    data() {
      return {
       
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './forum-list.less';
</style>