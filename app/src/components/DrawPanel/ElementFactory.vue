
<script>
import ElementSchema from './schema/ElementSchema'
import FormInputSchema from './schema/FormInputSchema'
import FormSelectSchema from './schema/FormSelectSchema'
import FormRadioSchema from './schema/FormRadioSchema'
import FormCheckboxSchema from './schema/FormCheckboxSchema'
import ShapeBox from './ShapeBox'

export default {
  name: 'element-factory',
  components: {
    ShapeBox
  },
  props: {
    elTag: {
      type: String,
      default: 'div'
    },
    pointer: {
      type: Object,
      default () {
        return { x: 0, y: 0 }
      }
    }
  },
  methods: {
    renderShapeBox (elementVNode, schema) {
      return this.$createElement('shape-box', {
        props: {
          schema
        },
        on: {
          move: (schema) => {
            this.$emit('move', schema)
          }
        }
      }, [elementVNode])
    },
    renderElementWithChildren (schema) {
      const childrenVNode = []
      if (schema.options) {
        const optionMatchElTag = ['radio', 'checkbox']
        let optionElTag;
        if (this.elTag == 'el-select') {
          optionElTag = 'el-option'
        } else {
          optionElTag = 'el-' + optionMatchElTag.find(item => this.elTag.includes(item))
        }
        schema.options.forEach(option => {
          const childVNode = this.$createElement(optionElTag, {
            props: {
              label: option.label,
              value: option.value,
              key: option.key,
            }
          })
          childrenVNode.push(childVNode)
        })
      }
      console.log(schema)
      const elementVNode = this.$createElement(this.elTag, { props: Object.assign(schema.elEvents, { value: schema.value }), attrs: schema.elEvents }, childrenVNode)

      return this.renderShapeBox(elementVNode, schema)
    },
    renderElement (schema) {
      const elementVNode = this.$createElement(this.elTag, { props: schema.elAttrs, attrs: schema.elAttrs })
      return this.renderShapeBox(elementVNode, schema)
    },
    compile () {
      let schema
      switch (this.elTag) {
        case 'el-input':
          schema = new FormInputSchema({ elTag: this.elTag, position: this.pointer })
          return this.renderElement(schema)
        case 'el-select':
          schema = new FormSelectSchema({ elTag: this.elTag, position: this.pointer })
          return this.renderElementWithChildren(schema)
        case 'el-radio-group':
          schema = new FormRadioSchema({ elTag: this.elTag, position: this.pointer })
          return this.renderElementWithChildren(schema)
        case 'el-checkbox-group':
          schema = new FormCheckboxSchema({ elTag: this.elTag, position: this.pointer })
          return this.renderElementWithChildren(schema)
        default:
          schema = new ElementSchema({ elTag: this.elTag })
          return this.$createElement(this.elTag, { props: schema.elEvents })
      }

    }
  },
  render (h) {
    return this.compile(h)
  }
}
</script>

<style>
</style>
