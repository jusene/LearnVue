<template>
  <div id="app">
    <el-row>
      <el-button @click="btnClick">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    btnClick() {
      this.$message({
        type: 'warning',    
        message: "消息"
        })
    }
  }
}
</script>

<style>

</style>
