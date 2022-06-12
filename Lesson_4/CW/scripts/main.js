// Создайте калькулятор 
// За каждую операцию будет отвечать отдельная функция, 
// т.е. для сложения - add(a,b), 
// для умножения - multiple(a,b) и т.д. 
// Каждая из них принимает в аргументы только два числа и возвращает результат операции над двумя числами 
// Если число не передано в функцию аргументом - ПО УМОЛЧАНИЮ присваивать этому аргументу 0. 
// Основная функция calculate() 
// Принимает ТРИ АРГУМЕНТА: 
// 1 - число 
// 2 - число 
// 3 - функция которую нужно выполнить для двух этих чисел. Таким образом получается что основная функция калькулятор будет вызывать переданную ей аргументом функцию для двух чисел, которые передаются остальными двумя аргументами. При делении на 0 выводить ошибку. Функия калькулятор доджна принять на вход 3 аругмента, Если аргументов больше или меньше выводить ошибку.

let firstValue = Number(prompt('Введите первое число: ', 1));
let operation = prompt('Введите знак операции(+, -, /, *,)', '+');
let secondValue = Number(prompt('Введите второе число: ', 2));

document.write("<p>" + firstValue + operation + secondValue + "= </p>")

switch(operation) {
    case "+" : {
        calculate(firstValue, secondValue, add);
        break;
    }
    case "-" : {
        calculate(firstValue, secondValue, substract);
        break;
    }
    case "*" : {
        calculate(firstValue, secondValue, multiply);
        break;
    }
    case "/" : {
        calculate(firstValue, secondValue, division);
        break;
    }
    default : {
        alert("Неправильный оператор!")
    }
}

function calculate(a, b, func){
    document.write("<p>" + func(a, b) + "</p>");
}

function add(a = 0, b = 0) {
    return a + b;
}

function substract(a = 0, b = 0) {
    return a - b;
}

function multiply(a = 0, b = 0) {
    return a * b;
}

function division(a = 1, b = 1) {
    return a/b;
}