// Разработайте функцию конструктор, которая будет создавать обьект Human,
// добавьте на свое усмотрение свойства и методы в этот обьект.
// Подумайте, какие методы и свойства следует сделать уровня экземпляра,
// а какие уровня функции конструктора

function Human(firstName, age, gender) {
  this.firstName = firstName;
  this.age = age;
  this.gender = gender;

  this.sayHi = function () {
    return (
      "Привет! Я " +
      this.firstName +
      ". Мне " +
      this.age +
      " и я " +
      this.gender +
      "."
    );
  };
}

// обьект с методами и свойствами конструктора
let vasya = new Human("Вася", 25, "Мужчина");
document.getElementById("vasya").innerHTML = vasya.sayHi();


//обьект с методами и свойствами коструктора + экземпляра
let dima = new Human("Дима", 24, "Мужчина");
dima.job = "Java Junior";
dima.town = "Киев";
dima.sayAbout = function () {
  return (
    this.sayHi() +
    "\n" +
    "Я работаю " +
    this.job +
    " в городе " +
    this.town +
    "."
  );
};
document.getElementById("dima").innerHTML = dima.sayAbout();
