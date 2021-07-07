import ElementSchema from './ElementSchema'

class FormRadioSchema extends ElementSchema {
    constructor(options = {}) {
        super(options);
        this.elTag = 'el-input'
        this.elEvents = {
            placeholder: '请输入'
        }
        this.options = options.options || [{ key: 'A', label: 'A', value: 'A' }, { key: 'B', label: 'B', value: 'B' }]
    }
}
export default FormRadioSchema