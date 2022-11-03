const inputRef = document.querySelector('#name-input');
const titleRef = document.querySelector('#name-output');


const typingNameHandler = (event) => {
    titleRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') { 
        titleRef.textContent = 'Anonymous';
    }
}

inputRef.addEventListener('input', typingNameHandler);
