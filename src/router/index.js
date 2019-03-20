import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Learnfree from '@/components/learn/learn-free'
import Learnvip from '@/components/learn/learn-vip'
import Learner from '@/components/learner/learner'
import Tool from '@/components/tool/tool'
import Blank from '@/components/blank/blank'
import Forumindex from '@/components/forum/forum-index'
import Forumlist from '@/components/forum/forum-list'
import Forumdetail from '@/components/forum/forum-detail'
import Homeworkindex from '@/components/homework/homework-index'
import Homeworklist from '@/components/homework/homework-list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        curIndex:0
      }
    },
    // {
    //   path: '/learn-free',
    //   name: 'Learnfree',
    //   component: Learnfree,
    //   meta:{
    //     curIndex:1
    //   }
    // },
    {
      path: '/learn/learn-vip',
      name: 'Learnvip',
      component: Learnvip,
      meta:{
        curIndex:1,
        init:true
      }
    },
    // 作业
    {
      path: '/homework/homework-index',
      name: 'homework-index',
      component: Homeworkindex,
      meta:{
        curIndex:1
      }
    },
    {
      path: '/homework/homework-list',
      name: 'homework-list',
      component: Homeworklist,
      meta:{
        curIndex:1
      }
    },
    {
      path: '/forum/forum-index',
      name: 'forum-index',
      component: Forumindex,
      meta:{
        curIndex:1
      }
    },
    {
      path: '/forum/forum-list',
      name: 'forum-list',
      component: Forumlist,
      meta:{
        curIndex:1
      }
    },
    {
      path: '/forum/forum-detail',
      name: 'forum-detail',
      component: Forumdetail,
      meta:{
        curIndex:1
      }
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool,
      meta:{
        curIndex:2
      },
      children:[
        { path: 'blank', component: Blank },
      ]
    },
    {
      path: '/learner',
      name: 'Learner',
      component: Learner,
      meta:{
        curIndex:3
      }
    }
  ]
})
