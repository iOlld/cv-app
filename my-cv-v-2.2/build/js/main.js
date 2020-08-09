(function (){

    // let arrText = document.querySelectorAll(`.title__text`);
    let arrText = document.querySelectorAll(`h4`);

    for(i = 0; i < arrText.length; i++){
        let inSpan = arrText[i].innerText.split('').map(function(symb){
            return `<span class="span__title" data-text="${symb}">${symb}</span>`
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