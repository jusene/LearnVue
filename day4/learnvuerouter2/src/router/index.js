import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//push
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

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
      // 路由懒加载
      component: () => import('@/components/HelloWorld'),
      children: [
        {
          path: '',
          redirect: '/hello/news'
        },
        {
          path: 'news',
          name: 'UserNews',
          component: () => import('@/components/HelloNews'),
        },
        {
          path: "msg",
          name: 'UserMsg',
          component: () => import('@/components/HelloMsg')
        }
      ]
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: () => import('@/components/AboutMe') 
    },
    {
      path: "/user/:userId",
      name: 'User',
      component: () => import('@/components/User'),
    },
    {
      path: "/profile",
      name: 'Profile',
      component: () => import('@/components/Profile')
    }
  ]
})


