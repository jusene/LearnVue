<template>
    <tab-bar>
        <tab-bar-item path="/home" activeClor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="">
            <img slot="item-active" src="../assets/img/tabbar/home-fill.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeClor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/all.png" alt="">
            <img slot="item-active" src="../assets/img/tabbar/all-fill.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeClor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/add-cart.png" alt="">
            <img slot="item-active" src="../assets/img/tabbar/add-cart-fill.png" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeClor="blue">
            <img slot="item-icon" src="../assets/img/tabbar/bussiness-man.png" alt="">
            <img slot="item-active" src="../assets/img/tabbar/bussiness-man-fill.png" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
        </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem,
    }
}
</script>

<style scoped>

</style>