"Use strict";

//СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ
// в мобильных браузерах не происходят события мыши
// в мобильных браузерах есть тапы - косания пальцем или пальцами (мультитач)
// мобильные браузеры хорошо работают со всеми сайтами
// если в десктопной версии установлено событие клика - оно всё равно будет работать в мобильном
// JS под капотом запускает сразу серию событий

// проверка поддержки браузерами событий - caniuse.com

// событий на мобильном браузере - 6 штук и все начинаются со слова touch
// touchstart - срабатывает при касании палельцем элемента
// touchmove - срабатывает когда палец при касании к элементу начинает двигаться
// touchend - выполняется когда палец отрывается от элемента
// touchenter - работает когда при ведении пальцем по экрану, 
// наскальзываем на элемент на котором повешено это событие
// touchleave - противоположное, не когда палец оторвался от экрана 
// а продолжил скользить и ушёл за пределы этого элемента
// touchcancel - возникает когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => { // обработчик событий который запустится после загрузки DOM дерева
// обработчик можно вешать на window или document
    const box = document.querySelector('.box'); // локальная переменная

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// существует 3 главных свойства при работе с сенсорными устройствами
// touches - выдаёт список всех пальцев, которые сейчас взаимодействуют с экраном

const box = document.querySelector('.box'); // глобальная переменная

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log('e.touches');
    });

// targetTouches - выдаёт список всех пальцев, которые взаимодействуют с этим элементом

const boxB = document.querySelector('.box'); // глобальная переменная

    boxB.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log('e.touches');
    });

// chengedTouches - список пальцев которые учавствуют в событии



// пример использования
const boxC = document.querySelector('.box'); // глобальная переменная

    boxC.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); // [0] - обращаемся к 1 пальцу
// .pageX - координаты
    });