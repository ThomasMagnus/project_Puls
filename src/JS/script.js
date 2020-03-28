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
            },

            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
            },

            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
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

  //Modal windows

  $('[data-modal=consultation]').on('click', function(){
    $('.modal, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function(){
    $('.modal, #consultation, #order, #thanks').fadeOut();
  });

  $('.order__btn').each(function(i){
    $(this).on('click', function(){
      $('.order-desc').text($('.content__title').eq(i).text());
      $('.modal, #order').fadeIn('slow');
    })
  });

  function validate(form) {

    $(form).validate({

      rules: {
        name: "required",
        phone: {
          required: true,
          phone: true
        },
        email: {
          required: true,
          email: true
        }
      },
  
      messages: {
        required: "Обязательное поле для ввода",
        email: {
          required: "Пожалуйста, введите электронный адрес",
          email: "Пожалуйста, введите адрес почты в формате example@mail.ru"
        },
        name: "Пожалуйста, введите имя",
        phone: "Пожалуйста, введите номер телефона"
      }
    
    });

  };

  validate('#callBack__form');
  validate('#consultation form');
  validate('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.modal, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

  });

