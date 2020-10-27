import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/views/login')

/* 通用路由 */
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: '登陆'
            }
        }   
    ]
})