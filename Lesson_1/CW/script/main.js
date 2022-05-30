/*
    1. Сверстать страницу подобную макету с помощью document write
    2. Создать 3 переменных которые перед загрузкой страницы спросят у пользователя
        Имя
        Фамилию
        Возвраст
    и выведут данные на страницу которую мы ранние сверстали.
    3. Получите 3 числа от пользователя и выведите среднее арифметическое
*/

var userName = prompt('Ваше имя?');
var surname = prompt('Ваша фамилия?');
var userAge = prompt('Ваш возраст?');
alert('Введите три числа, чтобы вычислить среднее арефметичекое');
var firstNum = Number(prompt('Первое число? '));
var secondNum = Number(prompt('Второе число? '));
var thirdNum = Number(prompt('Третье число? '));
var average = (firstNum + secondNum + thirdNum)/3;


document.write('<header></header>');
document.write('<main><nav></nav><section id="section">' + 
'<p>Имя пользователя: ' + userName + '</p>' +
'<p>Фамилия пользователя: ' + surname + '</p>' +
'<p>Возраст пользователя: ' + userAge + '</p>' +
'<p>Первое число: ' + firstNum + '</p>' +
'<p>Второе число: ' + secondNum + '</p>' +
'<p>Третье число: ' + thirdNum + '</p>' +
'<p>Среднее арефметическое ' + average + '</p>' +
'</section></main>');
document.write('<footer></footer>');

