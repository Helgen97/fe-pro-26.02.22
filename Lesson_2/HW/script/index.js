/*
    Используя циклы нарисовать в браузере с помощью пробелов и звездочек:
    - Прямоугольник
    - Прямоугольный треугольник
    - Равносторонний треугольник
    - Ромб
*/

document.write('<h3>Задача 1</h3>')

let size = Number(prompt('Введите длинну фигур', 6));

document.write('<p>Прямоугольник</p>');

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size * 2; j++) {
        document.write('*' + '&nbsp;');
    }
    document.write('<br>');
}

document.write('<p>Прямоугольный треугольник</p>');

for (let i = 0; i < size; i++) {
    for (let j = size - i; j <= size; j++) {
        document.write('*' + '&nbsp;');
    }
    document.write('<br>');
}

document.write('<p>Равносторонний треугольник</p>');
for (let i = 0; i < size; i++) {
    for (let j = 0 + i; j <= size * 2 - i; j++) {
        document.write('&nbsp;');
    }
    for (let k = 2 * i + 1; k > 0; k--) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('<p>Ромб</p>');

for (let i = 0; i < size; i++) {
    for (let j = 0 + i; j <= size * 2 - i; j++) {
        document.write('&nbsp;');
    }
    for (let k = 2 * i + 1; k > 0; k--) {
        document.write('*');
    }
    document.write('<br>')
}
for (let i = size; i >= 0; i--) {
    for (let j = size * 2 - i; j >= i; j--) {
        document.write('&nbsp;');
    }
    for (let k = 2 * i + 1; k > 0; k--) {
        document.write('*');
    }
    document.write('<br>')
}

document.write('<h3>Задача 2</h3>')

/* 
    Дано два числа А и В где (A < B). 
    Выведите на экран сумму всех чисел расположеных на числовом промежутке от А до В.
    Выведите на экран все нечетные значения, расположеные в числовом промежутке от А до В. 
*/

let a = Number(prompt('Введите первое число. Оно должно быть меньше второго!', 3));
let b = Number(prompt('Введите второе число. Оно должно быть больше первого!', 19));
let sum = 0;
document.write('Все нечетные значения в диапазоне: ');
for (a + 1; a < b; a++) {
    sum += a;
    if (a % 2 == 1) {
        document.write(a + ', ');
    }
}
document.write('.<br>');
document.write('Сумма всех чисел в заданном диапазоне равно: ' + Number(sum));

document.write('<h3>Задача 3</h3>')

/*  
    Перепишите if c использованием оператора "?":
        if (a + b < 4) {
            result = 'Мало';
        } else {
            result = 'Много';
        }
*/

let result; 
result = a + b < 4 ? 'Мало' : 'Много';
document.write(result);

document.write('<h3>Задача 4</h3>');

/*
        Перепишите if..elseс использованием нескольких операторов "?": 
            var message;
            if (login == 'Вася') {
                message = 'Привет';
            } else if (login == 'Директор') {
                message = 'Здравствуйте'; 
            } else if (login == '') {
                message = 'Нет логина';
            } else {
                message = '';
            }
*/

var login = prompt('Введите: Вася, Директор, или пустое поле');
var message = login == 'Вася' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : 'none';
document.write(message);