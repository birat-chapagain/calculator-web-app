let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace(/sin\(/g, 'Math.sin((Math.PI/180)*');
        expression = expression.replace(/cos\(/g, 'Math.cos((Math.PI/180)*');
        expression = expression.replace(/tan\(/g, 'Math.tan((Math.PI/180)*');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function log() {
    appendToDisplay('log(');
}

function sin() {
    appendToDisplay('sin(');
}

function cos() {
    appendToDisplay('cos(');
}

function tan() {
    appendToDisplay('tan(');
}

// The exponent functionality is already covered by the '**' operator in JavaScript