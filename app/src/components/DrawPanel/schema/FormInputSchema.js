import ElementSchema from './ElementSchema'

class FormInputSchema extends ElementSchema {
    constructor(options = {}) {
        super(options);
        this.elTag = 'el-input'
        this.elAttrs = {
            placeholder:
                options.elAttrs ? options.elAttrs.placeholder : '请输入'
        }
        this.elEvents = {
            blur: {},
            focus: {},
            change: {
                params: ['event'],
                body: 'return event',
            }
        }
    }
}
export default FormInputSchema