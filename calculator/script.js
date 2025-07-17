const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");
let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;
const updateDisplay = () => {display.value = displayValue;}
const inputNumber = (number) => {
    if(waitingForSecondValue){displayValue = number;waitingForSecondValue=false;}else{
        displayValue = displayValue === '0' ? number : displayValue + number;}
    }
const inputDecimal = () => {
    if(!displayValue.includes(".")){displayValue += "."}
}
const calculate = (first, second, operator) => {
    if(operator === "+"){return first + second}
    else if(operator === "-"){return first - second}
    else if(operator === "*"){return first * second}
    else if(operator === "/"){return first / second}
    return second;
}
const handleOperators = (op) => {
    const value = parseFloat(displayValue);
    if(operator && waitingForSecondValue){operator = op; return;}
    if(firstValue === null){firstValue = value}else if(operator){const result = calculate(firstValue, value, operator); displayValue = `${parseFloat(result.toFixed(7))}`;
    firstValue = result;}
    waitingForSecondValue = true;
    operator = op;
}
const clear = () => {displayValue = "0";}
updateDisplay();
keys.addEventListener("click", (e) => {
    const element = e.target;
    const value = element.value;
    if(!element.matches("button")) return;
    switch(value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperators(value);
            break;
        case 'clear':
            clear();
            break;
        case '.':
            inputDecimal();
            break;
        default:
            inputNumber(element.value);
    }
    updateDisplay();
});
