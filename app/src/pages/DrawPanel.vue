<template>
  <el-container>
    <el-aside width="250px">
      <element-menus />
    </el-aside>
    <el-main>
      <element-panel />
    </el-main>
    <el-aside width="200px">
      <element-schema />
    </el-aside>
  </el-container>
</template>

<script>
import ElementMenus from '../components/DrawPanel/ElementMenus'
import ElementPanel from '../components/DrawPanel/ElementPanel'
import ElementSchema from '../components/DrawPanel/ElementSchema'
export default {
  components: {
    ElementMenus, ElementPanel, ElementSchema
  }
}
</script>

<style>
</style>