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
            blur: null,
            focus: null,
            change: `function(value){\n\tconsole.log(value);\n}`
        }
    }
}
export default FormInputSchema