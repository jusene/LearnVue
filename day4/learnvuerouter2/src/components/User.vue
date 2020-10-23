<template>
    <div>
        <h1>我是用户{{user}}</h1>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        user() {
            return this.$route.params.userId
        }
    }
}
</script>

<style scoped>

</style>