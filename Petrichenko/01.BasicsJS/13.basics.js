"Use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart");

console.dir(box); // Отображает список свойств указанного JavaScript объекта в консоле браузера
// вывод представлен в виде иерархического списка с  возможностью просмотра содержимого дочерних объектов
// в списке мы можем найти "style" - это объект внутри объекта
// все свойства в объекте "style" - это инлайн свойства

box.style.backgroundColor = "blue"; // когда мы с помощью js прописываем стили, они должны протисаны точно так же как и в css
box.style.width = 500; // это не сработает, css не знает, что такое 500
box.style.width = "500px";
btns[1].style.borderRadius = "100%"; // обращаемся к определённой кнопке через индекс к псевдомассиву

// частая ошибка
// circles.style.backgroundColor = "red"; // ошибка - потому что обращаемся к псевдомассиву
circles[0].style.backgroundColor = "red"; // чтобы изменить стиль, нужно указать элемент, к которому мы обращаемся

// как назначить нескольно инлайн стилей ?
box.style.cssText = "background-color: blue; width: 500px"; // метод cssText - передаём стили в качестве текста
// чтобы заработало, нужно закомментировать 14, 15, 16 строку
// строку пишем в стиле css
// в строку мы можем подставлять переменные
// box.style.cssText = `backgroung-color: blue; width: ${num}500px`; // конкатенация

// если над несколькими элементами произвести одни и теже действия ?
// мы можем использовать цикл, перебирающую конструкцию for OF или метод for Each
// for Each существует только у .querySelectorAll

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} 

// циклы практически не используются, потому что есть перебирающий метод
hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});


//===================================================================


// методы для работы с элементами на странице
const div = document.createElement("div"); // создан новый элемент и он существует только внутри JS
// на странице он никак не появится
// таким же образом можно создавать и текстовые узлы - элементы без оболочки тега
const text = document.createTextNode("Тут был я"); // но такой метод используется редко
// часто будем слышать не элементы на странице а - ноды
// элемент существует в JS и можем его например стилизолвать
// если мы хотим элемент поменять полностью - чаще всего мы не прописываем кучу стайлов и даже не используем cssText
// мы модифицируем css классы элементов
// существует простое свойство - class name - где мы можем через пробел указать классы и добавить их к элементу
// но оно устаревшее и не удобное
// вместо него есть средство class list - где через точку можем вписать действие с нашим классом
div.classList.add("black"); // элемент создан - он лежит в коробке которая есть только внутри js
// к html он никакого отношения не имеет и на странице его нет
// воспользуемся деревом DOM
// любой элемент можно вставить в конец или начало, удалить или заменить, но только по отношению к другому элементу

// современные методы работы со страницей, но в устаревших браузерах, они работать не будут
// чтобы это проверить - сайт www.caniuse.com
// если какой то метод не работ в браузере, нужно будет его заменить на старый
// это делается автоматически (позже) и не всегда необходимо


// метод append - добавляет элеменнт в начало родителя
document.body.append(div); // берём родителя (body) и в самый конец добавляем элемент (div)
// можем добавить его не только в конец body но и например в конец элемента wrapper
document.querySelector(".wrapper").append(div);

const wrapper = document.querySelector(".wrapper");
// метод prepend - добавляет элеменнт в начало родителя
wrapper.prepend(div);

// методы before и after
// сначала указываем элемент перед которым будем устанавливать
hearts[1].before(div); // в круглых указываем - что будем перед первым указанным элементом
hearts[1].after(div); // после какого эленмента будет вставлен элемент

// удаление элемента
circles[0].remove(); // какой элемент хотим удалить - метод удаления

// замена элемента
hearts[2].replaceWith(circles[1]); // какой элемент хотим заменить - метод замены - в () на что меняем


//===================================================================

// устаревшие методы
// раньше все команды шли через родителя - wrapper.
// раньше метода append не было
// разницы в append и appendChild - нет ?
wrapper.appendChild(div); 

// раньше методов after, before, prepend не было
wrapper.insertBefore(div, hearts[0]); // в () первым указываем какой элемент вставляем, вторым - перед каким элементом вставляем

// раньше метода remove не было
wrapper.removeChild(hearts[2]); // родитель - метод - что хотим удалить

// раньше метода replaceWith не было
wrapper.replaceChild(circles[0], hearts[1]); // родитель - метод - что хотим заменить - на что хотим заменить


//===================================================================


// как добавлять текст или html код прямо в элементы ?
// 1й вариант
div.innerHTML = "Hello World";
// через метод innerHTML мы можем передать HTML структуру
div.innerHTML = "<h1>Hello World</h1>"; // в div передаём текстовые данные, но внутри HTML структура
// внутри элемента div появился заголовок первого порядка

// 2й вариант
div.textContent = "Hello"; // метод работает только с текстом, HTML структура сюда не подойдёт
// сделано это в целях безопасности
// иногда данные, записанные в textContent мы получаем сразу от пользователя
// и если пользователь в innerHTML введёт случайно или специально какие либо структуры - может сломать нам вёрстку
// таким образом можно вставить сторонний скрипт
// поэтому - когда мы точно знаем, что хотим получить от пользователя строку - используем textContent


//===================================================================


// как вставить кусочек html кода перед или после определённого кода ?
// для этого есть метод .insertAdjacentHTML
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); // beforebegin - вставляет HTML код перед элементом
div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>'); // afterbegin - вставляет HTML в начало элемента div
div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>'); // afterbegin - вставляет HTML в конец элемента div
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); // afterend - вставляет HTML код после элемента


//===================================================================


// ещё один способ получения элементов
// каждый раз когда мы получали элементы - мы получали доступ к документу
// в вёрстке есть тег - wrapper - внутри есть все сердечки
// 
const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"), // получили родителя wrapper
      hearts = wrapper.querySelectorAll(".heart"), // получаем элементы .heart только в родителе wrapper и которые подойдут по селектору
      oneHeart = wrapper.querySelector(".heart");