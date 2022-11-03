function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const titleSpanRef = document.querySelector('.color');


btnRef.addEventListener('click', onBtn);

function onBtn() { 
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  titleSpanRef.textContent = `${getRandomHexColor()}`;
}