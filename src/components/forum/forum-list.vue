<template>
    <!-- 论坛列表 -->
  <div class="forum-list">
     <m-back class="line"></m-back>
     <div class="forum-list-box">
       <ul>
         <li v-for="(item,index) in forumList" :key='index' class="list-content">
            <div class="tit">
              <a>{{item.tit}}</a>
              <ul>
                  <li v-if='item.dt' :style="{background:item.dt?item.dtColor:''}">
                    {{item.dt}}
                  </li>
                  <li v-if='item.jt' :style="{background:item.jt?item.jtColor:''}">
                    {{item.jt}}
                  </li>
              </ul>
            </div>
            <div class="info">
              <span class="name">
                {{item.author}}|发布于{{item.time}}
              </span>
              <span class="read">
                浏览{{item.readNum}}
                回复{{item.reply}}
              </span>
            </div>
         </li>
       </ul>
       <m-load-more :text="text" @click.native='doMore'></m-load-more>
     </div>
    <m-bottom-back></m-bottom-back>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  import mBack from '@/components/m-back/m-back';
  import mBottomBack from '@/components/m-bottom-back/m-bottom-back';
  import mLoadMore from '@/components/m-load-more/m-load-more';
  export default {
    name: 'HelloWorld',
    components:{
      'm-back':mBack,
      'm-bottom-back':mBottomBack,
      'm-load-more':mLoadMore
    },
    mounted: function () {
      
    },
    methods:{
      doMore:function(){
        alert('加载更多');
      }
    },
    data() {
      return {
        text:'加载更多',
       forumList:[
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'顶',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'顶',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'顶',
           jt:'',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'顶',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'',
           jt:'精',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'顶',
           jt:'',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         },
         {
           tit:'【2019-01-02班】【第三篇：盈利流量管理】第12天笔记',
           author:'幕思城花花',
           time:'2018/12/29 22:59:11',
           readNum:'157',
           reply:'28',
           dt:'',
           jt:'',
           dtColor:'#E8322D',
           jtColor:'#74C10F'
         }
       ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './forum-list.less';
</style>