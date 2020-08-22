const OUT_MESSAGE = document.querySelector('.contact__wrap');

const FORM = document.querySelector('form');

const NAME = FORM["user-name"];
const PHONE = FORM["user-phone"];
const EMAIL = FORM["user-email"];
const MESSAGE = FORM["user-message"];
const SUBMIT = FORM["submit-btn"];

const checkEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;


const CHECK_Email = function(){
    // console.log(this)
    // console.log(EMAIL.value)
    if(checkEmail.test(EMAIL.value.trim())){
        // console.log('+');
        this.style.borderBottom = '2px solid #00c853';
    } else {
        // console.log('-')
        this.style.borderBottom = '2px solid #bf360c';
        
        // border-bottom: 2px solid #000;
    }
}

EMAIL.oninput = CHECK_Email

// Так себе проверка
const CHECK_Name = function() {

    if(NAME.value.trim().length >= 2){
        // console.log('+');
        this.style.borderBottom = '2px solid #00c853';
    } else {
        // console.log('-')
        this.style.borderBottom = '2px solid #bf360c';
    }
}

NAME.oninput = CHECK_Name


const FUNC_CHECK = function () {
    if(NAME.value.trim().length >= 2 && EMAIL.value.trim() !== '' && MESSAGE.value.trim() !== ''){
        
        // console.log('+');
        sendFormFunc();
    } else {
        alert('Заполните поля')
    }
}

SUBMIT.onclick = FUNC_CHECK;

// console.log(FORM.elements);


// Отправка формы
const sendFormFunc = () => {
    fetch('telegram.php', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        'body': `user_name=${NAME.value.trim()}&user_email=${EMAIL.value.trim()}&user_phone=${PHONE.value.trim()}&user_message=${MESSAGE.value.trim()}`
        
    })
    .then((data) => data.text())
    .then((data) => {
        // console.log(data);
        if(data === 'Good') createMessage();
        if(data === 'Error') errorMessage();
    })
    // .then(function () {window.location.href = index.html})
}

const createMessage = () => {
    let box = document.createElement('span');
    box.classList.add('send-box');
    box.innerHTML = `Спасибо<br>${NAME.value.trim()}<br>Ваше сообщение отправлено`;

    OUT_MESSAGE.append(box);
    setTimeout(()=>{
        clearValue();
        box.remove();
    }, 3000)
};

const errorMessage = () => {
    let box = document.createElement('span');
    box.classList.add('send-box');
    box.innerHTML = `${NAME.value.trim()}<br>что-то пошло не так`;

    OUT_MESSAGE.append(box);
    setTimeout(()=>{
        clearValue();
        box.remove();
    }, 3000)
};

const clearValue = () => {
    NAME.value = '';
    NAME.style.borderBottomColor = '#000';
    PHONE.value = '';
    EMAIL.value = '';
    EMAIL.style.borderBottomColor = '#000';
    MESSAGE.value = '';
}