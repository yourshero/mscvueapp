<template>
  <div class="learn-vip">
    <div v-if='init'>
      <m-learn-top></m-learn-top>
      <!-- 小班教学 -->
      <div class="section1">
        <div class="tit-wrap">
          <div class="tit">
            <span>
              小班教学
            </span>
            <strong>你已加入【{{smallClass.joinClass}}】,请坚持完成任务！</strong>
          </div>
          <div class="teacher-des">
            <img :src="smallClass.teacherPic" alt="">
            <div class="info">
              <div class="teacher-name">
                专属学习顾问{{smallClass.teacherName}}
                <div class="qq">QQ联系</div>
              </div>
              <span>本班{{smallClass.time}}正式开始班级共计{{smallClass.number}}人</span>
            </div>
          </div>
        </div>
        <div class="course-list">
          <img src="../../assets/images/learn/btn_icon03.png" alt="" class="section1-btn">
          <ul>
            <li v-for="(item,index) in courseList" :key='index' :class="item.status==1?'':'active'">
              <img :src="item.status==1?item.courIcon:item.courIconCur" alt="">
              <span>{{item.tit}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 个性教学 -->
      <div class="section2">
        <div class="tit-wrap">
          <div class="tit">
            <span>
              小班教学
            </span>
            <strong>你已拥有成长顾问，有技术运营问题请咨询他！</strong>
          </div>
          <div class="teacher-des">
            <img :src="specialClass.teacherPic" alt="">
            <div class="info">
              <div class="teacher-name">
                专属学习顾问{{specialClass.teacherName}}
                <div class="qq">QQ联系</div>
              </div>
              <span>负责:{{specialClass.des}}</span>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <img src="../../assets/images/learn/btn_icon04.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/learn/btn_icon05.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/learn/btn_icon06.png" alt="">
          </li>
        </ul>
        <div class="dis-btn">
          <router-link to='#'>
            店铺遇到问题 申请店铺诊断
          </router-link>
        </div>
      </div>
      <!-- 课程列表 -->
      <div class="section3">
        <m-learn-course :item='majorData'>
        </m-learn-course>
        <m-learn-course :item='minorData'>
        </m-learn-course>
        <m-load-more :text='text1'></m-load-more>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>
<script>
  import mLearnTop from '@/components/m-learn-top/m-learn-top';
  import mLearnCourse from '@/components/m-learn-course/m-learn-course';
  import mLoadMore from '@/components/m-load-more/m-load-more';
  export default {
    name: 'HelloWorld',
    components: {
      'm-learn-top': mLearnTop,
      'm-learn-course': mLearnCourse,
      'm-load-more': mLoadMore,
    },
    props: {

    },
    created() {
      this.smallClass = this.smallClass[0];
      this.specialClass = this.specialClass[0];
      console.log(this.$route);
    },
    methods:{
     
    },
    // 监听路由
    watch: {
      $route(val) {
        this.init = val.meta.init;
      }
    },
    data() {
      return {
        init:true,
        // 小班教学
        text1: '查看更多',
        smallClass: [{
          joinClass: '2019-01-03班',
          teacherPic: require('@/assets/images/learn/people_icon1.png'),
          teacherName: '卓玛（班主任）',
          time: '1月25号',
          number: 40,
        }],
        courseList: [{
            tit: '开学典礼',
            courIcon: require('@/assets/images/learn/list_01.png'),
            courIconCur: require('@/assets/images/learn/list_cur_01.png'),
            status: 1
          },
          {
            tit: '入学考试',
            courIcon: require('@/assets/images/learn/list_02.png'),
            courIconCur: require('@/assets/images/learn/list_cur_02.png'),
            status: 1
          },
          {
            tit: '书写笔记',
            courIcon: require('@/assets/images/learn/list_03.png'),
            courIconCur: require('@/assets/images/learn/list_cur_03.png'),
            status: 1
          },
          {
            tit: '章节考试',
            courIcon: require('@/assets/images/learn/list_04.png'),
            courIconCur: require('@/assets/images/learn/list_cur_04.png'),
            status: 1
          },
          {
            tit: '在线答疑',
            courIcon: require('@/assets/images/learn/list_05.png'),
            courIconCur: require('@/assets/images/learn/list_cur_05.png'),
            status: 1
          },
          {
            tit: '实操作业',
            courIcon: require('@/assets/images/learn/list_06.png'),
            courIconCur: require('@/assets/images/learn/list_cur_06.png'),
          },
          {
            tit: '毕业考试',
            courIcon: require('@/assets/images/learn/list_07.png'),
            courIconCur: require('@/assets/images/learn/list_cur_07.png'),
            status: 1
          },
          {
            tit: '毕业典礼',
            courIcon: require('@/assets/images/learn/list_08.png'),
            courIconCur: require('@/assets/images/learn/list_cur_08.png'),
          },
          {
            tit: '回访调研',
            courIcon: require('@/assets/images/learn/list_09.png'),
            courIconCur: require('@/assets/images/learn/list_cur_09.png'),
            status: 1
          },
        ],
        // 个性教学
        specialClass: [{
          teacherPic: require('@/assets/images/learn/people_icon1.png'),
          teacherName: '卓玛（班主任）',
          des: '课程学习答疑、店铺诊断分析、技术答疑等。'
        }],
        // *主修课程列表*
        majorData: {
          bgCur: 1,
          majorName: '主修课程列表',
          course: [{
              marjorCover: require('@/assets/images/learn/course_bg_01.png'),
              price: 6800.00,
              title: '经理班5.0:带你打造盈利店铺',
              num: 265,
              status: 1
            },
            {
              marjorCover: require('@/assets/images/learn/course_bg_02.png'),
              price: 6800.00,
              title: '总裁圈：教你电商盈利商道',
              num: 22,
              status: 0
            }
          ]
        },
        // 辅修课程列表
        minorData: {
          bgCur: 0,
          majorName: '辅修课程列表',
          course: [{
              marjorCover: require('@/assets/images/learn/course_bg_01.png'),
              price: 6800.00,
              title: '视频班:主图视频从无到有',
              num: 265,
              status: 1
            },
            {
              marjorCover: require('@/assets/images/learn/course_bg_02.png'),
              price: 6800.00,
              title: '美工班：以运营思路做美工',
              num: 22,
              status: 1
            },
            {
              marjorCover: require('@/assets/images/learn/course_bg_02.png'),
              price: 6800.00,
              title: '经理班VIP直播课回放',
              num: 22,
              status: 1
            }
          ]
        }
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './learn-vip.less';
</style>