// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const titleSpanRef = document.querySelector('.color');


btnRef.addEventListener('click', onBtn);

function onBtn() { 
  const color = `${getRandomHexColor()}`
  bodyRef.style.backgroundColor = color;
  titleSpanRef.textContent = color;
}