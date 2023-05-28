function solve(input){
    let arraySplit = input.split(" ");
    let wordCount = {};
    let output = '';
    for (let i = 0; i < arraySplit.length; i++) {
        let word = arraySplit[i];
        word = word.toLowerCase(word);
        if(wordCount[word]){
            wordCount[word]++;
        }else{
            wordCount[word] = 1;
        }
    }
    for (const word in wordCount) {
        if(wordCount[word] % 2 != 0){
            output += word + ' ';
        }
    }
    console.log(output);
}


solve('Cake IS SWEET is Soft CAKE sweet Food');