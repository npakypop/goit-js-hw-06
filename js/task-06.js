const inputRef = document.querySelector('#validation-input');
const length = inputRef.getAttribute('data-length');


const checkInputLength = (event) => {
    if (inputRef.value.length < length) {
        event.target.classList.add('invalid');
        return;
    } 
    event.target.classList.replace('invalid', 'valid');
};

inputRef.addEventListener("blur", checkInputLength);