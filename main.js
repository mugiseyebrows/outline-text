import * as dat from 'dat.gui';
const Color = dat.color.Color
import savePng from './savePng'
import Shadow from './Shadow'

const gui = new dat.GUI()

let svg = document.querySelector('svg')
let svgText = document.querySelector('text')

svgText.style.fill = 'rgba(221, 24, 24, 0.9)'
svgText.style.stroke = 'rgba(172,30,250,0.9)'
svgText.style.strokeWidth = '1px'
svgText.style.fontSize = '100px'
svgText.style.fontFamily = 'Rockwell'

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

let fontNames = ["Arial", "Baskerville", "Bodoni MT", "Calibri", "Calisto MT", "Cambria", "Candara",
"Century Gothic", "Consolas", "Copperplate Gothic", "Courier New", "Dejavu Sans", "Didot", 
"Franklin Gothic", "Garamond", "Georgia", "Gill Sans", "Goudy Old Style", "Helvetica", "Impact", 
"Lucida Bright", "Lucida Sans", "Microsoft Sans Serif", "Optima", "Palatino", "Perpetua", "Rockwell", 
"Segoe UI", "Tahoma", "Trebuchet MS", "Verdana"]

let proxy = {
    get strokeWidth() {
        return parseFloat(svgText.style.strokeWidth)
    },
    set strokeWidth(value) {
        svgText.style.strokeWidth = value + 'px'
    },
    get fontSize() {
        return parseFloat(svgText.style.fontSize)
    },
    set fontSize(value) {
        svgText.style.fontSize = value + 'px'
    },
    get text() {
        return [...svgText.childNodes].map(e => e.textContent).join('\n')
    },
    set text(value) {
        clear(svgText)
        let lines = value.split('\n')
        lines.forEach((line, i) => {
                let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan")
                tspan.textContent = line
                tspan.setAttribute('dy', '1em')
                tspan.setAttribute('x', '50%')
                tspan.setAttribute('text-anchor', 'middle')
                svgText.appendChild(tspan)
        })
    },
    get fontFamily() {
        return svgText.style.fontFamily
    },
    set fontFamily(value) {
        svgText.style.fontFamily = value.indexOf(' ') > -1 ? `'${value}'` : value
    },

    get width() {
        return parseInt(svg.getAttribute('width'), 10)
    },

    set width(value) {
        svg.setAttribute('width', value)
    },

    get height() {
        return parseInt(svg.getAttribute('height'), 10)
    },

    set height(value) {
        svg.setAttribute('height', value)
    },

    save: savePng,
}

proxy.text = 'hello\nworld'

// svgText.innerHTML = 'hey <br/> there'

gui.addTextarea(proxy, 'text')
gui.add(proxy, 'fontFamily', fontNames)
gui.add(proxy, 'fontSize', 10, 200, 1)
gui.addColor(svgText.style, 'fill')
gui.addColor(svgText.style, 'stroke')
gui.add(proxy, 'strokeWidth', 0, 10, 0.1)


let shadow = new Shadow(svgText)

let folder = gui.addFolder('drop-shadow')
folder.add(shadow, 'enabled')
folder.add(shadow, 'x', -20, 20, 0.1)
folder.add(shadow, 'y', -20, 20, 0.1)
folder.add(shadow, 'std', 0, 10, 0.1)
folder.addColor(shadow, 'color')

folder.open()

gui.add(proxy, 'width')
gui.add(proxy, 'height')

shadow.push()

gui.addButton(proxy, 'save').name('save png')

let color = new Color([1,2,3,1])