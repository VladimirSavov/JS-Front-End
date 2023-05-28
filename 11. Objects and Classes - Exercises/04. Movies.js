function solve(input){
    let obj = {};
    let nameOfDirector = '';
    for (let i = 0; i < input.length; i++) {
        let array = input[i].split(' ');
        if(array[0] === "addMovie"){
            obj.name = array[1];
        }
        if(obj.name && array[1] === "directedBy"){
            for (let i = 2; i < array.length; i++) {
                nameOfDirector += array[i];
                obj.director = nameOfDirector;
            }
        }
        if(obj[name] === array[0] && array[1] === "onDate"){
            obj.date = array[2];
        }      
    }
    for (const iterator in obj) {
        console.log(iterator);
    }
}


solve([ 
    'addMovie Fast and Furious', 
    'addMovie Godfather', 
    'Inception directedBy Christopher Nolan', 
    'Godfather directedBy Francis Ford Coppola', 
    'Godfather onDate 29.07.2018', 
    'Fast and Furious onDate 30.07.2018', 
    'Batman onDate 01.08.2018', 
    'Fast and Furious directedBy Rob Cohen' 
    ] 
    );