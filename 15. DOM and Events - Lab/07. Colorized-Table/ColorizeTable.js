function colorize() {
    colored = document.querySelectorAll('tr:nth-of-type(2n) td');
    colored.forEach(x => {
        x.style.backgroundColor = 'teal';
    });
}