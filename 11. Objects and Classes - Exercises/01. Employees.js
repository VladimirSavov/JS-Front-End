function solve(input){
    for (let i = 0; i < input.length; i++) {
        let number = input[i].length;
        console.log(`Name: ${input[i]} -- Personal Number: ${number}`);
    }
}

solve([ 
'Silas Butler', 
'Adnaan Buckley', 
'Juan Peterson', 
'Brendan Villarreal' 
] 
)