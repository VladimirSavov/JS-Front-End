function solve(a, b, operator) {
    const operations = {
        'multiply' : (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    };
    const operation = operations[operator];
    console.log(operation(a, b));
}