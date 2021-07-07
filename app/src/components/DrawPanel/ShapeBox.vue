<template>
  <div
    class="shape-box"
    :class="isHover ? 'shape-hover' : ''"
    @mousedown="handleMoveStart"
    @mouseup="handleMoveEnd"
    @mouseenter="handleEnter"
    @mousemove="handleMove"
    @mouseleave="isHover = false"
    :style="position"
  >
    <slot />
    <!-- <div v-if="isHover" class="shape-box--move"></div> -->
    <div v-if="isHover" class="shape-box--item left-top"></div>
    <div v-if="isHover" class="shape-box--item right-top"></div>
    <div v-if="isHover" class="shape-box--item left-bottom"></div>
    <div v-if="isHover" class="shape-box--item right-bottom"></div>
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
    }
  },
  computed: {
    position () {
      return {
        left: this.moveEnd.x + 'px',
        top: this.moveEnd.y + 'px'
      }
    }
  },
  data () {
    return {
      isMove: false,
      isHover: false,
      moveStart: {
        x: 0,
        y: 0
      },
      moveEnd: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    handleMoveStart (event) {
      // console.log('handleMoveStart');
      this.$emit('move', this.schema)
      this.isMove = true
      this.moveStart.x = event.x - this.moveEnd.x
      this.moveStart.y = event.y - this.moveEnd.y
    },
    // 遮挡 input 的 cursor 效果
    handleEnter () {
      this.isHover = true
    },
    handleMove (event) {
      if (!this.isMove) return
      // console.log('handleMove');
      this.moveEnd.x = event.x - this.moveStart.x
      this.moveEnd.y = event.y - this.moveStart.y
      // console.log(this.pointer, this.position)
    },
    handleMoveEnd () {
      this.isMove = false
      // console.log({
      //   left: this.moveEnd.x,
      //   top: this.moveEnd.y
      // })
    }
  },
  mounted () {
    console.log(this.schema)
    this.moveEnd.x = this.schema.position.x
    this.moveEnd.y = this.schema.position.y
  }
}
</script>

<style lang="less" scoped>
.shape-box {
  position: absolute;

  user-select: none;
  &--move {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: move;
  }
  &--item {
    border-color: #333;
    width: 6px;
    height: 6px;
    z-index: 32;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    background: white;
  }
  .left-top {
    top: -3px;
    left: -3px;
  }
  .right-top {
    top: -3px;
    right: -3px;
  }
  .left-bottom {
    bottom: -3px;
    left: -3px;
  }
  .right-bottom {
    bottom: -3px;
    right: -3px;
  }
}
</style>