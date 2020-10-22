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
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentValue: 'hello'
    }
  },
  methods: {
    btnClick() {
      //this.$router.push('/'+event.target.value)
      this.currentValue = event.target.value
      this.$router.replace('/'+event.target.value)
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
}
</style>
