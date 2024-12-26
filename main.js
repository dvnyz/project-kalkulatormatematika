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
        resultContainerCircle.innerHTML = `Jumlah Luas Lingkaran Adalah : ${areaOfCircle.toFixed(2)}`
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
        inputNewToTriangle.placeholder = inputCurrent === 0 ? "Masukkan Alas (a)" : "Masukkan Tinggi (t)"
        inputNewToTriangle.id = inputCurrent === 0 ? "baseInput" : "heightInput"

        containerOfTriangle.appendChild(inputNewToTriangle)
        containerOfTriangle.className = "TriangleContainer"

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
        resultContainerTriangle.innerHTML = `Jumlah Luas Segitiga Adalah : ${areaOfTriangle.toFixed(2)}`
        resultContainerTriangle.className = "resultContainerTriangle"
    }
}
