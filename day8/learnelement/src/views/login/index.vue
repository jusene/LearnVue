<template>
    <div class="login">
    <div class="loginBox">
        <h2 class="loginH2"><strong>运维后台系统</strong></h2>
    </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
.login {
    height: 100%;
    width: 100%;
    background: url(../../assets/pageBg/loginBg.jpg) no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
}

.loginBox {
    height: 455px;
    width: 550px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    margin-top: -287px;
}

.loginH2 {
  font-size: 38px;
  color: #fff;
  text-align: center;
}
</style>