import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 获取原型对象上的push方法
const originalPush = Router.prototype.replace
// 修改原型对象中的push方法
Router.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
} 

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')

const routes = [
  {
    path: "",
    redirect: '/home'
   },
   {
     path: "/home",
     name: "Home",
     component: Home
   },
   {
     path: "/category",
     name: "Category",
     component: Category
   },
   {
     path: "/cart",
     name: "Cart",
     component: Cart
   },
   {
     path: "/profile",
     name: "Profile",
     component: Profile
   },
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

export default router
