import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Saved from '@/components/Saved'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/saved',
      name: 'Saved',
      component: Saved
    }
  ]
})
