function sum(num1, num2, num3){
    
    let sum = num1 + num2;
    function subtract(sum, num3) {
        sum -= num3;
        console.log(sum);
    }
    subtract(sum, num3)
 
}
sum(23, 6, 10);