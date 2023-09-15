const mainElement = document.querySelector('#main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.querySelector('h1#victory');
if (newHeader) {
  newHeader.textContent = 'VALENCIA-WALKER is the champion';
}