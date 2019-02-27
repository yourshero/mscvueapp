<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '个人中心',
        // 个人信息
        myDate:[
          {
            iconUrl:require('@/assets/images/learner/head-pic.png'),
            day:2341,
            className:'经理班'
          }
        ],
        //学习数据
        learnDate:[
          {
            classTime:'2019.01.03',
            courseNum:245,
            rate:92
          }
        ],
        learnDateList:[
          {
            info:'已连续登陆',
            content:34
          },
          {
            info:'已学习课程',
            content:212
          },
          {
            info:'总学习时长',
            content:3.8
          },
          {
            info:'书写笔记',
            content:21
          },
          {
            info:'已诊断报告',
            content:2
          },
          {
            info:'学习总评级',
            content:'良好'
          },
        ]
        //店铺数据
        storyDate:[
          {
            
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './learner.less'; //引入全局less文件
</style>