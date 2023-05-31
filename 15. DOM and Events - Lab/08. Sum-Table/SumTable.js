function sumTable() {
    let InputData = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = 0;
    let outputData = document.getElementById('sum');
    for (let i = 0; i < InputData.length - 1; i++) {
         sum += Number(InputData[i].textContent);
        
    }
    outputData.textContent = sum;
}