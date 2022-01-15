"Use strict"; // директива необходимая для объявления современного режима JS

//CALLBACK ФУНКЦИЯ
// пример работы функции с задержкой
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second(); // мы подразумеваем, что функции выполнятся - одна за другой
// в коде задержка может быть не видна или непредсказуема
// callback - это функция которая должна быть выполнена после выполнения другой функции


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJS("JavaScript", function() { // передаём данные в аргументы функции
    console.log(`Я прошёл этот урок`); // анонимная функция
});
// анонимная функция исчезает после использования


// применение осознанной функции
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log(`Я прошёл этот урок`);
}
learnJS("JavaScript", done); // когда передаётся функция, (), круглые скобки не указываются