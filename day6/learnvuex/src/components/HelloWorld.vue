<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{$store.state.counter}}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(10)">+10</button>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  }, 
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.dispatch('request', '我是payload').then(
        res => {
          console.log('里面完成了提交')
          console.log(res)
        }
      )
    },
    addCount(num) {
      // 普通方式
      //this.$store.commit('addCount', num)

      this.$store.commit({
        type: 'addCount',
        num
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
