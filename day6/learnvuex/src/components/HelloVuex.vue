<template>
    <div>
        <h2>{{$store.getters.powCounter}}</h2>
        <h2>{{$store.state.name}}</h2>
        <h2>{{$store.state.a.name}}</h2>
    </div>
</template>

<script>
export default {
    name: "HelloVuex"
}
</script>
