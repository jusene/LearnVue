import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWord = () => import('@/components/HelloWorld')
const NewContact = () => import('@/components/NewContact')

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWord',
    component: HelloWord
  },
  {
    path: '/newcontact',
    name: 'NewContact',
    component: NewContact
  }
]
})