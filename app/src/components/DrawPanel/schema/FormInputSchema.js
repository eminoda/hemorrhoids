import ElementSchema from './ElementSchema'

class FormInputSchema extends ElementSchema {
    constructor(options = {}) {
        super(options);
        this.elTag = 'el-input'
        this.elEvents = {
            placeholder: '请输入'
        }
    }
}
export default FormInputSchema