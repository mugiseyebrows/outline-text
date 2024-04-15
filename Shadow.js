
export default class Shadow {

    constructor(element) {
        this._x = 2
        this._y = 2
        this._std = 2
        this._color = 'rgba(20, 20, 159, 1)'
        this._enabled = true
        this._element = element
    }

    push() {
        let filter = ''
        if (this._enabled) {
            filter = `drop-shadow(${this._x}px ${this._y}px ${this._std}px ${this._color}`
        } 
        this._element.style.webkitFilter = filter
    }

    get x() {
        return this._x
    }

    set x(value) {
        this._x = value
        this.push()
    }

    get y() {
        return this._y
    }

    set y(value) {
        this._y = value
        this.push()
    }

    get std() {
        return this._std
    }

    set std(value) {
        this._std = value
        this.push()
    }

    get enabled() {
        return this._enabled
    }

    set enabled(value) {
        this._enabled = value
        this.push()
    }

    get color() {
        return this._color
    }

    set color(value) {
        this._color = value
        this.push()
    }

}
