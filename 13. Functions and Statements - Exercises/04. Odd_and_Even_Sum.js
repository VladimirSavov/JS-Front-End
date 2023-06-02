function sum(input){
    let sumEven = 0;
    let sumOdd = 0;
    while(input > 0){
        input = parseInt(input);
        let currDigit = input % 10;
        if(currDigit % 2 == 0){
            sumEven += currDigit;
        }else{
            sumOdd += currDigit;
        }
        input /= 10;
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
sum(3495892137259234);