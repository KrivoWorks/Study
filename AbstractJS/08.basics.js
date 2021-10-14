"Use strict";

//ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ SPREAD (ОПЕРАТОР)
let a = 5,
    b = a;
b = b + 5; // передача по значению
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
// использование цикла
//ПОВЕРХНОСТНАЯ КОПИЯ (существует и глубокая копия)
function copyB(mainObj) { // функция с помощью цикла создаст новый объект, перебирая свойства
    let objCopy = {}; // создаём пустой объект

    let key; // объявляем переменную
    for (key in mainObj) { // у нас есть ключи в mainObj
        objCopy[key] = mainObj[key]; // objCopy[key] - создаём новое свойство в объекте
    }
    return objCopy; // возвращаем объект чтобы с ним работать
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyB(numbers); // совершаем клонирование
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers); // проверяем именно создании копии
// особенность, при замене во вложенном объекте
newNumbers.c.x = 10; // мы обращаемся не к "c" а к "x", а это уже ссылка, как в примере выше
console.log(newNumbers); // в "x" мы положили ссылку а не копировали объект
console.log(numbers);

// соединение объектов через метод .assign

const add = { // создаём объект который хотим соеденить
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Object. - обращаемся к объекту, .assign - пишем метод
// в () первым аргументом помещаем объект в который хотим поместить, вторым аргументом идёт объект который помещаем
//НЕЗАВИСИМАЯ КОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА
// метод .assign позволяет так же добавить копию лбъекта в пустой объект

const clone = Object.assign({}, add); // в аргумент объекта передаём пустой объект и помещаем его в переменную clone
clone.d = 20; // меняем значение
console.log(add); // проверяем
console.log(clone);


//КОПИЯ МАССИВА
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // .slice - метод позволяющий скопировать старый массив

newArray[1] = "sggwgq"
console.log(oldArray);
console.log(newArray);