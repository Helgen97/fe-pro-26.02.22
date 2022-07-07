/**
* Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00 
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера,
* якщо номер правильний зробіть зелене тло і використовуючи document.location 
* переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg 
* якщо буде помилка, відобразіть її в діві до input.
*/

const save = () => {
    const number = document.getElementById("phone").value;
    const pattern = /(\d{3}-\d{3}-\d{2}-\d{2})/;

    if(number.match(pattern)) {
        document.body.classList.remove("red");
        document.body.classList.add("green")
        document.getElementById("error").innerText = ""
        document.location.replace("https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg");
    } else {
        document.body.classList.add("red");
        document.getElementById("error").innerText = "Неправильний формат телефону!"

    }
}

const div = document.createElement("div");
div.classList.add("container");

const p = document.createElement("p");
p.classList.add("error");
p.setAttribute("id", "error");

const input = document.createElement("input");
input.setAttribute("id", "phone")
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Введіть номер телефону. Формат: 000-000-00-00");
input.classList.add("number");

const button = document.createElement("button");
button.classList.add("save_btn");
button.innerText = "Зберегти";
button.onclick = save;

div.append(p, input, button);
document.body.append(div);

