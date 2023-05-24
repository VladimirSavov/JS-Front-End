function solve(fruit, weight, price){
    let weightKG = weight / 1000;
    console.log(`I need $${(weightKG * price).toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}