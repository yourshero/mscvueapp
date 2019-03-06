<template>
  <div class="forum-index">
      <!-- 轮播 -->
        <div class="my-slide">
            <div class="swiper-container banner3">
            <div class="swiper-wrapper">
                <div v-for='el in arrItem' class="swiper-slide" :key='el.name'>
                <img class="img" :src="el.imgUrl">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            </div>
        </div>
        asdsadasdasdasd
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  export default {
    name: 'HelloWorld',
    mounted: function () {
      new Swiper('.banner3', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    data() {
      return {
        arrItem: [
          {
            name: 'swiperSlide1',
            imgUrl: require('@/assets/images/forum/bg.png')
          },
          {
            name: 'swiperSlide51',
            imgUrl: require('@/assets/images/forum/bg.png')
          },
          {
            name: 'swiperSlide1111115',
            imgUrl: require('@/assets/images/forum/bg.png')
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './forum-index.less';
</style>