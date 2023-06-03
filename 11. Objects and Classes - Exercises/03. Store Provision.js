function solve(array1, array2){
    let obj = {};
    for (let i = 0; i < array1.length; i+=2) {
        let productName = array1[i];
        let quantity = parseInt(array1[i + 1]);
        obj[productName] = quantity;
    }
    for (let i = 0; i < array2.length; i+=2) {
        let productName = array2[i];
        let quantity = parseInt(array2[i + 1]);
        if(obj[productName]){
            obj[productName] += quantity;
        }else{
            obj[productName] = quantity;
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

solve([ 
    'Chips', '5', 'CocaCola', '9', 'Bananas', 
    '14', 'Pasta', '4', 'Beer', '2' 
    ], 
    [ 
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30' 
    ] 
    )