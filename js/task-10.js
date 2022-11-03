function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
  if (createBoxes().length < 1 || createBoxes().length > 100) { 
    alert('Enter correct number');
  }
  boxesRef.append(...createBoxes());
}

function onDestroyBtn() { 
  boxesRef.innerHTML = '';
  amountRef.value = '';
}

function onAmountInput(event) { 
  return event.target.value;
}

function createBoxes(amount) {
  amount = amountRef.value;
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    arr.push(document.createElement('div'));
  }
  return arr;
}


// boxesRef.append(...arr);
  // console.log("amount", amount)
  // const arr = new Array(5);
  // arr.forEach(el => {
  //   el = document.createElement('div');
  // })
