// Реалізувати функцію для створення об'єкта "Користувач".
// Написати функцію createNewUser (), яка буде створювати і повертати об'єкт newUser. 
// При виклику функція повинна запитати у абонента ім'я та прізвище. Використовуючи дані, введені користувачем, створитиоб'єкт newUser з властивостями firstName і lastName. 
// Додати в об'єкт newUser метод getLogin (), який буде повертати першу букву імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko). 
// Створити користувача за допомогою функції create New User (). Викликати у користувача функцію getLogin (). Вивести в консоль результат виконання функції.


function User (firstName = "", lastName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getLogin = function() {
    return this.firstName.toLowerCase().charAt(0) + this.lastName.toLowerCase();
}

function createNewUser() {
    return new User(prompt("First name?"), prompt("Last name?"));
}

let user = createNewUser();
alert(user.getLogin());
