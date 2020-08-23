let innerFront = document.querySelectorAll('.inner-front');

for(let i = 0; i < innerFront.length; i++) {
    innerFront[i].onclick = () => false;
}