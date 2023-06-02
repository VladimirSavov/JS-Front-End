function charInRange(char1, char2){
    let char1Int = parseInt(char1);
    let output = '';
    if(char1 > char2){
        let diff = Number(char1 - char2);
        for (let i = char2; i < char1; i++) {
            var chr = String.fromCharCode(i);
            output += chr + ' ';
            
        }
    }
    console.log(output);
}

charInRange('e', 'd');