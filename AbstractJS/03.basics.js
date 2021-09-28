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