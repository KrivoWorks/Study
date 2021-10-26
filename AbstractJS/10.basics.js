"Use strict";

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
// это возможность одного типа данных превращаться в другой
// число может стать - строкой, строка - числом, объект - булиновым значением



// To string 
// 1й способ
console.log(typeof(String(null))); // команда string превратила null в строковый тип данных
console.log(typeof(String(4))); // число превращается в строку
console.log(String(null)); // ещё раз проверяем

// 2й способ - конкатенация - способ когда мы что-то складываем сос строкой
console.log(typeof(5 + ""));
console.log(typeof(null + "")); // при сложении со строкой - получается строка

// пример использования конкатенации
const num = 5; // немного устаревший вид кода, из-за использования интерполяции
console.log("https://vk.com/catalog/" + num); // динамически формируем строку

const fontSize = 26 + "px";



// To number
// 1й способ
console.log(typeof(Number("4")));

// 2й способ - унарный плюс
// знак плюса который ставят перед другим типом данных
console.log(typeof(+"4"));

// 3й способ
console.log(typeof(parseInt("4", 10))); // 10 - десятичная система
// функция parseInt() принимает строку в качестве аргумента 
// и возвращает целое число в соответствии с указанным основанием системы счисления.

// пример использования
let answer = +prompt("Helllo", ""); // всё что мы получаем от пользователя всегда будет типом данных - строка



// To boolean
// 1й способ
// пустота или ничего - всегда будет ложью
0, "", null, undefined, NaN // всегда false, всё остальное true
// пустая строка - если есть пробел. это уже не пустая строка
let switcher = null;
if (switcher) {
    console.log("Working.."); // код не работает
} // потому-что в условии мы обращаемся к переменной от которой подставляется false
switcher = 1;
if (switcher) { 
    console.log("Working.."); // во втором случае условие сработает
} // потому-что 1 в логическом контексте будет правдой



// 2й способ
console.log(typeof(Boolean("4")));



// 3й способ
console.log(typeof(!!"4444")); // !! - превращают строку в булиновое значение