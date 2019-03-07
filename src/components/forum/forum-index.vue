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
        <m-forum-box :item='smallData'></m-forum-box>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  import mForumBox from '@/components/m-forum-box/m-forum-box';
  export default {
    name: 'HelloWorld',
    components:{
      'm-forum-box':mForumBox
    },
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
        // 论坛小班教学
        smallData:{
          title:'小班教学',
          des:'',
          content:[
            {
              iconUrl:require('@/assets/images/forum/text_icon.png'),
              info:'11-06-21-开班'
            },
            {
              iconUrl:require('@/assets/images/forum/text_icon.png'),
              info:'11-06-21-开班'
            },
            {
              iconUrl:require('@/assets/images/forum/text_icon.png'),
              info:'11-06-21-开班'
            },
            {
              iconUrl:require('@/assets/images/forum/text_icon.png'),
              info:'11-06-21-开班'
            },
            {
              iconUrl:require('@/assets/images/forum/text_icon.png'),
              info:'11-06-21-开班'
            }
          ]
        },
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