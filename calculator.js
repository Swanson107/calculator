

// clear
function clearDisplay() {
    display.textContent = 0;
    display.style.fontSize = '4.5rem';
    display.style.marginTop = '4rem';
    firstNumIn = false;
    firstNum = 0;
}
const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', clearDisplay);


// delete
function deleteNum() {
    str = String(display.textContent);
    str = str.slice(0, str.length - 1);
    display.textContent = parseFloat(str);
    if (str === '' || str === '-') {
        console.log('Display Empty');
        display.textContent = 0;
        return;
    }
    console.log(str);

}
const deleteKey = document.getElementById('delete');
deleteKey.addEventListener('click', deleteNum);

// number hit
function numKeyHit() {
    const num = this.textContent;
    if (display.textContent.length > 22) {
        display.textContent = display.textContent;
    } else if (display.textContent.length > 13) {
        display.style.fontSize = '3rem';
        display.style.marginTop = '6rem';
        display.textContent += parseFloat(num);

    } else if (display.textContent == 0){
        display.style.fontSize = '4.5rem';
        display.style.marginTop = '4rem';
        display.textContent = num;
    } else {
        display.textContent += parseFloat(num);
    }

}

// decimal
function decimal() {
    if (display.textContent != 0 && display.textContent.includes('.') == false)  {
        numBack = parseFloat(display.textContent);
        display.textContent = display.textContent + '.';
        return numBack;
    }
}

const dot = document.getElementById('dot');
dot.addEventListener('click', decimal);
const display = document.getElementById("display");
display.textContent = 0; // init keypad

// nums
const numKeypad = document.querySelectorAll('.num');
for (const node of numKeypad) { 
    node.addEventListener('click', numKeyHit);
}

// set nums for operation

let firstNum = 0;
let firstNumIn = false;
let secondNum = 0;
let result = 0;

let adding = false;
let subtracting = false;
let multiplying = false;

// events for operations

const plus = document.getElementById('add');
plus.addEventListener('click', readyAdd);

const minus = document.getElementById('subtract');
minus.addEventListener('click', readySub);

const times = document.getElementById('multiply');
times.addEventListener('click', readyTimes);

const division = document.getElementById('divide');
division.addEventListener('click', readyDivide);

const doMath = document.getElementById('equals');
doMath.addEventListener('click', equals);


// operations
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;

}

function readyAdd() {
    if (firstNumIn === false && display.textContent != 0){
        firstNum = parseFloat(display.textContent);
        firstNumIn = true;
        adding = true;
        display.textContent = 0;
    }
}

function readySub() {
    if (firstNumIn === false && display.textContent != 0) {
        firstNum = parseFloat(display.textContent);
        firstNumIn = true;
        subtracting = true;
        display.textContent = 0;
    }
}

function readyTimes() {
    if (firstNumIn === false && display.textContent != 0) {
        firstNum = parseFloat(display.textContent);
        firstNumIn = true;
        multiplying = true;
        display.textContent = 0;
    }
}


function readyDivide() {
    if (firstNumIn === false && display.textContent != 0) {
        firstNum = parseFloat(display.textContent);
        firstNumIn = true;
        dividing = true;
        display.textContent = 0;
    }
}


function equals() {
    if (firstNumIn === true) {
        secondNum = parseFloat(display.textContent);
        if (secondNum === 0 && dividing === true){
            display.textContent = 'Nice try. You can\'t divide by 0';
        } else if (adding === true) {
            result = parseFloat(add(firstNum, secondNum)).toFixed(2);
            display.textContent = result;
            adding = false;
            firstNumIn = false;
        } else if (subtracting === true) {
            result = parseFloat(subtract(firstNum, secondNum)).toFixed(2);
            display.textContent = result;
            subtracting = false;
            firstNumIn = false;
        } else if (multiplying === true) {
            result = parseFloat(multiply(firstNum, secondNum)).toFixed(2);
            display.textContent = result;
            multiplying = false;
            firstNumIn = false;
        } else if (dividing === true) {
            result = parseFloat(divide(firstNum, secondNum)).toFixed(2);
            display.textContent = result;
            dividing = false;
            firstNumIn = false;
        }
        if (display.textContent.length > 18){ // shrink result if too long
            display.style.fontSize = '3rem';
            display.style.marginTop = '6rem';
        }

    }
}

