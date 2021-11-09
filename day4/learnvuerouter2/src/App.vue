<template>
<div id="app">
  <!--
  <router-link to="/hello" tag="button" replace active-class="active">hello</router-link>
  <router-link to="/about" tag="button" replace active-class="active">about</router-link>
  -->
  <!--
  <router-link to="/hello" tag="button" replace>hello</router-link>
  <router-link to="/about" tag="button" replace>about</router-link>
  -->
  <button @click="btnClick" value="hello" :class="{active: currentValue === 'hello'}">hello</button>
  <button @click="btnClick" value="about" :class="{active: currentValue === 'about'}">about</button>
  <!--<router-link :to="{path: '/profile', query: {name: 'jusene', age: 21}}" tag="button" replace active-class="active">profile</router-link>-->
  <button @click="proClick" value="profile" :class="{active: currentValue === 'profile'}">profile</button>
  <button @click="btnClick" :value="'user/'+userId" :class="{active: currentValue === 'user/'+userId}">user</button>
  <keep-alive exclude="Profile,User">
  <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentValue: 'hello',
      userId: 'jusene'
    }
  },
  methods: {
    btnClick() {
      this.test() 
      //this.$router.push('/'+event.target.value)
      this.currentValue = event.target.value
      this.$router.replace('/'+event.target.value)
      console.log(event.target.value)
    },
    proClick() {
      this.currentValue = event.target.value
      this.$router.replace({
        path: '/'+event.target.value,
        query: {
          name: 'jusene', 
          age: 23
        }
      })
      console.log(event.target.value)
    }
  }
}
</script>

<style>
/*.router-link-active {
  color: red;
}*/

.active {
  color: red;
  background: chartreuse;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
