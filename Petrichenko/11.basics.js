"Use strict";

//ПРАКТИКА - ЗАДАЧИ JS


// Какое значение будет выведено ? 
let x = 5;
alert(x++); // ответ 5.
// постфиксная форма записи инкремента увеличивает значение на 1
// но сначала она возвращает исходное значение
alert(++x); // ответ будет 6, инкремент в префиксной форме


//===================================================================


// чему равно выражение ?
[] + false - null + true // простые математические операторы, выполняются друг за другом
console.log([]+false); // пустой массив [] - приводится к типу данных - строка
console.log(typeof([]+false)); // складываем строку с булиновым значением и получаем строку "False"
console.log([]+false-null); // ответ NaN - значение при выполнении нематематических операций
// + true - ничего не поменяет и оставит значение NaN


//===================================================================


// что выведет этот код ?
let y = 1; // число - примитивный тип данных
let x = y = 2; // цепочка выполняется справа налево - последовательное присваивание
alert(x); // сначала в y присваивается 2, затем y присваивается в x
// ответ - 2


//===================================================================


// чему равна сумма ?
[] + 1 + 2
// пустой массив превращается в пустую строку
// дальше пустая строка конкатенируется с 1 - "1"
// "1" + 2 - конкатенация
// ответ - 12


//===================================================================


// что выведет этот код ?
alert("1"[0]) // у каждой строки есть свой индекс
// строка с индексом 0
// ответ - 1


//===================================================================


// чему равно ?
2 && 1 && null && 0 && undefined
// && - логический оператор и, & - амперсант
// оператор && всегда запинается на лжи
// ответ - null
// выражение идёт слева на право
// 2 - правдивое выражение в логическом контексте
// 1 - true в логическом контексте
// null - false в логическом контексте


//===================================================================


// есть ли разница между выражениями ?
!!(a&&b) (a&&b) // заменим a&&b на числа
console.log(!!(1&&2) === (1&&2))
// !! - превращвет значение в булиновый тип данных
// ответ - false


//===================================================================


// Что выведет этот код ?
alert(null || 2&&3 || 4);
// когда мы не уверены какой оператор сработает первым
// необходимо смотреть таблицу приоритетов операторов
// оператор И приоритетом выше чем оператор ИЛИ
// 2&&3 - значение правдивое и будет возвращаться последнее значение - 3
// дальше идёт левая часть null || 3
// оператор ИЛИ запинается на правде
// 3 || 4 выполнено не будет, тк ИЛИ запинается на правде
// ответ - 3


//===================================================================


// правда ли что a == b ?
a = [1, 2, 3]; b = [1, 2, 3]
// у нас есть два массива
// ответ - нет, a не равно b
// a - это допустим ящик с 50 яблоками и b тоже ящик с 50 яблоками
// но это не один и тот же ящик
// это разные ящики с разными яблоками которые просто идентичны
// в этой задаче, мы сравниваем не какие то элементы из объекта
// а просто идентичные объекты


//===================================================================


// что выведет этот код ?
alert(+"infinity");
// у нас есть команда alert, внутри у неё строка
// перед строкой стоит унарный плюс
// ответ - просто Infinity
// но тип данных будет число


//===================================================================


// верно ли выражение ?
"Ёжик" > "яблоко"
// ответ false
// мы можем сравнивать строки, в таком случае идёт посимвольное сравнение
// сравниваем Ё и я
// для решения нужна таблица Unicode


//===================================================================


// чему равно выражение ?
0 || "" || 2 || undefined || true || false
// ИЛИ запинается на правде
// расчёт происходит слева направо
// 0 - в логическом контексте - это false
// "" - в логическом контексте - это false
// 2 - в логическом контексте - это true
// ответ - 2