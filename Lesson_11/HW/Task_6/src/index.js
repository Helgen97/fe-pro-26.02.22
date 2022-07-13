// Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body

const input = document.createElement("input");

input.setAttribute("type", "color");
input.addEventListener("input", (event) => {
    document.body.style.backgroundColor = event.target.value
})

document.body.append(input);

