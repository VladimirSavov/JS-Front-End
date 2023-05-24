function solve(number){
    let sum = 0;
    let n = 0;
    while(number / 10 < 1){
        n = number % 10;
        sum += n;
        number /= 10;
    }
    console.log(sum);
}