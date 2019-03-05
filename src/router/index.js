import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Learnfree from '@/components/learn/learn-free'
import Learnvip from '@/components/learn/learn-vip'
import Learner from '@/components/learner/learner'
import Tool from '@/components/tool/tool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/learn-vip',
      name: 'Learnvip',
      component: Learnvip,
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
      }
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
