function solve() {
  let text = document.getElementById('input').value;
  let splitSentence = text.split('.').filter(s => s !== '');
  let result = document.getElementById('output');
  while(splitSentence.length > 0){
    let textRaw = splitSentence.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = textRaw;
    result.appendChild(p);
  }
}