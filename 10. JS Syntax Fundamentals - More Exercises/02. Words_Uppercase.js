function wordsUppercase(input) {
    let word = '';
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if(input[i] !== ',' && input[i] !== '!' && input[i] !== '?' && input[i] != ' '){
                word += input[i];
        }else if(word != ''){
            if(input[i] !== '!' && input[i] !== '?')
            output += word.toUpperCase() + ', ';
            word = '';
        }
        
    }
    console.log(output);
}

wordsUppercase('Hi, how are you?');