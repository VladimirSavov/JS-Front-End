function factorialDivision(numOne, numTwo) {
    let sumNumOne = 1;
    let sumNumTwo = 1;
    for (let i = numOne; i > 0; i--) {
        sumNumOne *= i;
        
    }
    for (let i = numTwo; i > 0; i--) {
        sumNumTwo *= i;
        
    }
    console.log(`${(sumNumOne / sumNumTwo).toFixed(2)}`);
}

factorialDivision(5, 2);