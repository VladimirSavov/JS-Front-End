function solve(input){
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let output = input[i].split(' | ');
        let town = output[0];
        let latitude = parseFloat(output[1]).toFixed(2);
        let longitude = parseFloat(output[2]).toFixed(2);
        obj = {
            'town': town,
            'latitude': latitude,
            'longitude': longitude
        }
        console.log(obj);
    }
}