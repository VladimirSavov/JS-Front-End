function loadingBar(num) {
    let numOutput = num;
    num /= 10;
    num = parseInt(num);
    let bar = '';
    for (let i = 0; i < 10; i++) {
        if(num != 0){
            bar += '%'; 
            num--;
        }else{
            bar += '.';
        }
    }
    if(numOutput != 100 && numOutput != ''){
        console.log(`${numOutput}% [${bar}]`);
        console.log(`Still loading...`);
    }
    if(numOutput == 100){
        console.log(`100% Complete!`);
        console.log('[%%%%%%%%%%]');
    }
    if(numOutput == ''){
        console.log('[%%%%%%%%%%]');
    }
}

loadingBar(100);