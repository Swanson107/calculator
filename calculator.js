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
        return 'nice try';
    } else {
        return n1 / n2;
    }
}

function keyHit() {

    const num = this.textContent;
    console.log('key: ' + num);
    if (display.textContent == 0){
        display.textContent = num;
    } else {
        display.textContent += parseInt(num);
    }
}

const display = document.getElementById("display");
display.textContent = 0;


const numKeypad = document.querySelectorAll('.num');
for (const node of numKeypad) {
    node.addEventListener('click', keyHit);
}