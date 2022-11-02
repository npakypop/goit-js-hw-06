let counterValue = 0;

const decBtnRef = document.querySelector('button[data-action = "decrement"]');
const incBtnRef = document.querySelector('button[data-action = "increment"]');
const counterRef = document.querySelector('#value'); 


const onDecBtnClick = () => {
    counterValue -= 1
    counterRef.textContent = counterValue;
};

const onIncBtnClick = () => { 
    counterValue += 1;
    counterRef.textContent = counterValue;
};

decBtnRef.addEventListener('click', onDecBtnClick);
incBtnRef.addEventListener('click', onIncBtnClick);

