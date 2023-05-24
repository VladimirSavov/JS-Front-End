const rotate = (arr, count = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
}
function solve(arr, num){
    
    console.log(rotate(arr, num));
}