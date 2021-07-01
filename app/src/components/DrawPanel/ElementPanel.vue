<template>
  <div
    class="wrap"
    @drop="handleDrop"
    @dragover.prevent="handleDrapOver"
    @dragenter.prevent="handleDrapEnter"
  >
    12
  </div>
</template>

<script>
export default {
  methods: {
    handleDrop () {
      console.log(1)
    },
    handleDrapOver () {
      console.log(2)
    },
    handleDrapEnter () {
      console.log(3)
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  height: 500px;
  width: 300px;
  background: #666;
}
</style>