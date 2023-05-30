function addItem() {
    let inputField = document.getElementById('newItemText');
    let inputValue = inputField.value;

    let list = document.getElementById('items');
    let listItem = document.createElement('li');

    listItem.textContent = inputValue;
    list.appendChild(listItem);

    inputField.value = '';
}