function addItem() {
    textInputElement = document.getElementById('newItemText');
    itemsElement = document.getElementById('items');
    liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;

    deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);
}