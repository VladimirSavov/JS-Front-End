class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    };
}
function cats(input) {
    
    for (const item of input) {
        let input = item.split(' ');
        let cat = new Cat(input[0], parseInt(input[1]));
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'] )