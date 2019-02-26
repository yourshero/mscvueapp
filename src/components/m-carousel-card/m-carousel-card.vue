<template>
  <div class="my-carousel-card">
    <div class="swiper-container banner3" id='swiper-container'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in cardDate" :key='index'>
          <div class="introduce">
            <img :src="item.iconUrl" alt="">
            <p class="name">
              {{item.name}}
            </p>
            <span>
              学员
            </span>
            <p class="classes">
              来自{{item.classes}}毕业心得
            </p>
          </div>
          <div class="detail">
            <p>
              {{item.des}}
            </p>
            <span>
              详细>>
            </span>
          </div>
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
      new Swiper('.banner3', {
        slidesOffsetBefore: 10,
        loop: false,
        slidesPerView: 'auto',
        loopedSlides: 1
      })
    },
    data() {
      return {
        cardDate: [{
            name: '55期廖奕凡',
            iconUrl: require('@/assets/images/home/card_icon.png'),
            des: '我们再经过49的天的锤炼，我自身感觉我以前面对的很多的问题……',
            classes: '小班'
          },
          {
            name: '56期噢唛怪',
            iconUrl: require('@/assets/images/home/card_icon.png'),
            des: '己的店铺也不是做的很好！但是流量是涨了不少，订单也多了一些！',
            classes: '经理班'
          },
          {
            name: '57期',
            iconUrl: require('@/assets/images/home/card_icon.png'),
            des: '己的店铺也不是做的很好！但是流量是涨了不少，订单也多了一些！',
            classes: '经理班'
          },
          {
            name: '58期噢',
            iconUrl: require('@/assets/images/home/card_icon.png'),
            des: '己的店铺也不是做的很好！但是流量是涨了不少，订单也多了一些！',
            classes: '小班'
          },
        ]
      }
    }
  }
</script>
<style lang="less">
  .my-carousel-card {
    .swiper-wrapper {
      .swiper-slide {
        width: 666px;
        height: 414px;
        box-sizing: border-box;
        padding-top: 26px;
        margin-right: 31px;
        display: flex;
        border-radius: 10px;
        flex-direction: column;

        .introduce {
          display: flex;
          align-items: center;
          border-bottom: 2px solid rgba(33, 93, 160, .32);
          padding-left: 18px;
          padding-bottom: 23px;

          img {
            display: block;
            height: 75px;
            width: 75px;
          }

          .name {
            color: #215DA0;
            font-size: 30px;
            margin-left: 15px;
          }

          .classes {
            color: #215DA0;
            font-size: 25px;
            margin-left: 20px;
          }

          span {
            display: block;
            width: 64px;
            color: #215DA0;
            font-size: 25px;
            border: 2px solid rgba(33, 93, 160, 1);
            border-radius: 4px;
            padding: 2px;
            margin-left: 15px;
          }
        }

        .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          align-items: flex-end;
          padding: 0 40px;
          padding-top: 58px;
          padding-bottom: 25px;
          box-sizing: border-box;

          p {
            color: #1D2C4D;
            font-size: 35px;
            line-height: 72px;
          }

          span {
            width: 122px;
            height: 44px;
            font-size: 25px;
            line-height: 44px;
            color: rgba(29, 44, 77, 1);
            display: block;
            text-align: center;
            background: rgba(255, 255, 255, 1);
            border-radius: 22px;
          }
        }
      }

      .swiper-slide:nth-of-type(odd) {
        background: rgba(211, 239, 251, 1);
        border-radius: 10px;
      }

      .swiper-slide:nth-of-type(even) {
        background: rgba(255, 237, 241, 1);
        border-radius: 10px;
      }
    }
  }
</style>