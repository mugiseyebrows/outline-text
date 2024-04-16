import './FontPicker.css'

function quoted(font) {
    if (font.indexOf(' ') > -1) {
        return "'" + font + "'"
    }
    return font
}

function isNumber(value) {
    return typeof value === 'number'
}

function isString(value) {
    return typeof value === 'string'
}

export default class FontPicker {
    constructor(input, fonts, current = 0) {
        let ul = document.createElement('ul')
        let items = fonts.map(font => {
            let li = document.createElement('li')
            li.style.fontFamily = quoted(font)
            let text = document.createTextNode(font)
            li.appendChild(text)
            ul.appendChild(li)
            return li
        });
        this._ul = ul
        this._input = input
        this._items = items
        this._onchange = undefined

        if (isString(current)) {
            current = fonts.indexOf(current)
            if (current < 0) {
                current = 0
            }
        }

        //let current = 0

        /*let div = document.createElement('div')
        input.parentElement.appendChild(div)
        div.appendChild(input)
        div.appendChild(ul)*/

        input.parentElement.appendChild(ul)

        // input.parentElement.classList.remove('c')

        /*let div = document.createElement('div')
        div.innerHTML = 'label'
        input.parentElement.insertBefore(div, input)*/

        //ul.style.position = 'absolute'
        input.parentElement.classList.add('fontpicker')
        input.value = fonts[current]

        function currentChanged() {
            items.forEach((item, i) => {
                if (i === current) {
                    item.classList.add('current')
                } else {
                    item.classList.remove('current')
                }
            });
        }

        //currentChanged()

        function open() {
            //console.log('open', arguments)
            ul.classList.remove('closed')
        }

        function close() {
            //console.log('close', arguments)
            ul.classList.add('closed')
        }

        let that = this

        function commit(index) {
            current = index
            currentChanged()
            input.value = fonts[current]
            input.style.fontFamily = quoted(fonts[current])
            close()
            if (that._onchange !== undefined) {
                that._onchange(fonts[current])
            }
        }

        function isOpen() {
            return !ul.classList.contains('closed')
        }

        //input.addEventListener("focusin", open);

        //input.addEventListener("focusout", close);

        input.addEventListener("keydown", (event) => {
            //console.log('keydown', event)
            if (event.keyCode === 38) {
                event.preventDefault()
                if (!isOpen()) {
                    open()
                } else {
                    if (current - 1 >= 0) {
                        current -= 1
                        currentChanged()
                    }
                }
            } else if (event.keyCode  === 40) {
                event.preventDefault()
                if (!isOpen()) {
                    open()
                } else {
                    if (current + 1 < items.length) {
                        current += 1
                        currentChanged()
                    }
                }
                
            } else if (event.keyCode === 13) {
                event.preventDefault()
                commit(current)
            } else if (event.keyCode === 27) { // escape
                close()
            }
        })

        document.addEventListener('click', (event) => {

            if (event.target === input) {
                open()
                return
            }

            //console.log('click target', event.target)
            let index = items.indexOf(event.target)
            //console.log('index', index)
            if (index > -1) {
                commit(index)
                input.focus()
            } else {
                close()
            }

        })

        //open()

        commit(current)

    }

    onchange(handler) {
        this._onchange = handler
    }

}