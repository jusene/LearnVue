<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            name: 'jusene'
        }
    },
    created() {
    console.log('created')
    // document.title = 'about'
  },
}
</script>

<style scoped>
h2 {
  color: blueviolet;
}
</style>