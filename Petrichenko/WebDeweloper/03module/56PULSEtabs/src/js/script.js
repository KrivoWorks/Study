// $ - библиотека jquery

// SlickSlider - https://kenwheeler.github.io/slick/
$(document).ready(function(){
    $('.carousel__inner').slick({
        // infinite: true, - бесконечный слайдер
        // если false - дойдёт до последнего слайда и не будет перелистываться
        // slidesToShow: 2, - сколько слайдов будем показывать
        // slidesToScroll: 1 - сколько слайдов будем перелистывать за одно нажатие
        // dots: true, - кружочки внизу
        speed: 300, // скорость переключения слайда в милисекундах
        // adaptiveHeight: true, высота подстраивается под высоту слайда
        // autoplay: true, - автопереключение слайда
        // autoplaySpeed: 2000, - скорость автопереключения слайда в милисекундах
        // fade: true, - прояление картинки
        // cssEase: 'linear' - прояление картинки равномерное
        // arrows: false - убрать стрелочки

        // настройка стрелочек
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>' - по умолчанию
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.png"></button>',
        // чтобы картинки отображались правильно ../  в начале указывать не нужно
        
        // мобильная адаптация
        responsive: [ // массив данных
            {
                breakpoint: 992, // на каком промежутке будем устанавливать эти правила
                // эти правила работают с низу, от 0 до 992px
                settings: {
                    dots: true,
                    arrows: false
                    // UX механизм отключающий стрелки на маленьких экранах
                }
            }
        ]
    });
});