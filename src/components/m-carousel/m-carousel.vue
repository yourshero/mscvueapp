<template>
  <div class="my-slide">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for='el in arrItem' class="swiper-slide" :key='el.name'>
          <img class="img" :src="el.imgUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  export default {
    mounted: function () {
      new Swiper('.swiper-container', {
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
            imgUrl: require('@/assets/images/home/banner1.png')
          },
          {
            name: 'swiperSlide51',
            imgUrl: require('@/assets/images/home/banner1.png')
          },
          {
            name: 'swiperSlide1111115',
            imgUrl: require('@/assets/images/home/banner1.png')
          }
        ]
      }
    }
  }
</script>
<style lang="less">
.my-slide{
  .swiper-container{
        .swiper-pagination{
            padding: 11px 19px;
            width: auto;
            left:50%;
            margin-left: -41.5px;
            background:rgba(0,0,0,.51);
            bottom:33px;
              .swiper-pagination-bullet{
              width: 17px;
              height: 17px;
              border:2px solid #FFFFFF;
              border-radius: 50%;
              box-sizing: border-box;
            }
            .swiper-pagination-bullet-active{
              background:#E8322D;
              border:none;
            }
  }
  .swiper-wrapper{
img{
    height: 480px;
    width: 100%;
    display: block;
  }
  }
  }
}

</style>
