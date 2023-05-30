function calc() {
    // TODO: sum = num1 + num2
    let numOneElement = document.getElementById('num1');
    let numTwoELement = document.getElementById("num2");
    
    let numOne = Number(numOneElement.value);
    let numTwo = Number(numTwoELement.value);
    let sum = numOne + numTwo;
    let result = document.getElementById('sum');
    result.value = sum;
    
}
