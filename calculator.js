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
const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.textContent = 0;
}

// delete
const deleteKey = document.getElementById('delete');
deleteKey.addEventListener('click', deleteNum);

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

// number hit
function numKeyHit() {
    const num = this.textContent;
    console.log('key: ' + num);
    if (display.textContent == 0){
        display.textContent = num;
    } else {
        display.textContent += parseFloat(num);
    }
}


// decimal
function decimal() {
    if (display.textContent != 0 && display.textContent.includes('.') == false)  {
        numBack = parseInt(display.textContent);
        display.textContent = display.textContent + '.0';
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