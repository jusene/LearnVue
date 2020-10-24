<template>
  <div>
    <h2>{{msg}}</h2>
    <router-link to="/hello/news" replace>news</router-link>
    <router-link to="/hello/msg" replace>msg</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      path: '/hello/news'
    }
  },
  created() {
    console.log('created')
    //document.title = 'hello'
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  destroyed() {
    console.log("hello destory")
  },
  activated() {
    this.$router.push(this.path)
    console.log(this.path)
    console.log('activated')
  },
  //deactivated() {
  //  this.path = this.$route.path
  //  console.log(this.path)
  //  console.log('deactivated')
  //},
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    console.log(this.path)
    next()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 50px;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
