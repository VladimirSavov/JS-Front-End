function solve(arr){
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
            output[i] = Math.min(arr);
            console.log(Math.min(arr));
            arr.shift(output[i]);
        }else{
            output[i] = Math.max(arr);
            arr.shift(output[i]);
        }
    }
    console.log(output.join(", "))
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
