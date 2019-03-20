<!--  -->
<template>
  <div class='forum-detail btm'>
    <m-back class="line"></m-back>
    <div class="detail-box">
      <div class="tit">
        {{detailBox.tit}}
      </div>
      <div class="people">
        <img :src="detailBox.hpic" alt="">
        <div class="info">
          <span class="name">
            {{detailBox.name}}
          </span>
          <p>
            发布于{{detailBox.time}}&nbsp;{{detailBox.reply}}回复&nbsp;{{detailBox.read}}次浏览
          </p>
        </div>
      </div>
      <img src="../../assets/images/forum/detail_bg.png" alt="" class="detail-bg">
      <div class="detail-btn">
        <div class="zan" @click='dzan'>
          <img src="../../assets/images/forum/zan.png" alt="">
          <span>{{detailBox.detail_zan}}赞</span>
        </div>
        <div class="share">
          <img src="../../assets/images/forum/share.png" alt="">
          <span>分享帖子</span>
        </div>
      </div>
    </div>
    <!-- 回帖 -->
    <div class="reply-box">
      <div class="reply-tit">
        <strong>回帖列表</strong>
        <span class="note-btn">
          提交笔记
        </span>
      </div>
      <ul>
        <li v-for="(item,index) in replyBox" :key='index'>
          <div class="reply-info">
            <img :src='item.photo' alt="">
            <strong>
              {{item.name}}
            </strong>
          </div>
          <p>
            {{item.content}}
          </p>
          <div class="discuss-box">
            <div class="reply-zan" @click='rzan(rflag,index)' :class="item.end?item.end:''">
              <span>赞|{{item.reply_zan}}</span>
              <p>回复</p>
            </div>
            <div class="note-rank">
              笔记内容质量:
              <span :style="item.rank=='优秀'?'background:#4bd38a':item.rank=='良好'?'background:#ab7ef4':'background:red'">{{item.rank}}</span>
            </div>
          </div>
        </li>
      </ul>
      <m-load-more :text='loadText' class="notop"></m-load-more>
    </div>
    <div class="bottom-btn">
      <router-link to='#'>
        返回列表
      </router-link>
      <router-link to='#'>
        提交笔记
      </router-link>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import Mback from '@/components/m-back/m-back';
  import mLoadMore from '@/components/m-load-more/m-load-more';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      'm-back': Mback,
      'm-load-more': mLoadMore
    },
    data() {
      //这里存放数据
      return {
        flag: false,
        rflag: '',
        loadText: '加载更多',
        // 帖子点赞
        detailNum: 22,
        // 回复赞
        replyNum: 111,
        detailBox: {
          tit: '【第二篇：盈利产品打造】第13天考试+作业+实操',
          hpic: require('@/assets/images/forum/teacher_icon.png'),
          name: '幕思城_卓玛',
          time: '2019/01/08 11:11:24',
          reply: 30,
          read: 123,
          detail_zan: 12
        },
        replyBox: [{
            photo: require('@/assets/images/forum/teacher_icon.png'),
            name: '59期阿豪',
            content: '32-59期豪-暂定 今天是幕思城班级学习的第12天。【学习笔记】：直面问题、分析问题、拆解问题、解决问题移民火星第一步：解决发射成本（火星回收计划）第二步：减少发射重量（空间站计划）第三步：选择返航方式（选择火星已有资源）第四步：选择合适的燃料（讲资源生产返航资料）通过把一个复杂大问题，拆解成一个有一个可落地执行的简单问题，是解决复杂问题最有效的方式。详情页板块 吸引区-展示区-说服区-卖点区-实力区-决定区自己可以不懂美工但对详情的布局对内容的提炼，就必须要一个对产品非常了解的人做这样的模块布局。',
            reply_zan: 22,
            rank: '差',
            end: 'active',
          },
          {
            photo: require('@/assets/images/forum/teacher_icon.png'),
            name: '59期阿豪',
            content: '32-59期豪-暂定 今天是幕思城班级学习的第12天。【学习笔记】：直面问题、分析问题、拆解问题、解决问题移民火星第一步：解决发射成本（火星回收计划）第二步：减少发射重量（空间站计划）第三步：选择返航方式（选择火星已有资源）第四步：选择合适的燃料（讲资源生产返航资料）通过把一个复杂大问题，拆解成一个有一个可落地执行的简单问题，是解决复杂问题最有效的方式。详情页板块 吸引区-展示区-说服区-卖点区-实力区-决定区自己可以不懂美工但对详情的布局对内容的提炼，就必须要一个对产品非常了解的人做这样的模块布局。',
            reply_zan: 22,
            rank: '良好'
          },
          {
            photo: require('@/assets/images/forum/teacher_icon.png'),
            name: '59期阿豪',
            content: '32-59期豪-暂定 今天是幕思城班级学习的第12天。【学习笔记】：直面问题、分析问题、拆解问题、解决问题移民火星第一步：解决发射成本（火星回收计划）第二步：减少发射重量（空间站计划）第三步：选择返航方式（选择火星已有资源）第四步：选择合适的燃料（讲资源生产返航资料）通过把一个复杂大问题，拆解成一个有一个可落地执行的简单问题，是解决复杂问题最有效的方式。详情页板块 吸引区-展示区-说服区-卖点区-实力区-决定区自己可以不懂美工但对详情的布局对内容的提炼，就必须要一个对产品非常了解的人做这样的模块布局。',
            reply_zan: 12,
            rank: '优秀',
            end: 'active',
          },
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      dzan: function () {
        if (this.flag) {
          this.detailBox.detail_zan--;
          this.flag = false;
        } else {
          this.detailBox.detail_zan++;
          this.flag = true;
        }
      },
      rzan: function (e, index) {
        console.log(e, index);
        if (e) {
          this.replyBox[index].reply_zan--;
          this.rflag = '';
        } else {
          this.replyBox[index].reply_zan++;
          this.rflag = 'active';
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='less' scoped>
  //@import url(); 引入公共css类
  @import './forum-detail.less';
</style>