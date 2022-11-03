
const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubBtn);

function onSubBtn(event){
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === '' || password === '') { 
        alert('ALL fields must be completed');
        return;
    }    
    const formData = {
        email,
        password
    }
    console.log("formData", formData);
    event.target.reset();
    
    //================= Сбор информации со всех полей сразу======================
    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log( name, value);
    // });
    // console.log("formData", formData);
    //===========================================================================
    
}

