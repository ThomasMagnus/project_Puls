$(document).ready(function(){
    $('.slider__courusel').slick({
        speed: 1200,
        // autoplay: true,
        // autoplaySpeed: 2000,
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

    $('.catalog__items').each(function(i) {
      $(this).on('click', function(){
        $('.catalog__items').eq(i).addClass('catalog__items-active').siblings().removeClass('catalog__items-active')
      });
    })

  });

// var slider = tns({
//     container: '.slider__courusel',
//     items: 1,
//     slideBy: 'page',
//     controls: false,
//     nav: false,
//     // autoplay: true,
//     // autoplayButtonOutput: false,
//     // autoplayTimeout: 4000,
//     mouseDrag: true,
//     autoHeight: true
//   });

//   document.querySelector('.slick-prev').onclick = function () {
//     slider.goTo('prev');
//   };

//   document.querySelector('.slick-next').onclick = function () {
//     slider.goTo('next');
//   };