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

const router = new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    //{
    //  path: '',
    //  redirect: '/hello'
    //},
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
        title: '首页'
      },
      // 路由懒加载
      component: () => import('@/components/HelloWorld'),
      children: [
        //{
        //  path: '',
        //  redirect: '/hello/news'
        //},
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
      meta: {
        title: '关于'
      },
      beforeEnter: (to, from, next) => {
        console.log('about neforeach')
        next()
      },
      component: () => import('@/components/AboutMe') 
    },
    {
      path: "/user/:userId",
      name: 'User',
      meta: {
        title: '用户'
      },
      component: () => import('@/components/User'),
    },
    {
      path: "/profile",
      name: 'Profile',
      meta: {
        title: '档案'
      },
      component: () => import('@/components/Profile')
    }
  ]
})

// 导航守卫
// 前置钩子
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  next();
})

// 后置钩子
//router.afterEach((to, from) => {
//  console.log('----')
//})


export default router