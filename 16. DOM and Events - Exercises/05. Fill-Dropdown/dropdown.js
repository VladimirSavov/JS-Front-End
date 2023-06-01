function addItem() {
    let newItemTextElement = document.getElementById('newItemValue');
    let newItemValueElement = document.getElementById('newItemValue');
    let output = document.getElementById('menu');

    let createOption = document.createElement('option');
    createOption.textContent = newItemValueElement;
    createOption.appendChild(output);
    newItemTextElement.textContent = '';
    newItemValueElement.textContent = '';
}