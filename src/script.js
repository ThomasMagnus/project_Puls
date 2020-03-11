$(document).ready(function(){
    $('.slider__courusel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });