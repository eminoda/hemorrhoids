
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
        if (this.menu.tagName == 'el-checkbox-group') {
          childTagName = 'el-checkbox'
        }
        else if (this.menu.tagName == 'el-radio-group') {
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
        gutter: 10,
        type: 'flex',
        justify: 'start'
      },
      class: 'element-menu'
    }, [
      h('el-col', { props: { span: 24 }, class: 'element-menu--label' }, this.menu.label),
      h('el-col', {
        props: { span: 24 },
        domProps: {
          draggable: true
        },
        nativeOn: {
          dragstart: () => {
            console.log('dragstart')
          }
        }
      }, [h(this.menu.tagName, {
        props: {
          size: 'small',
          value: this.menu.value
        }
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
}
</style>