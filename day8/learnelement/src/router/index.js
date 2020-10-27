import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/views/login')

/* 通用路由 */
<<<<<<< HEAD
export default new Router({
    mode: 'history',
=======
export default new Router ({
>>>>>>> a9af3ef73bc7b34a9bd632485787abe903bfd651
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