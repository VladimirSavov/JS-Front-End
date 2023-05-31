function deleteByEmail() {
    emailInputElement = document.querySelector('input[name="email"]');
    emailCells = document.querySelectorAll('tr td:nth-of-type(2)');

    emailArray = Array.from(emailCells);
    targetElement = emailArray.find(x => x.textContent == emailInputElement.value);
    targetElement.parentNode.remove();
}