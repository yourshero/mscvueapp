<template>
  <div class="learner" id='learner'>
    <!-- 个人信息 -->
    <div class="my-date">
      <img :src="myDate.iconUrl" alt="">
      <ul>
        <li>
          <span class="name">{{myDate.name}}</span>
        </li>
        <li>
          <p>
            当前<span class="class-type">{{myDate.type}}</span>还剩:<span class="day">{{myDate.day}}</span>天
          </p>
          <router-link to='#'>
            继续学习
            </router-link>
        </li>
      </ul>
    </div>
    <!-- 学习数据 -->
    <div class="learn-date">
        <div class="learn-title">
          <img src="@/assets/images/learner/data_pic1.png" alt="">
          <div class="learn-title-info">
            <span>
              我的学习数据
            </span>
            <p>
              小班:{{learnInfo.classTime}}班<span>|</span>已学:{{learnInfo.courseNum}}<span>|</span>打败:{{learnInfo.rate}}%同学
            </p>
          </div>
        </div>
        <div class="learn-box">
          <ul>
            <li v-for="(item,index) in learnDate" :key='index'>
              <span :style='{background:item.color}'>
                {{item.content}}
              </span>
              <p>
                {{item.info}}
              </p>
            </li>
          </ul>
        </div>
    </div>
    <!-- 我的店铺 -->
    <div class="story-date">
      <div class="story-title">
        <img src="@/assets/images/learner/data_pic2.png" alt="">
        <div class="story-title-info">
          <span class="name">
            我的店铺数据
          </span>
          <p>
              绑定店铺:{{storyInfo.bind}}<span>|</span>店铺信誉:{{storyInfo.trust}}
          </p>
        </div>
        <div class="unbind">
          解绑店铺
        </div>
      </div>
      <div class="story-box">
        <ul>
          <li v-for="(item,index) in storyDate" :key='index'>
            <ul>
              <li v-for="(obj,index) in item.detail" :key='index'>
                <p>
                  {{obj.record}}
                </p>
                <span>
                  {{obj.title}}
                </span>
              </li>
            </ul>
            <div class="history">
              <img :src="item.dataUrl" alt="">
              <span>
                {{item.name}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 个人列表 -->
    <div class="center-date">
      <ul>
        <li v-for="(item,index) in centerDate" :key='index'>
          <img :src="item.iconUrl" alt="" class="icon">
          <span>
            {{item.text}}
          </span>
          <img src="@/assets/images/learner/arrow_icon.png" alt="" class="arrow">
        </li>
      </ul>
    </div>
    <!-- 退出登录 -->
    <div class="quit-btn">
      <router-link to='#'>
        退出登录
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    mounted(){
      console.log(this.myDate)
      this.myDate = this.myDate[0];
      this.learnInfo = this.learnInfo[0];
      this.storyInfo = this.storyInfo[0];
    },
    data() {
      return {
        msg: '个人中心',
        // 个人信息
        myDate: [{
          name: '幕思城-YB',
          iconUrl: require('@/assets/images/learner/head-pic.png'),
          day: 2341,
          type: '经理班'
        }],
        //学习数据
        learnInfo: [{
          classTime: '2019.01.03',
          courseNum: 245,
          rate: 92
        }],
        learnDate: [{
            info: '已连续登陆',
            content: 34,
            color: '#4CBEF9'
          },
          {
            info: '已学习课程',
            content: 212,
            color: '#C178D1'
          },
          {
            info: '总学习时长',
            content: 3.8,
            color: '#E15856'
          },
          {
            info: '书写笔记',
            content: 21,
            color: '#FAA748'
          },
          {
            info: '已诊断报告',
            content: 2,
            color: '#9CADFF'
          },
          {
            info: '学习总评级',
            content: '良好',
            color: '#EEC563'
          },
        ],
        //店铺数据
        storyInfo: [{
          bind: '安踏官方网店',
          trust: '天猫店铺'
        }],
        storyDate: [{
            name: '流量历史数据',
            dataUrl: require('@/assets/images/learner/his_pic1.png'),
            detail: [{
              record: '2154',
              title: '展示数据类'
            },
            {
            record: '2154',
              title: '展示数据类'
            }
            ]
          },
          {
            name: '销量历史数据',
            dataUrl: require('@/assets/images/learner/his_pic2.png'),
            detail: [{
              record: '2154',
              title: '展示数据类'
            },{
              record: '2154',
              title: '展示数据类'
            }]
          },
          {
            name: '词库历史数据',
            dataUrl: require('@/assets/images/learner/his_pic3.png'),
            detail: [{
              record: '2154',
              title: '展示数据类'
            },
            {
            record: '2154',
              title: '展示数据类'
            }]
          }
        ],
        //个人列表
        centerDate: [{
            iconUrl: require('@/assets/images/learner/center_pic1.png'),
            text: '我的报名',
          },
          {
            iconUrl: require('@/assets/images/learner/center_pic2.png'),
            text: '修改手机',
          },
          {
            iconUrl: require('@/assets/images/learner/center_pic3.png'),
            text: '修改密码',
          },
          {
            iconUrl: require('@/assets/images/learner/center_pic4.png'),
            text: '我的店铺',
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