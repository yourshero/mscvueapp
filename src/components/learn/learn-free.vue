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
  </div>
</template>
<script>
import mLearnTop from '@/components/m-learn-top/m-learn-top';
  export default {
    name: 'HelloWorld',
    components: {
      'm-learn-top':mLearnTop,
    },
    data() {
      return {
        msg: '学习',
        smallClass:{
          calssName:'【2019-01-03班】',
          time:'预计开班1月25号正式开始预计人数40人左右',
          teacherPic:require('@/assets/images/learn/people_icon1.png'),
          name:'卓玛老师'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import './learn-free.less'; //引入全局less文件
</style>