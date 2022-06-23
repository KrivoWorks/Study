"Use strict"; // директива необходимая для объявления современного режима JS

//ФУНКЦИИ
// специальный тип объектов, позволяющий формализовать определённую логику поведения и обработки данных
// объявляем функцию, присваиваем ей название, круглые скобки - для аргументов функции, фигурные скобки
function showFirstMessage() { // внутрь фигурных скобок помещаем действие
    console.log("Hello World!");
} 
showFirstMessage(); // чтобы функция заработала, её необходимо вызвать
// в функции важно имя, внегласное правило: начинаться должно с глагола с припиской названия действия
// функции бывают анонимные 


// аргумент функции
function showFirstMessage(text) {
    console.log(text);
} 
showFirstMessage("Hello World"); // вызываем функцию и передаём в неё аргумент
// аргументов может быть любое количество


// поведение переменных в функции
function showFirstMessage(text) {
    console.log(text);
    let num = 20; // локальная переменная, существует только внутри функции
} 
showFirstMessage("Hello World");
console.log(num); // Ошибка типа данных Null


// использование глобальной переменнной функцией внутри себя
let numB = 10; // глобальная переменная
function showFirstMessage(text) {
    console.log(text);
    numB = 20; // локальная переменная использует глобальную переменную
} 
showFirstMessage("Hello World");
console.log(numB);


// изменение формы записи локальной функции
let numС = 10;
function showFirstMessage(text) {
    console.log(text);
    let numC = 20; // добавляем let (объявляем переменную) в локальной функции
} 
showFirstMessage("Hello World");
console.log(numС); // команда обращаемся к глобальной переменной, тк о существовании локальной не знает


// принцип работы поиска функции
let numD = 10;
function showFirstMessage(text) {
    console.log(text);
    console.log(numD); // функция начинает поиск внутри себя, если не находит, поднимается на уровень выше
}
showFirstMessage("Hello World");



// Оператор return завершает выполнение текущей функции и возвращает её значение
function calc(a, b) {
    return (a + b); // круглые скобки - чтобы сгрупировать это значение
}
console.log(calc(4, 7));

// как только функция увидит Retern - она прекратит своё действие
function calc(a, b) {
    return (a + b);
    console.log("Unreachable code"); // Unreachable code - недостижимый код, который никогда не может быть выполнен
}
console.log(calc(4, 7));

// пример работы Return, две команды консоли
let numC = 10;
function ret () {
    let numC = 20;
    return numC; // return вернул значение переменной 
}
console.log(numC); // команда вывела значение переменной до её возвращения
const anotherNumC = ret(); // функция вернулась и поместилась а переменную
console.log(anotherNumC);


//КЛАССИФИКАЦИЯ ФУНКЦИЙ
// function declaration
// function expression
// стрелочные функции

// function declaration - создаётся до запуска кода. Её можно вызвать до объявления, в любом месте кода
function foo() {
    // код
} // нет ;

// function expression - создаётся только тогда, когда до неё доходит поток кода
const logger = function() {
    console.log("Hello");
}; // нужна ; - из за создания переменной
logger();

// стрелочные функции - не имеет своего контекста вызова. Была добавлена в ES6 в 2015 году
const culcA = (a, b) => (a + b);