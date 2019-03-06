<template>
  <div class="learn-free">
    <m-learn-top></m-learn-top>
    <!-- 小班教学 -->
    <div class='section1'>
      <div class="title">
        <span>小班教学</span>
        <p>【2019-01-03班】开始筹建 请尽快报名!</p>
      </div>
      <p class="time">预计开班 1月25号正式开始  预计人数40人左右</p>
      <div class="info">
        <img :src="smallClass.teacherPic" alt="" class="teacher-pic">
        本期班主任:<p>卓玛老师</p>
        <img src="@/assets/images/learn/btn_icon01.png" alt="" class="join-btn">
      </div>
    </div>
    <img src="@/assets/images/learn/by_bg.png" alt="" class="bg">
    <!-- 核心团队 -->
    <div class="section2">
        <p class="title">
          盈利店铺是培养出来的: 核心培养团队寄语
        </p>
        <div class="team-list">
          <ul>
            <li v-for="(item,index) in teamDate" :key='index'>
                <img :src="item.imgUrl" alt="">
                <p>{{item.name}}</p>
                <span>{{item.des}}</span>
            </li>
          </ul>
        </div>
         <m-load-more :text='text1'></m-load-more>
    </div>
    <!-- 盈利課程 -->
    <div class="section3">
      <m-learn-title :tit='courseTitle'></m-learn-title>
      <div class="section3-box">
        <div class="bg1">
            <img :src="courBg" alt="">
        </div>
        <div class="course-list">
          <div class="course-title">
            <span>
              {{cousrseTit}}
            </span>
            <img src="../../assets/images/learn/btn_icon02.png" alt="">
          </div>
          <ul>
            <li v-for="(item,index) in courseData" :key='index'>
                <img src="../../assets/images/learn/play_icon.png" alt="">
                <span>
                  {{item.info}}
                </span>
            </li>
          </ul>
          <m-load-more :text='text2'></m-load-more>
        </div>
      </div>
    </div>
    <!-- 盈利診斷-->
    <div class="section4">
      <m-learn-title :tit='title'></m-learn-title>
      <div class="section4-box">
          <div class="bg1">
            <img :src="diaBg" alt="">
          </div>
          <ul>
            <li v-for="(item,index) in diagnosisData" :key='index'>
              <img :src="item.diaUrl" alt="">
              <div class="info">
                <span>最新集体会诊:{{item.diaTime}}</span>
                <p>店铺会诊:{{item.diaStory}}</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
    <!-- 培养体系 -->
    <div class="section5">
      <m-learn-title :tit='courseTitle'></m-learn-title>
      <ul>
        <li v-for="(item,index) in trainData" :key='index'>
          <img :src="item.picUrl" alt="">
        </li>
      </ul>
      <div class="des">
        <img src="../../assets/images/learn/section6_bg.png" alt="">
      </div>
    </div>
    <!-- 考核体系 -->
    <div class="section6">
      <m-learn-title :tit='examTitle'></m-learn-title>
      <div class="section6-box">
        <div class="bg1">
          <img :src="examBg" alt="">
        </div>
        <ul>
          <li v-for="(item,index) in examDate" :key='index'>
            <img :src="item.iconUrl" alt="">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mLearnTop from '@/components/m-learn-top/m-learn-top';
import mLearnTitle from '@/components/m-learn-title/m-learn-title';
import mLoadMore from '@/components/m-load-more/m-load-more';
  export default {
    name: 'HelloWorld',
    components: {
      'm-learn-top':mLearnTop,
      'm-learn-title':mLearnTitle,
      'm-load-more':mLoadMore,
    },
    data() {
      return {
        msg: '学习',
        // 更多
        text1:'查看更多>>',
        text2:'查看更多课程>>',
        // 小班教学
        smallClass:{
          calssName:'【2019-01-03班】',
          time:'预计开班1月25号正式开始预计人数40人左右',
          teacherPic:require('@/assets/images/learn/people_icon1.png'),
          name:'卓玛老师'
        },
        // 核心团队
        teamDate:[
          {
            imgUrl:require('@/assets/images/learn/people_bg_01.png'),
            name:'经理班总负责人',
            des:'火星老师 视频寄语'
          },
          {
            imgUrl:require('@/assets/images/learn/people_bg_02.png'),
            name:'成长总监',
            des:'YB老师 视频寄语'
          },
          {
            imgUrl:require('@/assets/images/learn/people_bg_03.png'),
            name:'教务管理负责人',
            des:'卓玛老师 视频寄语'
          },
          {
            imgUrl:require('@/assets/images/learn/people_bg_04.png'),
            name:'成长顾问负责人',
            des:'涂涂老师 视频寄语'
          }
        ],
        //盈利诊断
        title:'深度店铺盈利诊断',
        diaBg:require('@/assets/images/learn/section4_bg.png'),
        diagnosisData:[
          {
            diaUrl:require('@/assets/images/learn/dis_bg01.png'),
            diaTime:'2019-01-15',
            diaStory:'店铺爆款宝贝流量、销量下'
          },
          {
            diaUrl:require('@/assets/images/learn/dis_bg02.png'),
            diaTime:'2019-01-15',
            diaStory:'店铺爆款宝贝流量、销量下'
          }
        ],
        // 盈利課程
        courseTitle:'系统实操盈利课程',
        courBg:require('@/assets/images/learn/section4_bg.png'),
        cousrseTit:'淘宝卖家容易采的坑',
        courseData:[
          {
            info:'开店想赚钱：千万不要蛮干',
          },
          {
            info:'第一类蛮干：货源选择靠感觉'
          },
          {
            info:'第三类蛮干：流量提升靠等待'
          },
          {
            info:'第四类蛮干：销量打造靠降价'
          },
          {
            info:'终结蛮干：带你打造盈利店铺'
          }
        ],
        // 培养体系
        trainData:[
          {
            picUrl:require('@/assets/images/learn/course_icon01.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon02.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon03.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon04.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon05.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon06.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon07.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon08.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon09.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon10.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon11.png')
          },
          {
            picUrl:require('@/assets/images/learn/course_icon12.png')
          }
        ],
        // 考核体系
        examTitle:'系统完善的考核体系',
        examBg:require('@/assets/images/learn/section7_bg.png'),
        examDate:[
          {
            iconUrl:require('@/assets/images/learn/join_icon01.png'),
            text:'参加章节考试'
          },
          {
            iconUrl:require('@/assets/images/learn/join_icon02.png'),
            text:'参加毕业考试'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './learn-free.less'; //引入全局less文件
</style>