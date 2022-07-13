// Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата

const container = document.createElement("div");
const span = document.createElement("span");
span.style.display = "block";
span.innerText = "Кнопку не нажимали";

const btns = [];

for (let i = 0; i < 4; i++) {
  let btn = document.createElement("button");
  btn.innerText = i;
  btn.addEventListener("click", () => {
    span.innerText = `Нажата кнопка: ${i}`;
  });

  btns.push(btn);
}

container.append(span, ...btns);

document.body.append(container);
