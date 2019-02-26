<template>
  <div class="my-carousel-slide">
    <div class="swiper-container banner2" id='swiper-container'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in slideDate" :key='index'>
          <img :src="item.imgUrl" alt="">
          <span>
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  export default {
    mounted: function () {
      new Swiper('.banner2', {
        slidesOffsetBefore : 30,
        loop: false,
        slidesPerView: 'auto',
        loopedSlides:1
      })
    },
    data() {
      return {
        slideDate: [{
            name: '入学接待',
            imgUrl: require('@/assets/images/home/banner_share_01.png')
          },
          {
            name: '入学考试',
            imgUrl: require('@/assets/images/home/banner_share_02.png')
          },
          {
            name: '开学典礼',
            imgUrl: require('@/assets/images/home/banner_share_03.png')
          },
          {
            name: '分配老师',
            imgUrl: require('@/assets/images/home/banner_share_04.png')
          },
          {
            name: '学习计划',
            imgUrl: require('@/assets/images/home/banner_share_04.png')
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  .my-carousel-slide {
    margin-bottom: 116px;
    .swiper-wrapper {
      .swiper-slide {
        width: 160px!important;
        margin-right: 60px;
        img {
          display: block;
          height: 131px;
          width: 131px;
          margin-bottom:30px;
        }

        span {
          color: #1D2C4D;
          font-size: 40px;
        }
      }
    }
  }
</style>