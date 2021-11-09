<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div> 
        <div v-else><slot name="item-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeClor: {
            type: String,
            default: ''
        }
    }, 
    computed: {
        isActive() {
            // 如果在这个path返回真
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeClor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
  }

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
}
</style>