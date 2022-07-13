// Создай класс, который будет создавать пользователей с именем и фамилией. 
// Добавить к классу метод для вывода имени и фамилии

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    display() {
        return `User: name: ${this.name}, lastName: ${this.lastName}`;
    }
}

document.getElementById("create").addEventListener("click", () => {
    let user = new User(
        document.getElementById("name").value,
        document.getElementById("lastName").value
    );
    alert(user.display());
})
