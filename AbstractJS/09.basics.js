"Use strict";

//ООП - объектно-ориентированное программирование
// JS является объектно ориентированным языком
// смысл ООП в том, что мы представляем любую вещь как объект, с набором свойств и методов
// для обычной строки - использование toUppercase - помещает строку в объект, изменяет и возвращает
let str = "some"; // строка - примитив
let strObj = new String(str); // в работе он превращается в объект а потом возвращает в примитив
console.log(str);
console.log(strObj);
// когда мы создаём массив, мы создаём новый экземпляр прототипов массивов
// в JS - любые конструкции наследуются от объекта
const arr = [1, 2, 3]; // методы и свойства в массиве берутся от объекта

const solder = {
    halth: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const john = {
    halth: 100,
};

// устанавливаем связь с родительским объектом
// устаревший формат __proto__
john.__proto__ = solder;
console.log(john.armor);
john.sayHello(); // обращаемся к переменной и свойству родителя

// правильный вариант установки прототипа
Object.setPrototypeOf(john, solder);

const solderB = {
    halth: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const johnB = Object.create(solderB); // мы создаём объект который будет прототипно наследоваться от soldier
