/* 
    Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
    то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
*/

var num = Number(prompt('Введите сезон', 1));
var result;

switch (num) {
    case 1: {
        result = 'Winter';
        break;
    }
    case 2: {
        result = 'Spring';
        break;
    }
    case 3: {
        result = 'Summer';
        break;
    }
    case 4: {
        result = 'Autumn';
        break;
    }
    default: {
        result = 'Not a season!'
    }
}

document.write('<p>' + result + '</p>');

/* 
    Используя условные конструкции проверьте возвраст пользователя, 
       если пользователю будет от 18 до 35 лет переведите его на сайт google.com через 2 секунды,
        если возвраст пользователя будет от 35 до 60 лет переведите его на сайт https://www.uz.gov.ua/, 
        если пользователею будет до 18 лет покажите ему первую серию лунтика из ютуба 
    Выполните эту задачу с используя if
*/

var userAge = Number(prompt('Введите ваш возраст: ', 5));

if (userAge >= 18 && userAge <= 35) {
    document.write('<meta http-equiv="refresh" content="2, url=https://google.com">');
} else if (userAge > 35 && userAge <= 60) {
    document.write('<meta http-equiv="refresh" content="2, url=https://www.uz.gov.ua/">');
} else if (userAge < 18) {
    document.write('<iframe width="560" height="315" src="https://www.youtube.com/embed/icdSZKq9-sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
}

document.write('<br>')

/*
    Создайте две целочисленные переменные и присвойте им некоторые значения. 
    По этим значениям, используя вложенные циклы, нарисуйте заполненный прямоугольник из звездочек.
*/

var width = Number(prompt('Введите длинну: ', 10));
var height = Number(prompt('Введите высоту: ', 5));

for (let i = 0; i <= height; i++) {
    for (let k = 0; k <= width; k++) {
        document.write('* ');
    }
    document.write('<br>');
}

document.write('<br>');

/*
     Напишите код, который будет спрашивать логин (prompt). 
        Если посетитель вводит «Админ», то спрашивать пароль, 
        если нажал отмена (escape) – выводить «Вход отменён». 
     Пароль проверять так. 
        Если введён пароль «Властелин», то выводить «Добро пожаловать!»,
        иначе – «Пароль неверен», при отмене – «Вход отменён». 
*/

var login = prompt('Введите логин: ', 'admin');
var password;

if (login == 'admin') {
    password = prompt('Введите пароль');
    if (password == 'Властелин') {
        document.write('<p>Добро пожаловать!</p>');
    } else if (password == null) {
        document.write('<p>Вход отменен</p>');
    } else {
        document.write('<p>Неверный логин</p>');
    }
} else if (login == null) {
    document.write('<p>Вход отменен</p>');
} else {
    document.write('<p>Неверный логин</p>');
}
