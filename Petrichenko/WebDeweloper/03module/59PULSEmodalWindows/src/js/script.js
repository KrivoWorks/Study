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

    // табы
    // https://denis-creative.com/jquery-tabs/
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        // 'li:not нажимаем на элемент у которого нет класса .catalog__tab_active
        $(this) // this ссылается на тот элемент, на который мы нажали
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        // .addClass - добавить класс табу на который нажали
        // .siblings().removeClass - удалить класс у всех соседних элементов если он присутствует
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        // .closest - найти ближайщий элемент
        // .find - внутри найти блок с классом .catalog__content
        // .removeClass - у элементов которые нашли - удаляем класс .catalog__content_active
        // .eq($(this).index()) - запоминаем номер таба на который нажали, например 2
        // .addClass - определённому контенту под определённым номером добавим класс активности

        // табы можно создать и с помощью bootstrap
    });

    // переключение - подробнее/назад
    $('.test').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
            $('.catalog-item__list').eq(i).toggleClass("catalog-item__list_active");
        })
    })
    // $ получаем все элементы по селектору со страницы
    // each - перебор каждого элемента
    // (this) - ссылаемся на каждый элемент который перебирается
    // .on('Click' - что будет происходить при клике

    // при нажатии на ссылку - браузер переходит по адресу
    // сейчас установлена заглушка, и при нажатии браузер обновляет страницу
    // e.preventDefault() - можем отменить стандартное поведение

    // логическое выражение - получаем класс $('.catalog-item__content')
    // .toggleClass и если клас есть выключаем его, если нет добавляем
    // .toggleClass("catalog-item__content_active") - указываем какой класс добавить/убрать

    // i - Отвечает за номер по порядку

    // добавить кнопку назад можно двумя способами
    // либо всё скопировать и поменять класс на .catalog-item__back
    // или всё уложить в функцию, как сделано ниже

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
                $('.catalog-item__list').eq(i).toggleClass("catalog-item__list_active");
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Модальные окна
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });
    // $ - получить элементы сос страницы
    // [] - чтобы получить по атрибуту

    // проверить получили элементы со страницы или нет можно с помощью .fadeOut()
    // элементы плавно исчезнут со страницы

    // .fadeIn(); - показать элемент
    
    // меняем текст в карточке товара
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        })
    });
});