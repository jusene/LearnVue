import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
