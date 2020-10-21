<template>
    <div>
        <h1 class="title">{{message}}</h1>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from "./Cpn"

export default {
    name: "App",
    data() {
        return {
            message: "hello vue.js!",
            name: "jusene"
        }
    },
    components: {
        Cpn
    }
}
</script>

<style scoped>
    .title {
        color: green;
    }
</style>