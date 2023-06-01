function create(words) {
  let elements = words;
   let contentElement = document.getElementById('content');
   for (let i = 0; i < elements.length; i++) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      let text = document.createTextNode(elements[i]);

      paragraph.appendChild(text);
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener("click", function( ){
        event.target.children[0].style.display = 'inline';
      });
   }

  // Append the div to the content element
  contentElement.appendChild(div);
}