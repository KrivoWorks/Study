"Use strict"; // директива необходимая для объявления современного режима JS

//МАССИВЫ
// массивы - это структура содержащая элементы по порядку

const arr = [1, 2, 3, 4, 6, 8];

arr.pop(); // метод удаляющий последний элемент массива
console.log(arr);
arr.push(10); // метод добавляющий последний элемент в массив
console.log(arr);

// перебор элементов в массиве с помощью цикла for
for (let i = 0; i < arr.length; i++) { // arr.length - свойство
// цикл будет отрабатывать до тех пор, пока не закончятся элементы внутри массива
    console.log(arr[i]);
}

// for of - работает только с массиво подобными сущностями - массивы, строки
// let value - переменная которая отображает каждый отдельный элемент массива
for (let value of arr) { // название переменной может быть любым
    console.log(value); 
}

// оссобенности свойства .length
const arrB = [2, 3, 4, 6, 8];
console.log(arrB.length); // .length состоит из последнего индекса и +1
// счёт с 0 до 4 и +1

// массивы хранят индексы строго по порядку, но иногда эти правила могут случайно нарушиться
const arrC = [2, 3, 4, 6, 8];
arrC[99] = 0; // в квадратных скобках указываем индекс №99 и присваиваем значение 0
console.log(arrC.length);
console.log(arrC); // <94 empty items> - 94 пустых ячейки


// наиболее часто встречающийся метод массива forEach()
// forEach() как и цикл for но с более подробными настройками
const arrD = [2, 3, 4, 6, 8];
arrD.forEach(function(item, i, arr) { // callback функция
// первый аргумент - это элемент который мы перебираем, называться может по разному    
// i - это номер по порядку, называться может по разному
// arr - это ссылка на массив, который мы перебираем, называться может по разному
// метод это - функция и он принимает в себя ещё одну функцию    
// эта функция каждый раз будет выполняться для каждого элемента массива
console.log(`${i}: ${item} внутри массива ${arr} `);
});
// отличие for от forEach - в for можно использовать break и continue
// forEach при запуске нельзя будет остановить или пропустить


// популярные методы массивов
// .split - разбивает объект String на массив строк путём разделения строки указанной подстрокой
// .join - объединяет все элементы массива в строку
// .sort - на месте сортирует элементы массива и возвращает отсортированный массив
const str = prompt("", "");
const products = str.split(", "); // обращаемся к переменной, в ней лежит строка и используем метод .split
// в круглых скобках указываем, через какой разделить будет список пользователя. Это нужно точно знать
console.log(products); // получаем массив из элементов введённых пользователем
console.log(products.join("; ")); // получаем строку через ;
// что произошло: сначала получили массив через .split, а потом через .join обратно склеили строку только теперь через ;

// .sort - метод сортировки
const strB = prompt("", "");
const productsB = strB.split(", ");
products.sort();
console.log(products.join("; "));
// если будут введены буквы - метод отсортирует элементы в алфавитном порядке
// у .sort есть особенность, метод сортирует строки, даже если пользователь введёт цифры
// например элементы 4, 1, 12, 23 отсортирует как - 1, 12, 23, 4
// добавляем функцию, которая исправляет ситуацию
const arrE = [2, 3, 4, 6, 8];
arrC.sort(compareNum); // функцию не вызываем а просто передаём
console.log(arrE);

function compareNum (a, b) { // метод .sort использует один из алгоритмов - "быстрая сортировка"
    return a - b;
}

//ПСЕВДОМАССИВ - объект, структура которого совпадает с массивом
// но есть одно отличие - у псевдомассива нет методов