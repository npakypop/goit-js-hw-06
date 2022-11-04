// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const amountRef = document.querySelector('#controls>input');
const boxesRef = document.querySelector('#boxes');
// console.log("amountRef", amountRef);
// console.log("dextroyRef", destroyRef);
// console.log("createRef", createRef);

createRef.addEventListener('click', onCreatBtn);
destroyRef.addEventListener('click', onDestroyBtn);
amountRef.addEventListener('input', onAmountInput);

function onCreatBtn() { 
  boxesRef.innerHTML = '';
  if (createBoxes().length < 1 || createBoxes().length > 100) { 
    alert('Enter correct number');
    return;
  }
  boxesRef.append(...createBoxes());
  amountRef.value = '';
}

function onDestroyBtn() { 
  boxesRef.innerHTML = '';
}

function onAmountInput(event) { 
  return event.target.value;
}

function createBoxes(amount) {
  amount = amountRef.value;
  const arr = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.style.width = `${width += 10}px`;
    item.style.height = `${height += 10}px`;
    item.style.backgroundColor = `${getRandomHexColor()}`;
    arr.push(item);
  }
  return arr;
}