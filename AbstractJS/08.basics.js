"Use strict";

//ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ SPREAD (ОПЕРАТОР)
let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a); // стандартная логика

// передача по ссылке
const obj = {
    a: 5,
    b: 5
};
const copy = obj; // в переменную кладётся ссылка а не сам объект
copy.a = 10; // модифицируем копию
console.log(copy);
console.log(obj);

// чтобы создать копию объекта, есть несколько способов