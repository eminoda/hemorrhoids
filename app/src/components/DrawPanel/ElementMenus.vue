<template>
  <div class="element-menus">
    <h3>表单项</h3>
    <template v-for="item in menus">
      <element-menu-item
        :key="item.tagName"
        :menu="item"
        class="element-menus--item"
      />
    </template>
  </div>
</template>

<script>
import ElementMenuItem from './ElementMenuItem'

export default {
  components: { ElementMenuItem },
  data () {
    return {
      menus: [
        { tagName: 'el-input', label: '输入框' },
        { tagName: 'el-checkbox-group', label: '多选框', value: ['A', 'B'], options: [{ label: 'A' }, { label: 'B' }, { label: 'C' }] },
        { tagName: 'el-radio-group', label: '单选框', value: 'A', options: [{ label: 'A' }, { label: 'B' }] },
        { tagName: 'el-select', label: '下拉框', options: [{ label: 'A' }, { label: 'B' }] },
        // { tagName: 'el-switch', label: '开关' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.element-menus {
  padding: 20px;
  &--item {
    margin-bottom: 20px;
  }
  &:last-child{
    margin-bottom: 0;
  }
}
</style>