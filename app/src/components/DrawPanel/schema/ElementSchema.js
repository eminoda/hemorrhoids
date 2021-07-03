class ElementSchema {
    constructor(options = {}) {
        this.elTag = options.elTag // div | span | img
        this.elStyle = {}
        this.elEvents = {}
        // 定位
        this.position = options.position
        // 长宽
        this.matrix = {
            height: 0,
            width: 0
        }
        this.value = options.value || ''
    }
}
export default ElementSchema