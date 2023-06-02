function numModification(number) {
    let originalNum = String(number);
    let averageNum = 0;
    let currNum = 0;
    let count = 0;
    while (averageNum < 5) {
        averageNum = 0;
        let num = parseInt(originalNum);
        while (num > 0.9) {
            num = parseInt(num);
            currNum = num % 10;
            averageNum += currNum;
            num /= 10;
            count++;
        }
        averageNum = averageNum / count;
        count = 0;
        if(averageNum < 5){
            originalNum += 9;
        }
    }
    console.log(originalNum);
}

numModification(101);