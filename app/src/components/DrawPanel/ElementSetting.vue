<template>
  <div>
    <template v-if="schema">
      <el-card header="基本信息">
        <el-form
          ref="form"
          label-position="left"
          label-width="auto"
          label-suffix="："
        >
          <el-form-item label="元素">
            <el-tag>{{ schema.elTag }}</el-tag>
          </el-form-item>
          <el-form-item label="标签名称">
            <el-input
              placeholder="请输入标签名称"
              v-model="schema.label"
              @input="$emit('change', schema)"
            />
          </el-form-item>
          <el-form-item label="输入框占位文本">
            <el-input
              :placeholder="placeholder"
              v-model="schema.elAttrs.placeholder"
              @input="$emit('change', schema)"
            />
          </el-form-item>
        </el-form>
      </el-card>
      <el-card header="自定义事件">
        <el-form
          ref="form"
          label-position="left"
          label-width="auto"
          label-suffix="："
        >
          <el-form-item
            v-for="(event, name) in schema.elEvents"
            :key="name"
            :label="name"
          >
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入代码"
              v-model="schema.elEvents[name]"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </el-card>
      <el-row>
        <el-col></el-col>
        <el-col></el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  computed: {
    placeholder () {
      return '请输入'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>