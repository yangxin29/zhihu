import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/views/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    }
  ]
})
