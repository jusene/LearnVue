import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  // createElement('标签', {标签属性}, [''])
  // render: function(createElement) {
  //  return createElement('h2', {class: 'box'}, ['hello world'])
  // }
  render: function(createElement) {
    return createElement(App)
  }
})
