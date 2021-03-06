"Use strict"; // директива необходимая для объявления современного режима JS


//УСЛОВИЯ
// if - оператор. В скобочках - условие которое хотим проверить
if (4 == 4) { // в фигурных скобках - что должно случиться, если это условие верно
    console.log("Ok"); // если условие верное, мы в консоль выводим сообщение
} 

if (4 == 6) { // условия превращаяет любой тип данных в булиновый, чтобы проверить правдивость
    console.log("Ok"); 
} else { // else - вторя часть условия
    console.log("Error"); // если условие не верное, в консоль выводится Error
}

if (1) { // условие которое всегда верно
    console.log("Ok"); 
} else {
    console.log("Error");
}

// вложенность условий
const num = 50;

if (num < 49) {
    console.log("Мало");
} else if (num > 100) { // else if - если условие не верное, проверяем ещё одно условие
    console.log("Много");
} else {
    console.log("Ок");
}

// ? единственный тернарный оператор (на текущий момент) в JS
// условие, ? (тернарный оператор), дейсвие если условие верно, оператор, действие если условие не верное
(num === 50) ? console.log("Ок") : console.log("Error");
// тернарный - в его работе участвует 3 элемента
// 4 + 4 - бинарный аргумент, +"4" - унарный аргумент

// switch - модификауия if которая поддерживает сразу несколько проверок и условий
const numB = 60;
switch (numB) { // в switch передаём - что будем проверять
    case 49: // case (директива), значение которое хотим проверить
        console.log("Неверно");
        break; // необходимая запись, которая остановить проверку кода, если выражение верное
    case 100:
        console.log("Неверно");
        break;
    case 60:
        console.log("В точку!");
        break;
    default: // действие выполняемое по умолчанию, если ни одно условие не оказалось верным
        console.log("Не в этот раз");
        break;
} // конструкция switch проверяет на строгое сравнение


//===================================================================


//ЦИКЛЫ
// while (цикл) - пока условие не выполнено, выполнять действие
let numC = 70;
while (numC < 75) { // цикл (условия цикла)
    console.log(numC);
    numC++;
} 

// do - сначала будет произведено действие
let numD = 80;
do { 
    console.log(numD);
    numD++;
}
while (numD < 85);

// for - самый популярный цикл
// let i = 1; - задаём переменную
// i < 8; - условие при котором цикл прекратит свою работу
// i++ - шаг цикла (что будет происходит в каждом повторении цикла)
for (let i = 1; i < 8; i++) {
    console.log(i);
}

let numE = 90;
for (let i = 1; i < 8; i++) {
    console.log(numE);
    numE++;
}

for (let i = 1; i < 0; i++) { // бесконечный цикл
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; // оператор который позволяет пропустить указанное значение в переборе цикла
    } else if (i === 8) {
        break; //  оператор который останавливает цикл 
    }
    console.log(i);
}