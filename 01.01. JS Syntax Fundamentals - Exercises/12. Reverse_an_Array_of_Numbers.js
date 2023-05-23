function solve(n, input){
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }
    arr.reverse();
    let output = '';
    for (let h = 0; h < arr.length; h++) {
        output += arr[h] + ' ';
        
    }
    console.log(output);
}