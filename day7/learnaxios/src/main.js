import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

// axios并发请求
axios.all([
  axios({
    url: '/home/multidata',
    method: 'get'
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'pop',
      page: 1
    }
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
}))