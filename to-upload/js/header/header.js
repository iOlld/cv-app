const header = document.querySelector('.header');
const headerWrap = document.querySelector('.header__wrap');
const navList = document.querySelector('.header__ul');
const link = document.querySelectorAll('.header__link');
const burger = document.querySelector('.header__burger');

// для меню при скролле
window.addEventListener('scroll', () => {
    if(pageYOffset > header.offsetHeight) {
        header.classList.add('header__scroll');
        headerWrap.classList.add('header-wrap__scroll');
    } else {
        header.classList.remove('header__scroll');
        headerWrap.classList.remove('header-wrap__scroll');
    }
});

// для кнопки меню в адаптиве
burger.onclick = function () {
    this.classList.toggle('is__active')
    if(this.classList.contains('is__active')){
        navList.classList.add('adaptive__menu');
        header.style.overflow = 'unset';
    } else{
        navList.classList.remove('adaptive__menu');
        header.style.overflow = 'hidden';
    }
}

// для скрытия меню после нажатия на выбранный пункт
for(let i = 0; i < link.length; i++){
    link[i].onclick = () => {
        navList.classList.remove('adaptive__menu');
        header.style.overflow = 'hidden';
        burger.classList.remove('is__active')
    }
}