import ElementSchema from './ElementSchema'

class FormSelectSchema extends ElementSchema {
    constructor(options = {}) {
        super(options);
        this.elTag = 'el-input'
        this.elEvents = {
            placeholder: '请输入'
        }
        this.options = options.options || [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }]
    }
}
export default FormSelectSchema