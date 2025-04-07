// Utility functions
const showLoading = (button) => {
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Menghitung...';
    button.disabled = true;
};

const resetButton = (button, text) => {
    button.innerHTML = `<i class="fas fa-play"></i> ${text}`;
    button.disabled = false;
};

const showError = (container, message) => {
    container.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    container.style.color = '#f72585';
    container.style.animation = 'shake 0.5s ease';
    setTimeout(() => container.style.animation = '', 500);
};

const showResult = (container, result) => {
    container.innerHTML = `<i class="fas fa-check-circle"></i> Luas: <strong>${result}</strong>`;
    container.style.color = '#4cc9f0';
    container.style.animation = 'fadeIn 0.5s ease';
};

// Circle Calculator
function sumAreaOfCircle() {
    const button = document.querySelector('.calculator-card:nth-child(1) button');
    const container = document.getElementById("inputContainerCircle");
    const resultContainer = document.getElementById("resultContainerCircle");
    const shape = 'circle';
    const maxInput = 1;
    
    showLoading(button);

    if (calculatorState[shape].currentStep < maxInput) {
        setTimeout(() => {
            container.innerHTML = '';
            const input = document.createElement("input");
            input.type = "number";
            input.placeholder = "Masukkan Jari Jari";
            input.className = "input-field";
            input.min = "0.01";
            input.step = "any";
            input.oninput = () => calculatorState[shape].inputs[0] = parseFloat(input.value);

            container.appendChild(input);
            resetButton(button, 'Hitung');
            calculatorState[shape].currentStep++;
        }, 300);
    } else {
        setTimeout(() => {
            const radius = calculatorState[shape].inputs[0];

            if (!calculatorState[shape].inputs[0] || isNaN(radius) || radius <= 0) {
                showError(resultContainer, 'Masukkan Jari Jari Yang Valid.');
                resetButton(button, 'Hitung');
                return;
            }

            const areaOfCircle = Math.PI * Math.pow(radius, 2);
            showResult(resultContainer, areaOfCircle.toFixed(2));
            addToHistory(shape, areaOfCircle.toFixed(2));
            resetButton(button, 'Hitung Ulang');
            resetCalculator(shape);
        }, 300);
    }
}

