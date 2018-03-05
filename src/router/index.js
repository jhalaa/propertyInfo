import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
