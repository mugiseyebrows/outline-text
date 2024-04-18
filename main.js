import * as dat from 'dat.gui';
const Color = dat.color.Color
import savePng from './savePng'
import Shadow from './Shadow'
import FontPicker from './FontPicker';
import './styles.css'
import getFontFamilies from './fonts';



let svg = document.querySelector('svg')
let svgText = document.querySelector('text')

/*
svgText.style.fill = 'rgba(221, 24, 24, 0.9)'
svgText.style.stroke = 'rgba(172,30,250,0.9)'
svgText.style.strokeWidth = '1px'
svgText.style.fontSize = '100px'
svgText.style.fontFamily = 'Rockwell'
*/

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}



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

    get fill() {
        return svgText.style.fill
    },

    set fill(value) {
        svgText.style.fill = value
    },

    get stroke() {
        return svgText.style.stroke
    },

    set stroke(value) {
        svgText.style.stroke = value
    },

    get fontWeight() {
        return parseInt(svgText.style.fontWeight, 10)
    },

    set fontWeight(value) {
        svgText.style.fontWeight = value
    },

    get italic() {
        return svgText.style.fontStyle === 'italic'
    },

    set italic(value) {
        svgText.style.fontStyle = value ? 'italic' : 'normal'
    },

    save: savePng,
}

proxy.text = 'hello\nworld'
proxy.fill = 'rgba(221, 24, 24, 0.9)'
proxy.stroke = 'rgba(172, 30, 250, 0.9)'
proxy.strokeWidth = 1
proxy.fontSize = 100
proxy.fontFamily = 'Rockwell'
proxy.fontWeight = 400

// svgText.innerHTML = 'hey <br/> there'

let shadow = new Shadow(svgText)

const gui = new dat.GUI({width: 300})

gui.addTextarea(proxy, 'text')

let fontFolder = gui.addFolder('font')


let font = fontFolder.add(proxy, 'fontFamily')
// console.log(font.__input, font)

//let fontpickerDiv = font.domElement
//let parentDiv = fontpickerDiv.parentElement
//parentDiv.style.display = 'flex'
//let propertyName = parentDiv.children[0]
//propertyName.style.display = 'block'
let li = font.__li
li.classList.add('font')

let fontFamilies = getFontFamilies()

let fontPicker = new FontPicker(font.__input, fontFamilies, 0)
fontPicker.onchange((fontFamily) => {
    //console.log('picked', font)
    proxy.fontFamily = fontFamily
})

fontFolder.add(proxy, 'fontSize', 10, 200, 1).name('size')
fontFolder.add(proxy, 'fontWeight', 100, 900, 100).name('weight')
fontFolder.add(proxy, 'italic')
fontFolder.addColor(proxy, 'fill')
fontFolder.addColor(proxy, 'stroke')
fontFolder.add(proxy, 'strokeWidth', 0, 10, 0.1)

fontFolder.open()

let shadowFolder = gui.addFolder('drop-shadow')
shadowFolder.add(shadow, 'enabled')
shadowFolder.add(shadow, 'x', -20, 20, 0.1)
shadowFolder.add(shadow, 'y', -20, 20, 0.1)
shadowFolder.add(shadow, 'std', 0, 10, 0.1)
shadowFolder.addColor(shadow, 'color')

shadowFolder.open()

let sizeFolder = gui.addFolder('size')

sizeFolder.add(proxy, 'width')
sizeFolder.add(proxy, 'height')

sizeFolder.open()

shadow.push()

gui.addButton(proxy, 'save').name('save png')

let color = new Color([1,2,3,1])