"Use strict";

//Задача №1
//Создайте переменную str и присвойте ей значение 'abcde'
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'

//Задача №2
//Напишите скрипт, который считает количество секунд в часе.

//---------

//Задача №1
const str = "abcde";

alert(str[0]); alert(str[1]); alert(str[4]);
console.log(str[0], str[1], str[4]);

//Задача №2
const hour = 60,
      minuts = 60;

alert(hour * minuts);
console.log(hour * minuts);