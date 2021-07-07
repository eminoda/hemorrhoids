<template>
  <div class="element-menus">
    <h3 draggable>表单项</h3>
    <template v-for="item in menus">
      <element-menu-item
        :key="item.elTag"
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
        { elTag: 'el-input', label: '输入框' },
        { elTag: 'el-checkbox-group', label: '多选框', value: ['A', 'B'], options: [{ label: 'A' }, { label: 'B' }, { label: 'C' }] },
        { elTag: 'el-radio-group', label: '单选框', value: 'A', options: [{ label: 'A' }, { label: 'B' }] },
        { elTag: 'el-select', label: '下拉框', options: [{ label: 'A' }, { label: 'B' }] },
        // { elTag: 'el-switch', label: '开关' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.element-menus {
  padding: 20px;
  &--item {
    padding-bottom: 20px;
  }
  &:last-child{
    margin-bottom: 0;
  }
}
</style>