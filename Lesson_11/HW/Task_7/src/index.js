// Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль

const input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("placeholder", "login");
input.addEventListener("input", (event) => {
    console.log(event.target.value);
})

document.body.append(input);

