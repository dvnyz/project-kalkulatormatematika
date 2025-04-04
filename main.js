const body = document.body

const maxInput = 1
let currentInput = 0

function sumAreaOfCircle() {
    const containerOfCircle = document.getElementById("inputContainerCircle")

    if (currentInput < maxInput) {
        const inputNewToCircle = document.createElement("input")
        inputNewToCircle.type = "number"
        inputNewToCircle.placeholder = "Masukkan Jari Jari"
        inputNewToCircle.id = "radiusInput"

        containerOfCircle.appendChild(inputNewToCircle)
        containerOfCircle.className = "circleContainer"

        currentInput++
    }
    else {
        const radius = parseFloat(document.getElementById("radiusInput").value)

        if (isNaN(radius) || radius <= 0) {
            alert('Masukkan Jari Jari Yang Valid.')
            return
        }

        else {
            if (radius % 7 == 0 ) {
                let areaOfCircle = 22 / 7 * Math.pow(radius, 2)
    
                const resultContainerCircle = document.getElementById("resultContainerCircle")
                resultContainerCircle.innerHTML = `Luasnya Adalah : ${areaOfCircle.toFixed(2)}`
                resultContainerCircle.className = "resultContainerCircle"
            }
            else if (radius % 7 != 0) {
                areaOfCircle = 3,14 * Math.pow(radius, 2)
        
                const resultContainerCircle = document.getElementById("resultContainerCircle")
                resultContainerCircle.innerHTML = `Luasnya Adalah : ${areaOfCircle.toFixed(2)}`
                resultContainerCircle.className = "resultContainerCircle"
            }
        }
}

const inputMax = 2
let inputCurrent = 0

function sumAreaOfTriangle() {
    const containerOfTriangle = document.getElementById("inputContainerTriangle")
    if (inputCurrent < inputMax) {
        const inputNewToTriangle = document.createElement("input")
        inputNewToTriangle.type = "number"
        inputNewToTriangle.placeholder = inputCurrent === 0 ? "Masukkan Alas" : "Masukkan Tinggi"
        inputNewToTriangle.id = inputCurrent === 0 ? "baseInput" : "heightInput"

        containerOfTriangle.appendChild(inputNewToTriangle)
        containerOfTriangle.appendChild(document.createElement("br"))
        containerOfTriangle.className = "triangleContainer"

        inputCurrent++
    } else {
        const base = parseFloat(document.getElementById("baseInput").value)
        const height = parseFloat(document.getElementById("heightInput").value)
        if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
            alert('Masukkan Alas Dan Tinggi Yang Valid.')
            return
        }
        const areaOfTriangle = (base * height) / 2

        const resultContainerTriangle = document.getElementById("resultContainerTriangle")
        resultContainerTriangle.innerHTML = `Luasnya Adalah : ${areaOfTriangle.toFixed(2)}`
        resultContainerTriangle.className = "resultContainerTriangle"
    }
}

const maxInputR = 2
let currentInputR = 0

function sumAreaOfRectangle() {
    const containerOfRectangle = document.getElementById("inputContainerRectangle")
    if (currentInputR < maxInputR) {
        const inputNewToRectangle = document.createElement('input')
        inputNewToRectangle.type = "number"
        inputNewToRectangle.placeholder = currentInputR === 0 ? "Masukkan Panjang" : "Masukkan Lebar"
        inputNewToRectangle.id = currentInputR === 0 ? "lengthInput" : "widthInput"

        containerOfRectangle.appendChild(inputNewToRectangle)
        containerOfRectangle.appendChild(document.createElement("br"))
        containerOfRectangle.className = "rectangleContainer"

        currentInputR++
    }
    else {
        const length = parseFloat(document.getElementById("lengthInput").value)
        const width = parseFloat(document.getElementById("widthInput").value)
        if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
            alert('Masukkan Panjang Dan Lebar Yang Valid.')
            return
        }
        const AreaOfRectangle = length * width

        const resultContainerRectangle = document.getElementById("resultContainerRectangle")
        resultContainerRectangle.innerHTML = `Luasnya Adalah : ${AreaOfRectangle.toFixed(2)}`
        resultContainerRectangle.className = "resultContainerRectangle"
    }
}

const maxInputP = 2
let currentInputP = 0

function sumAreaOfParallelogram() {
    const containerOfParallelogram = document.getElementById("inputContainerParallelogram")
    if (currentInputP < maxInputP) {
        const inputNewToParallelogram = document.createElement('input')
        inputNewToParallelogram.type = "number"
        inputNewToParallelogram.placeholder = currentInputP === 0 ? "Masukkan Alas" : "Masukkan Tinggi"
        inputNewToParallelogram.id = currentInputP === 0 ? "basepInput" : "highpInput"

        containerOfParallelogram.appendChild(inputNewToParallelogram)
        containerOfParallelogram.appendChild(document.createElement("br"))
        containerOfParallelogram.className = "parallelogramContainer"

        currentInputP++
    }
    else {
        const basep = parseFloat(document.getElementById("basepInput").value)
        const highp = parseFloat(document.getElementById("highpInput").value)
        if (isNaN(basep) || basep <= 0 || isNaN(highp) || highp <= 0) {
            alert('Masukkan Alas Dan Tinggi Yang Valid.')
            return
        }
        const AreaOfParallelogram = basep * highp

        const resultContainerParallelogram = document.getElementById("resultContainerParallelogram")
        resultContainerParallelogram.innerHTML = `Luasnya Adalah : ${AreaOfParallelogram.toFixed(2)}`
        resultContainerParallelogram.className = "resultContainerParallelogram"
        }
    }
}