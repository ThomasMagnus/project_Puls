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
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.content').eq(i).toggleClass('content__active');
              $('.catalog__wrapper__list-items').eq(i).toggleClass('list-items-active');
          })
      });
  };

  toggleSlide('.content__animation');
  toggleSlide('.catalog-item__back');

    $('ul.catalog__list').on('click', 'li:not(.catalog__items-active)', function() {
      $(this)
        .addClass('catalog__items-active').siblings().removeClass('catalog__items-active')
        .closest('div.container').find('div.catalog__flex').removeClass('catalog__flex_active').eq($(this).index()).addClass('catalog__flex_active');
  });

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