
<script>
export default {
  props: {
    menu: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    renderOptions () {
      const optionsNodes = []
      this.menu.options.forEach(({ label, value }) => {
        let childTagName = 'el-option'
        if (this.menu.elTag == 'el-checkbox-group') {
          childTagName = 'el-checkbox'
        }
        else if (this.menu.elTag == 'el-radio-group') {
          childTagName = 'el-radio'
        }
        const optionNode = this.$createElement(childTagName, {
          props: {
            label, value
          }
        })
        optionsNodes.push(optionNode)
      });
      return optionsNodes
    }
  },
  render (h) {
    return h('el-row', {
      props: {
        // gutter: 10,
        type: 'flex',
        justify: 'start'
      },
      class: 'element-menu'
    }, [
      h('el-col', {
        props: { span: 24 }, class: 'element-menu--label',
      }, this.menu.label),
      h('el-col', {
        props: { span: 24 },
        domProps: {
          draggable: true
        },
        class: 'menu-item',
        nativeOn: {
          // https://learnvue.co/2020/01/how-to-add-drag-and-drop-to-your-vuejs-project/
          dragstart: (event) => {
            event.dataTransfer.effectAllowed = 'move'
            // event.target.style.border = '1px solid red';
            // event.target.style.padding = '10px';
            console.log('layer', `[${event.layerX},${event.layerY}]`, 'offset', `[${event.offsetX},${event.offsetY}]`, 'point', `[${event.x},${event.y}]`)
            event.dataTransfer.setData('dragItem', JSON.stringify({ elTag: this.menu.elTag, offset: { x: event.offsetX, y: event.offsetY } }))
          },
          dragover (event) {
            event.preventDefault();
          },
          dragend: (event) => {
            event.target.style.border = 'none';
          }
        }
      }, [h(this.menu.elTag, {
        props: {
          size: 'small',
          value: this.menu.value
        },
      }, this.menu.options && this.renderOptions())]),
    ])
  }
}
</script>

<style lang="less" scoped>
.element-menu {
  flex-flow: column;
  &--label {
    margin-bottom: 10px;
  }
  /deep/.menu-item * {
    cursor: move !important;
  }
}
</style>