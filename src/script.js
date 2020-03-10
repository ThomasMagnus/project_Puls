let arrowLeft = document.querySelector('.slider__btn-left');
let arrowRight = document.querySelector('.slider__btn-right');
let gallery = document.querySelectorAll('.slider__courusel .slider__items img');

let i = 0;

arrowLeft.onclick = function() {
    gallery[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = gallery.length-1;
    }

    gallery[i].style.display = 'block';
}

arrowRight.onclick = function() {
    gallery[i].style.display = 'none';
    i++;

    if (i >= gallery.length) {
        i = 0;
    }

    gallery[i].style.display = 'block';
}