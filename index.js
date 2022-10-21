// Write your code here!
const main = document.getElementById("main");
main.remove();

const newEl=document.querySelector('body');
const newHeader = document.createElement('h1')

newHeader.id="victory";
newHeader.textContent='Naji is the champion';

newEl.append(newHeader);