// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {

  this.read = function () {
    this.firstNumber = Number(prompt("Введите первое число: ", 2));
    this.secondNumber = Number(prompt("Введите второе число: ", 3));
  };

  this.sum = function () {
    document.getElementById("sum").innerHTML =
      "Сумма введеных чисел: " + (this.firstNumber + this.secondNumber);
  };

  this.mul = function () {
    document.getElementById("mul").innerHTML =
      "Произведение введеных чисел: " + this.firstNumber * this.secondNumber;
  };
}

let calculator = new Calculator();
