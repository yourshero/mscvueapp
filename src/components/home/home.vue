<template>
  <div class="home" id='home'>
    <!-- 顶部轮播 -->
    <home-carousel></home-carousel>
    <!-- 内容 -->
    <div class="container">
      <!-- 盈利方法 -->
      <div class="section1">
        <div class="title">
          独特的幕思城盈利方法
        </div>
        <ul>
          <li v-for="(item,index) in profit" :key='index'>
            <router-link :to='item.href'>
              <img :src='item.imgUrl' alt="">
              <span>
                {{item.name}}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 企业文化 -->
      <div class="section2">
        <m-home-title v-bind:titleDate="titleDate" v-bind:cur="cur1">
        </m-home-title>
        <div class="box">
          <div class="bg1">
            <img :src="bg1" alt="">
          </div>
          <ul>
            <li>
              <img :src="bg2" alt="">
            </li>
            <li>
              <img :src="bg3" alt="">
            </li>
          </ul>
          <div class="bg4">
            <img :src="bg4" alt="">
          </div>
        </div>
      </div>
      <!-- 核心人物 -->
      <div class="section3">
        <m-home-title v-bind:titleDate="titleDate" v-bind:cur="cur2">
        </m-home-title>
        <div class="box">
          <ul>
            <li v-for="(item,index) in peopleDate" :key='index'>
              <img :src='item.imgUrl' alt="">
              <div class="info">
                <div class="info-tit">
                  <p>
                  {{item.name}}
                </p>
                <span>
                  {{item.des}}
                </span>
                </div>
                <router-link to='#'>
                  详细介绍 >>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import homeCarousel from '@/components/m-carousel/m-carousel';
  import mHomeTitle from '@/components/m-home-title/m-home-title';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '我的',
        cur1: '企业文化',
        cur2: '核心人物',
        cur3: '',
        cur4: '',
        cur5: '',
        // 小标题
        titleDate: [{
            name: '企业文化',
            des: '更多介绍>'
          },
          {
            name: '核心人物',
            des: '员工介绍>'
          },
          {
            name: '盈利课程',
            des: '全部课程>'
          },
          {
            name: '学员培养',
            des: '详细介绍>'
          },
          {
            name: '新闻热点',
            des: '查看全部>'
          },
        ],
        //盈利方法
        profit: [{
            href: '#',
            name: '系统盈利课程',
            imgUrl: require('@/assets/images/home/profit_icon01.png')
          },
          {
            href: '#',
            name: '实操盈利工具',
            imgUrl: require('@/assets/images/home/profit_icon02.png')
          },
          {
            href: '#',
            name: '个性盈利辅导',
            imgUrl: require('@/assets/images/home/profit_icon03.png')
          },
          {
            href: '#',
            name: '配套盈利教材',
            imgUrl: require('@/assets/images/home/profit_icon04.png')
          },
          {
            href: '#',
            name: '盈利数据管理',
            imgUrl: require('@/assets/images/home/profit_icon05.png')
          },
          {
            href: '#',
            name: '小班严格教学',
            imgUrl: require('@/assets/images/home/profit_icon06.png')
          },
        ],
        //企业文化
        bg1: require('@/assets/images/home/bg_img1.png'),
        bg2: require('@/assets/images/home/bg_img2.png'),
        bg3: require('@/assets/images/home/bg_img3.png'),
        bg4: require('@/assets/images/home/bg_img4.png'),
        //核心人物
        peopleDate:[
          {
            imgUrl:require('@/assets/images/home/pic_1.png'),
            name:'雷自昌(首席知识官-CKO)',
            des:'中国电商运营知识的系统整理者'
          },
          {
            imgUrl:require('@/assets/images/home/pic_2.png'),
            name:'牛永革(学术委员会主席)',
            des:'教授 博士生导师'
          },
          {
            imgUrl:require('@/assets/images/home/pic_3.png'),
            name:'唐凯江(首席执行官-CEO)',
            des:' 副教授 硕士生导师'
          },
        ]
      }
    },
    components: {
      'home-carousel': homeCarousel,
      'm-home-title': mHomeTitle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home {
    .container {
      .section1 {
        padding-top: 107px;
        background: #fff;

        .title {
          font-size: 50px;
          width: 724px;
          height: 108px;
          background: rgba(211, 59, 160, 1);
          border-radius: 54px;
          color: #fff;
          margin: 0 auto;
          line-height: 108px;
          text-align: center;
          margin-bottom: 97px;
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 33.3%;
            font-size: 34px;
            text-align: center;
            margin-bottom: 99px;

            a {
              span {
                color: #3A3A3A;
              }

              img {
                width: 122px;
                height: 122px;
                display: block;
                margin: 0 auto;
                margin-bottom: 28px;
              }
            }
          }
        }
      }

      .section2 {
        padding: 0 24px;
        background: #fff;
        margin-bottom:34px;
        padding-bottom: 55px;
        .box {
          .bg1 {
            margin-bottom: 42px;

            img {
              height: 525px;
              width: 100%;
              display: block;
            }
          }

          .bg4 {
            img {
              height: 329px;
              width: 100%;
              display: block;
            }
          }

          ul {
            display: flex;
            justify-content: space-between;
            margin-bottom: 21px;

            li {
              width: 48.5%;

              img {
                width: 100%;
                display: block;
                height: 273px;
              }
            }
          }
        }
      }
      .section3{
        background: #fff;
        padding: 0 23px;
        .box{
          ul{
            li{
              display: flex;
              justify-content: start;
              padding-left: 31px;
              border-bottom: 2px dashed #7B7B7B;
              padding-bottom:56px;
              padding-top: 74px;
              img{
                display: block;
                height: 313px;
                width: 252px;
              }
              .info{
                display: flex;
                flex-direction: column;
                margin-left: 39px;
                justify-content: space-between;
                p{
                  font-size: 48px;
                  color:#343434;
                  padding-bottom: 40px;
                  padding-top: 30px;
                }
                span{
                  font-size: 45px;
                  color: #BABABA;
                }
                a{
                  color: #F88455;
                  font-size:35px;
                }
                .info-tit{

                }
              }
            }
            li:first-child{
              padding-top: 0;
            }
          }
        }
      }
    }
  }
</style>