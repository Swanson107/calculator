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
    if (n2 === 0){
        display.textContent = 'Nice Try';
        return 0;
    } else {
        return n1 / n2;
    }
}

// clear
function clearDisplay() {
    display.textContent = 0;
    display.style.fontSize = '4.5rem';
    display.style.marginTop = '4rem';
}
const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', clearDisplay);


// delete
function deleteNum() {
    str = String(display.textContent);
    str = str.slice(0, str.length - 1);
    display.textContent = parseFloat(str);
    if (str === '') {
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
    } else if (display.textContent.length > 14) {
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
let secondNum = 0;