function subtract() {
    let numOneElement = document.getElementById('firstNumber');
    let numTwoElement = document.getElementById('secondNumber');
    let numOne = numOneElement.value;
    let numTwo = numTwoElement.value;
    let subtract = numOne - numTwo;
    let output = document.getElementById('result');
    output.textContent = subtract;
}