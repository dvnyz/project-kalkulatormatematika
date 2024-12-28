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
        const areaOfCircle = Math.PI * Math.pow(radius, 2)

        const resultContainerCircle = document.getElementById("resultContainerCircle")
        resultContainerCircle.innerHTML = `Luas Lingkaran Adalah : ${areaOfCircle.toFixed(2)}`
        resultContainerCircle.className = "resultContainerCircle"
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
        resultContainerTriangle.innerHTML = `Luas Segitiga Adalah : ${areaOfTriangle.toFixed(2)}`
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
        resultContainerRectangle.innerHTML = `Luas Persegi Panjang Adalah : ${AreaOfRectangle.toFixed(2)}`
        resultContainerRectangle.className = "resultContainerRectangle"
    }
}