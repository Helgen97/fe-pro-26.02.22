// Создайте поле для ввода данных поле введения данных выведите текст под полем

const input = document.createElement("input");
const span = document.createElement("span");
span.style.display = "block";


input.setAttribute("type", "text");
input.setAttribute("placeholder", "data");
input.addEventListener("focusout", (event) => {
    span.innerText = `Данные в инпуте: ${event.target.value}`;
})

document.body.append(input, span);
