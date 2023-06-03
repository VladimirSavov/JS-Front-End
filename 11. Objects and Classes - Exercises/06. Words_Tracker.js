function solve(arrayWords){
    let obj = {}
    let arrOfKeyWords = arrayWords[0].split(" ");
    
    for (let i = 0; i < arrayWords.length; i++) {
        for (let h = 0; h < arrOfKeyWords.length; h++) {
            if(arrayWords[i] === arrOfKeyWords[h]){
                if(obj[arrayWords[i]]){
                    obj[arrayWords[i]]++;
                }else{
                    obj[arrayWords[i]] = 1;
                }
            }
            
        }
        
    }
    const sortedWords = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}

solve([ 
    'this sentence',  
    'In', 'this', 'sentence', 'you', 'have', 
    'to', 'count', 'the', 'occurrences', 'of', 
    'the', 'words', 'this', 'and', 'sentence', 
    'because', 'this', 'is', 'your', 'task' 
    ] 
    );