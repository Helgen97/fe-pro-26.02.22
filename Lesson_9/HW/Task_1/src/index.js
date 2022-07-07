// Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. 
// Використовуючи JS виведіть у консоль відступ

const div = document.createElement("div");
div.style.margin = "150px";
div.style.border = "2px black solid";

const p = document.createElement("p");
p.innerText = `Зовнішній відступ div = ${div.style.margin}`;

div.append(p);

document.body.append(div);

