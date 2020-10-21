<template>
    <div>
        <h1 class="title">{{message}}</h1>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            message: "hello vue.js!",
            name: "jusene"
        }
    }
}
</script>

<style scoped>
    .title {
        color: green;
    }
</style>