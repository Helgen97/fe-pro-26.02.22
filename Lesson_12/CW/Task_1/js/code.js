/*Створити форму для реєстрації покупця 
Ім’я  мінімум 2 літери латиниця 
Фамілія мінімум 2 літери кирилиця 
Вік число
Телефон +38
Індекс число 
Та старус за замовчуванням активний клієнт 


Клієнт вводить дані про себе і ми перевіряємо їх на правильність 

Данні які ввів клієнт ми зберігаємо в браузері, та після збереження показуємо данні на сторінці в вигляді таблиці де мають бути показані тільки діючі клієнти
 */
localStorage.user = JSON.stringify([]);

class User {
	constructor(name, lastname, age, number, index) {
		this.name = name;
		this.lastname = lastname;
		this.age = age;
		this.number = number;
		this.index = index;
		this.status = true;
	}
}

const createUserList = () => {
	//Отримуємо масив юзеров із пам'яті
	let currentUsers = JSON.parse(localStorage.user);
	currentUsers.forEach(function (element) {
		let tr = document.createElement("tr");
		let tdName = document.createElement("td");
		let tdLastName = document.createElement("td");
		let tdAge = document.createElement("td");
		let tdPhoneNumber = document.createElement("td");
		let tdIndex = document.createElement("td");
		let tdStatus = document.createElement("td");
		let inputCheckbox = document.createElement("input");

		inputCheckbox.checked = element.status;
		inputCheckbox.type = "checkbox";
		tdName.innerText = element.name;
		tdLastName.innerText = element.lastname;
		tdAge.innerText = element.age;
		tdPhoneNumber.innerText = element.number;
		tdIndex.innerText = element.index;

		tdStatus.append(inputCheckbox);
		tr.append(tdName, tdLastName, tdAge, tdPhoneNumber, tdIndex, tdStatus);
		document.querySelector("tbody").append(tr);
	});
}
let [...allInputs] = document.querySelectorAll("input");

let inputsRez = allInputs.map(function (element) {
	return element;
}).filter((element) => {
	return element.type != "button";

})
const validate = (target) => {
	switch (target.id) {
		case "name": return /^[A-z]{2,}$/i.test(target.value);
		case "lastname": return /^[А-я]{2,}$/i.test(target.value);
		case "age": return /^\d{1,2}$/.test(target.value);
		case "phonenumber": return /^\+380\d{9}$/.test(target.value);
		case "index": return /^\d{5}$/.test(target.value);
		default: throw new Error("Невірний виклик регулярного виразу");
	}

}

inputsRez.forEach((e) => {
	e.addEventListener("change", (event) => {
		console.log(validate(event.target));
	})
});

let saveButton = document.querySelector("[type=button]");

saveButton.addEventListener("click", () => {
	//Функція валідації після натиску кнопки
	let validateRez = inputsRez.map(function (element) {
		return validate(element);
	});

	//Перевіряємо чи немає помилок в інпутах
	if (!validateRez.includes(false)) {
		//Якщо нема помилок, записуємо в localStorage
		let a = JSON.parse(localStorage.user);
		a.push(
			new User(
				...inputsRez.map((element) => {
					return element.value
				})));
		localStorage.user = JSON.stringify(a);
		inputsRez.forEach(element => element.value = "");
		createUserList();
	}//Тут має бути вивід помилок користувачу

});