// Triangle Calculator
function sumAreaOfTriangle() {
    const button = document.querySelector('.calculator-card:nth-child(2) button');
    const container = document.getElementById("inputContainerTriangle");
    const resultContainer = document.getElementById("resultContainerTriangle");
    const shape = 'triangle';
    
    showLoading(button);
    container.innerHTML = '';

    // Create both input fields immediately
    const baseInput = document.createElement("input");
    baseInput.type = "number";
    baseInput.placeholder = "Masukkan Alas";
    baseInput.className = "input-field";
    baseInput.min = "0.01";
    baseInput.step = "any";
    baseInput.oninput = () => calculatorState[shape].inputs[0] = parseFloat(baseInput.value);

    const heightInput = document.createElement("input");
    heightInput.type = "number";
    heightInput.placeholder = "Masukkan Tinggi";
    heightInput.className = "input-field";
    heightInput.min = "0.01";
    heightInput.step = "any";
    heightInput.oninput = () => calculatorState[shape].inputs[1] = parseFloat(heightInput.value);

    container.appendChild(baseInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(heightInput);
    resetButton(button, 'Hitung');

    // Calculate when button is clicked again
    setTimeout(() => {
        const [base, height] = calculatorState[shape].inputs;

        if (!calculatorState[shape].inputs[0] || !calculatorState[shape].inputs[1] || 
            isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
            showError(resultContainer, 'Masukkan Alas Dan Tinggi Yang Valid.');
            resetButton(button, 'Hitung');
            return;
        }

        const areaOfTriangle = (base * height) / 2;
        showResult(resultContainer, areaOfTriangle.toFixed(2));
        addToHistory(shape, areaOfTriangle.toFixed(2));
        resetButton(button, 'Hitung Ulang');
        resetCalculator(shape);
    }, 300);
}

// Rectangle Calculator
function sumAreaOfRectangle() {
    const button = document.querySelector('.calculator-card:nth-child(3) button');
    const container = document.getElementById("inputContainerRectangle");
    const resultContainer = document.getElementById("resultContainerRectangle");
    const shape = 'rectangle';
    
    showLoading(button);
    container.innerHTML = '';

    // Create both input fields immediately
    const lengthInput = document.createElement("input");
    lengthInput.type = "number";
    lengthInput.placeholder = "Masukkan Panjang";
    lengthInput.className = "input-field";
    lengthInput.min = "0.01";
    lengthInput.step = "any";
    lengthInput.oninput = () => calculatorState[shape].inputs[0] = parseFloat(lengthInput.value);

    const widthInput = document.createElement("input");
    widthInput.type = "number";
    widthInput.placeholder = "Masukkan Lebar";
    widthInput.className = "input-field";
    widthInput.min = "0.01";
    widthInput.step = "any";
    widthInput.oninput = () => calculatorState[shape].inputs[1] = parseFloat(widthInput.value);

    container.appendChild(lengthInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(widthInput);
    resetButton(button, 'Hitung');

    // Calculate when button is clicked again
    setTimeout(() => {
        const [length, width] = calculatorState[shape].inputs;

        if (!calculatorState[shape].inputs[0] || !calculatorState[shape].inputs[1] || 
            isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
            showError(resultContainer, 'Masukkan Panjang Dan Lebar Yang Valid.');
            resetButton(button, 'Hitung');
            return;
        }

        const areaOfRectangle = length * width;
        showResult(resultContainer, areaOfRectangle.toFixed(2));
        addToHistory(shape, areaOfRectangle.toFixed(2));
        resetButton(button, 'Hitung Ulang');
        resetCalculator(shape);
    }, 300);
}

// Parallelogram Calculator
function sumAreaOfParallelogram() {
    const button = document.querySelector('.calculator-card:nth-child(4) button');
    const container = document.getElementById("inputContainerParallelogram");
    const resultContainer = document.getElementById("resultContainerParallelogram");
    const shape = 'parallelogram';
    
    showLoading(button);
    container.innerHTML = '';

    // Create both input fields immediately
    const baseInput = document.createElement("input");
    baseInput.type = "number";
    baseInput.placeholder = "Masukkan Alas";
    baseInput.className = "input-field";
    baseInput.min = "0.01";
    baseInput.step = "any";
    baseInput.oninput = () => calculatorState[shape].inputs[0] = parseFloat(baseInput.value);

    const heightInput = document.createElement("input");
    heightInput.type = "number";
    heightInput.placeholder = "Masukkan Tinggi";
    heightInput.className = "input-field";
    heightInput.min = "0.01";
    heightInput.step = "any";
    heightInput.oninput = () => calculatorState[shape].inputs[1] = parseFloat(heightInput.value);

    container.appendChild(baseInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(heightInput);
    resetButton(button, 'Hitung');

    // Calculate when button is clicked again
    setTimeout(() => {
        const [base, height] = calculatorState[shape].inputs;

            if (!calculatorState[shape].inputs[0] || !calculatorState[shape].inputs[1] || 
                isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
                showError(resultContainer, 'Masukkan Alas Dan Tinggi Yang Valid.');
                resetButton(button, 'Hitung');
                return;
            }

        const areaOfParallelogram = base * height;
        showResult(resultContainer, areaOfParallelogram.toFixed(2));
        addToHistory(shape, areaOfParallelogram.toFixed(2));
        resetButton(button, 'Hitung Ulang');
        resetCalculator(shape);
    }, 300);
}

// Reset calculator state for a shape
function resetCalculator(shape) {
    calculatorState[shape] = { 
        inputs: [], 
        currentStep: 0, 
        calculated: false 
    };
}

// Initialize calculator state
let calculatorState = {
  circle: { inputs: [], currentStep: 0, calculated: false },
  triangle: { inputs: [], currentStep: 0, calculated: false },
  rectangle: { inputs: [], currentStep: 0, calculated: false },
  parallelogram: { inputs: [], currentStep: 0, calculated: false }
};


// Add CSS keyframes for animations
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}
`;
document.head.appendChild(style);

// Add history feature
const calculationHistory = [];
const historyContainer = document.createElement('div');
historyContainer.id = 'history-container';
historyContainer.innerHTML = `
    <h3><i class="fas fa-history"></i> Riwayat Perhitungan</h3>
    <div id="history-list"></div>
`;
document.querySelector('main').appendChild(historyContainer);

function addToHistory(shape, result) {
    const historyItem = {
        shape,
        result,
        timestamp: new Date().toLocaleTimeString()
    };
    calculationHistory.unshift(historyItem);
    updateHistoryDisplay();
    
    // Add to each calculator's result display
    const shapeNames = {
        'circle': 'Lingkaran',
        'triangle': 'Segitiga', 
        'rectangle': 'Persegi Panjang',
        'parallelogram': 'Jajar Genjang'
    };
    
    const resultContainer = document.getElementById(`resultContainer${shape.charAt(0).toUpperCase() + shape.slice(1)}`);
    if (resultContainer) {
        resultContainer.innerHTML += `
            <div class="history-item">
                <small>${historyItem.timestamp}: ${shapeNames[shape]} = ${result}</small>
            </div>
        `;
    }
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    
    historyList.innerHTML = calculationHistory.slice(0, 5).map(item => `
        <div class="history-item">
            <i class="fas fa-${item.shape}"></i>
            <span>${item.timestamp}: ${item.result}</span>
        </div>
    `).join('');
}

// Add history styles
const historyStyles = document.createElement('style');
historyStyles.textContent = `
#history-container {
    grid-column: 1 / -1;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-top: 2rem;
}

#history-container h3 {
    color: var(--accent);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.history-item {
    padding: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.history-item i {
    color: var(--accent);
    width: 1.2rem;
}

.history-item:last-child {
    border-bottom: none;
}
`;
document.head.appendChild(historyStyles);
