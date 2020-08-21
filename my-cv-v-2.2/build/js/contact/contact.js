const FORM = document.querySelector('form');

const NAME = FORM["user-name"];
const PHONE = FORM["user-phone"];
const EMAIL = FORM["user-email"];
const MESSAGE = FORM["user-message"];
const SUBMIT = FORM["submit-btn"];

const checkEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

const CHECK_Email = function(){
    // console.log(this)
    console.log(EMAIL.value)
    if(checkEmail.test(EMAIL.value.trim())){
        console.log('+');
        this.style.borderBottom = '2px solid green';
    } else {
        console.log('-')
        this.style.borderBottom = '2px solid red';
        
        // border-bottom: 2px solid #000;
    }
}

EMAIL.oninput = CHECK_Email


const FUNC_CHECK = function () {
    if(NAME.value.trim().length >= 2 && EMAIL.value.trim() !== '' && MESSAGE.value.trim() !== ''){
        
        console.log('+');
    } else {
        alert('Заполните обязательные поля')
    }
}

SUBMIT.onclick = FUNC_CHECK;

console.log(FORM.elements)