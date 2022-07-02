// Доповнити функцію create New User () методами підрахунку віку користувача і його паролем.
// Візьміть виконане завдання вище (створена вами функція createNewUser ()) і доповніть її наступним функціоналом: при виклику функція повинна запитати у викликає дату народження (текст у форматі dd.mm.yyyy) і зберегти її в поле birthday. 
// Створити метод getAge () який буде повертати скільки користувачеві років. 
// Створити метод getPassword (), який буде повертати першу букву імені користувача у верхньому регістрі, з'єднану з прізвищем (в нижньому регістрі) і роком народження. (наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). 
// Вивести в консоль результат роботи функції createNewUser (), а також функції getAge() і getPassword () створеного об'єкта.

function User (firstName = "", lastName = "", birthday = "", ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

User.prototype.getLogin = function() {
    return this.firstName.toLowerCase().charAt(0) + this.lastName.toLowerCase();
}

User.prototype.getAge = function() {
    return new Date().getFullYear() - new Date(this.birthday.slice(6, this.birthday.length), this.birthday.slice(3, 5), this.birthday.slice(0, 2)).getFullYear();
}

User.prototype.getPassword = function() {
    return this.firstName.toUpperCase().charAt(0) + this.lastName.toLowerCase() + this.birthday.slice(6,this.birthday.length);
}

function createNewUser() {
    return new User(prompt("First name?"), prompt("Last name?"), prompt("Enter birthday(dd.mm.yyyy)"));
}

const user = createNewUser();

console.dir(user)
console.log(user.getAge());
console.log(user.getPassword());