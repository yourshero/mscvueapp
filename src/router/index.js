import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Learn from '@/components/learn/learn'
import Learner from '@/components/learner/learner'
import Tool from '@/components/tool/tool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/learner',
      name: 'Learner',
      component: Learner
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool
    }
  ]
})
