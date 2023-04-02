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

function buttonGo() {
    const num = this.textContent;
    console.log(num);

}

const display = document.getElementById("display");
display.textContent = 0;


const keypad = document.querySelectorAll('.button');
for (const node of keypad) {
    node.addEventListener('click', buttonGo);
}