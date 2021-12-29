"Use strict"; // директива необходимая для объявления современного режима JS

//ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// объекты в JS - это ассоциативные объеты
// объекты это структуры которые могут сохранять в себя любые типы данных, в формате: ключ, значение
const obj = new Object(); // нежелательный способ создания объектов
const options = {
    name: "Test", // ключ : значение ,
    width: 1024,
    height: 1024,
    colors: { // вложенная структура - объект в объекте
        border: "black",
        background: "red"
    }
}; // в конце объета ;
console.log(options.name); // обращаемся к ключу через .
delete(options.name); // удаление свойства (значения) ключа
console.log(options);

//ПЕРЕБОР СВОЙСТВ ОБЪЕКТА
// for in - цикл перебора свойств объета
// цикл for of - для объекта работать не будет
for (let key in options) { // такой цикл будет работать столько раз, сколько есть свойств объекта
    console.log(`Свойство ${key}, имеет значение ${options[key]}`);
}
// вывод в консоль производится в виде строк (строчный тип данных)
// одно из значений типа данных (colors) является тоже объектом
// [object Object] - строковое представление объекта

// перебор внутри перебора
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
    }
}

// пример обращения к объекту в объекте
console.log(options["colors"]["border"]); // ключи прописываются в виде строки


// счётчик свойств (ключей) объекта
const optionsA = {
    name: "Test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    }
};
console.log(Object.keys(optionsA).length); // .keys - метод создающий массив с элементами - ключами
// у массива как и у строк есть свойство length - позволяющее узнать количество элементов в массиве


// самостоятельное создание метода
// метод - это действие которое умеет совершать наш объект
const optionsB = {
    name: "Test", 
    width: 1024,
    height: 1024,
    colors: { 
        border: "black",
        background: "red"
    }, 
    makeTest: function() { // makeTest - ключ
        console.log("Test"); // функция в объекте и есть метод
    }
};

optionsB.makeTest(); // круглые скобки запускают метод



//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
const {border, bg} = optionsB.colors;
console.log(border);