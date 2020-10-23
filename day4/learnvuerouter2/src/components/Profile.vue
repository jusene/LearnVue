<template>
    <div>
        <h1>我是profile {{msg}}</h1>
        <h2>{{$route.query.name}}</h2>
        <h2>{{$route.query.age}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            msg: "profile"
        }
    }
}
</script>