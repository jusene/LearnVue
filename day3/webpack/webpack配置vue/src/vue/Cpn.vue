<template>
    <h1 class="title">{{message}}</h1>
</template>

<script>
export default {
    name: "Cpn",
    data() {
        return {
            message: "我是cpn的标题"
        }
    }
}
</script>

<style scoped>
.title {
    color: hotpink;
}
</style>