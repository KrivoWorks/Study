"Use strict"; // директива необходимая для объявления современного режима JS

//МЕТОДЫ И СВОЙСТВА У СТРОК И ЧИСЕЛ
// методы - это вспомогательные функции
// свойства - вспомогательные значения
const bananaA = "test";
console.log(bananaA.length); // .length - свойство
// свойство никак не вызывается (в отличии от метода), а просто пишется через точку
const bananaB = "test";
console.log(bananaB.toUpperCase()); // .toUpperCase - метод
// у метода в конце обязательно идут круглые скобки
const bananaС = "test";
console.log(bananaС.toUpperCase());
console.log(bananaС); // (исходник) переменная не изменилась
// метод не изменяет значение а возвращает новое значение
const bananaD = "teSt";
console.log(bananaD.toLowerCase()); // toLowerCase - метод возвращающий значение в нижний регистр

// поиск подстроки
const fruit = "some fruite";
console.log(fruit.indexOf("fru")); // в круглых скобках у метода - аргумент

const logg = "Hello world";
console.log(logg.slice(6, 11)); // slice - вырезать часть строки (вернуть значение)
// (6, 11) - аргумент start и end

// разница slice и substring в том, как они обрабатывают отрицательные аргументы
const loggC = "Hello world";
console.log(loggC.substring(6, 11));

const loggD = "Hello world";
console.log(loggD.substr(6, 5)); // start - с какого символа начать, end - сколько символов вырезать

const num = 12.2;
console.log(Math.round(num)); // округление через библиотеку JS - Math, встроенную в браузер
// Math пишется обязательно с большой буквы

// parseInt() - метод вынесенный в функцию в JS
// parseInt() принимает строку в качестве аргумента и возвращает целое число
// parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));