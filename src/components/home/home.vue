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
      <!-- 盈利课程 -->
      <div class="section4">
        <m-home-title v-bind:titleDate="titleDate" v-bind:cur="cur3">
        </m-home-title>
        <div class="box">
          <div class='cover1'>
            <img src="@/assets/images/home/bg_img7.png" alt="">
          </div>
          <ul>
            <li v-for="(item,index) in courseDate" :key='index'>
              <img :src="item.coverUrl" alt="" class="cover2">
              <span class="course-name">
                {{item.title}}
              </span>
              <div class="info">
                <span>
                  {{item.des}}
                </span>
                <p>
                  <img src="@/assets/images/home/home_icon.png" alt="">
                  <span>
                    {{item.total}}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 学员培养 -->
      <div class="section5">
        <div class="tit">
          <m-home-title v-bind:titleDate="titleDate" v-bind:cur="cur4">
          </m-home-title>
        </div>
        <div class="box">
          <home-carousel-slide>
          </home-carousel-slide>
          <home-carousel-card>
          </home-carousel-card>
        </div>
      </div>
      <!-- 新闻热点 -->
      <div class='section6'>
        <div class="tit">
          <m-home-title v-bind:titleDate="titleDate" v-bind:cur="cur5">
          </m-home-title>
        </div>
        <div class="box">
          <ul v-for="(item,index) in newsDate" :key="index">
            <li>
              <span class="title">
                {{item.title}}
              </span>
              <p>
                <span class="time">
                  {{item.time}}
                </span>
                <span class="author">
                  {{item.author}}
                </span>
                <span class="read-total">
                  {{item.readTotal}}
                </span>
              </p>
            </li>
            <li>
              <img :src="item.newsImg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <m-home-menu></m-home-menu>
  </div>
</template>
<script>
  import homeCarousel from '@/components/m-carousel/m-carousel';
  import mHomeTitle from '@/components/m-home-title/m-home-title';
  import homeCarouselSlide from '@/components/m-carousel-slide/m-carousel-slide';
  import homeCarouselCard from '@/components/m-carousel-card/m-carousel-card';
  import mHomeMenu from '@/components/m-home-menu/m-home-menu';
  export default {
    name: 'HelloWorld',
    components: {
      'home-carousel': homeCarousel,
      'm-home-title': mHomeTitle,
      'home-carousel-slide': homeCarouselSlide,
      'home-carousel-card': homeCarouselCard,
      'm-home-menu':mHomeMenu
    },
    data() {
      return {
        msg: '我的',
        cur1: '企业文化',
        cur2: '核心人物',
        cur3: '盈利课程',
        cur4: '学员培养',
        cur5: '新闻热点',
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
        peopleDate: [{
            imgUrl: require('@/assets/images/home/pic_1.png'),
            name: '雷自昌(首席知识官-CKO)',
            des: '中国电商运营知识的系统整理者'
          },
          {
            imgUrl: require('@/assets/images/home/pic_2.png'),
            name: '牛永革(学术委员会主席)',
            des: '教授 博士生导师'
          },
          {
            imgUrl: require('@/assets/images/home/pic_3.png'),
            name: '唐凯江(首席执行官-CEO)',
            des: ' 副教授 硕士生导师'
          },
        ],
        // 盈利课程
        courseDate: [{
            title: '经理班5.0盈利课程',
            des: '带你打造盈利店铺',
            total: '4378',
            coverUrl: require('@/assets/images/home/bg_img5.png')
          },
          {
            title: '总裁圈1.0盈利商道课程',
            des: '教你电商盈利商道',
            total: '1231',
            coverUrl: require('@/assets/images/home/bg_img6.png')
          }
        ],
        //热点新闻
        newsDate: [{
            title: '淘宝网2018违规计分清零详情',
            time: '2019-01-08',
            author: '幕思城-嘉措',
            readTotal: '19',
            newsImg: require('@/assets/images/home/news_pic1.png')
          },
          {
            title: '淘宝网2018违规计分清零详情1',
            time: '2019-01-01',
            author: '幕思城-嘉措',
            readTotal: '2',
            newsImg: require('@/assets/images/home/news_pic1.png')
          },
          {
            title: '淘宝网2018违规计分清零详情2',
            time: '2019-01-02',
            author: '幕思城-嘉措',
            readTotal: '1333',
            newsImg: require('@/assets/images/home/news_pic1.png')
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import './home.less'; //引入全局less文件
</style>