// для меню при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerWrap = document.querySelector('.header__wrap');

    if(pageYOffset > header.offsetHeight) {
        header.classList.add('header__scroll');
        headerWrap.classList.add('header-wrap__scroll');
    } else {
        header.classList.remove('header__scroll');
        headerWrap.classList.remove('header-wrap__scroll');
    }
});