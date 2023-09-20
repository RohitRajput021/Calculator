// Get references to the elements
const displayScreen = document.getElementById('display-screen');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalButton = document.querySelector('.equal');

// Initialize the current input
let currentInput = '';

// Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent);
    });
});

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(' ' + button.textContent + ' ');
    });
});

// Add event listener for clear button
clearButton.addEventListener('click', () => {
    clearDisplay();
});

// Add event listener for equal button
equalButton.addEventListener('click', () => {
    calculateResult();
});

function appendToDisplay(value) {
    currentInput += value;
    displayScreen.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    displayScreen.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        displayScreen.value = result;
        currentInput = result.toString();
    } catch (error) {
        displayScreen.value = 'Error';
        currentInput = '';
    }
}
