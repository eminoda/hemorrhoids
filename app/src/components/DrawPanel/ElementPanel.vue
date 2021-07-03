

<script>
import ElementFactory from './ElementFactory'
export default {
  components: {
    ElementFactory
  },
  data () {
    return {
      vNodes: []
    }
  },
  computed: {
  },
  methods: {
    handleDragEnter () {
      // event.dataTransfer.dropEffect = 'link'
      // console.log('dragEnter', event.dataTransfer)
    },
    handleDragOver (event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move'
    },
    handleDrop (event) {
      console.log('layer', `[${event.layerX},${event.layerY}]`, 'offset', `[${event.offsetX},${event.offsetY}]`)
      event.preventDefault();
      // TODO: 要在 vNodes 遍历，根据当前拖拽元素放到适当位置
      const { elTag, offset } = JSON.parse(event.dataTransfer.getData('dragItem'))
      const el = this.$createElement('element-factory', {
        props: {
          elTag,
          pointer: this.getPointer(event, offset)
        }
      })
      this.vNodes.push(el)
    },
    getPointer (event, offset) {
      return { x: event.offsetX - offset.x, y: event.offsetY - offset.y }
    }
  },
  render (h) {
    return h('div', {
      class: 'wrap',
      ref: 'panelRef',
      on: {
        drop: this.handleDrop,
        dragover: this.handleDragOver,
        dragenter: this.handleDragEnter
      }
    }, this.vNodes)
  }
}
</script>

<style lang="less" scoped>
.wrap {
  height: 500px;
  width: 100%;
  background: #f2f2f2;
  position: relative;
}
</style>