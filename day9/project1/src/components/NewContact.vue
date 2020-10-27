<template>
 <div>
  <el-row>
    姓名: {{ info.name }}
    <el-input v-model="info.name" placeholder='请输入姓名'></el-input>
    年龄: {{ info.age }} 
    <el-input v-model="info.age" placeholder='请输入年龄'></el-input>
    性别: {{ info.sex }}
    <el-select v-model="info.sex" placeholder='请选择性别'>
      <el-option v-for="item in options" :key="item" :value="item"></el-option>
    </el-select>
    <el-button @click="create">创建</el-button>
      
      <el-table :data="tabledata" alian="left">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column label="操作">
        <template slot-scope="a">
          <el-button size="mini" type="danger" @click="del(a.$index)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
  </el-row>
 </div>
</template>

<script>
import store from '@/store'
export default {
  name: "NewContact",
  data() {
    return {
      info: {
        name: '',
        age: null,
        sex: ''
      },
      options: ['男', '女', '保密'],
      tabledata: store.fetch()
    }
  },
  methods: {
    create() {
      this.tabledata.push(this.info)
      this.$message({
        type: 'info',
        message: '添加成功'
      })
      this.info = {
        name: '',
        age: null,
        sex: ''
      }
    },
    del(index) {
      this.tabledata.splice(index, 1)
      this.$message({
        type: 'info',
        message: ' 删除成功'
      })
    }
  },
  watch: {
    tabledata: {
      handler(items) {
        store.save(items)
      },
      deep: true
    }
  }
}
</script>

<style>
#main{
   float: none;
   margin: 0 auto;
 }
 .el-input{
  padding-bottom: 5px;
 }
 .el-select {
   display: block;
 }
 .btn-auto{
   width: 100%;
   margin-top: 12px;
 }
</style>