function carWash(input) {
    let percentage = 0;
    for (const item of input) {
        if(item == 'soap'){
            percentage += 10;
        }else if(item == 'water'){
            percentage += percentage * 0.2;
        }else if(item == 'vacuum cleaner'){
            percentage += percentage * 0.25;
        }else{
            percentage -= percentage * 0.10;
        }
    }
    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);