(function (){

    // let arrText = document.querySelectorAll(`.title__text`);
    let arrText = document.querySelectorAll(`h4`);

    for(i = 0; i < arrText.length; i++){
        let inSpan = arrText[i].innerText.split('').map(function(symb){
            return `<span class="span__title" data-text="${symb}">${symb}</span>`;
        });
        arrText[i].innerHTML = inSpan.join('');
    }

}());


// Функция анимации для букв
document.querySelectorAll(`.span__title`).forEach(function(element){
    element.onmouseenter = spanAddStyle;
});

function spanAddStyle() {
    this.classList.add(`span__title-active`);
    setTimeout(function () {
        document.querySelectorAll(`.span__title`).forEach(function(element){
            element.classList.remove(`span__title-active`);
        })
    }, 800);
};

// Анимация волны кнопки
let links = document.querySelectorAll("button");
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function (event) {
        event.preventDefault();

        // Remove any old one
        let ripple = document.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }

        // Setup
        let buttonWidth = this.offsetWidth,
            buttonHeight = this.offsetHeight;

        // Make it round!
        if(buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        let x = event.offsetX==undefined?event.layerX:event.offsetX - buttonWidth / 2,
            y = event.offsetY==undefined?event.layerY:event.offsetY - buttonHeight / 2;

        // Add the element
        let span = document.createElement('span');
        span.className = 'ripple';
        s = span.style;
        s.width = buttonWidth + 'px';
        s.height = buttonHeight + 'px';
        s.top = y + 'px';
        s.left = x + 'px';
        this.appendChild(span);
    });
}