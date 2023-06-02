function palindrome(input) {
    for (let i = 0; i < input.length; i++) {
        let oppositeNum = '';
        let currNum = input[i];
        while (currNum > 0.9) {
            currNum = parseInt(currNum);
            let curr = currNum % 10;
            oppositeNum += String(curr);
            currNum /= 10;
        }
        if(input[i] == oppositeNum){
            console.log('true');
        }else{
            console.log('false');
        }
    }
}

palindrome([32,2,232,1010])