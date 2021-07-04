<template>
  <el-container>
    <el-aside width="250px">
      <element-menus />
    </el-aside>
    <el-main>
      <element-panel @move="handleElementMove" />
    </el-main>
    <el-aside width="400px">
      <element-setting :schema="schema" @change="changeHandle" />
    </el-aside>
  </el-container>
</template>

<script>
import ElementMenus from '../components/DrawPanel/ElementMenus'
import ElementPanel from '../components/DrawPanel/ElementPanel'
import ElementSetting from '../components/DrawPanel/ElementSetting'
// import FormInputSchema from '../components/DrawPanel/schema/FormInputSchema'

export default {
  components: {
    ElementMenus, ElementPanel, ElementSetting
  },
  data () {
    return {
      schema: null
      // schema: new FormInputSchema({
      //   elTag: 'el-input',
      //   label: 'label'
      // })
    }
  },
  methods: {
    handleElementMove (schema) {
      this.schema = schema
    },
    changeHandle (schema) {
      console.log(schema)
    }
  },
  created () {
  }
}
</script>

<style>
</style>