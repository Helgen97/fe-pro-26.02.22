// Создай див высотой 400 пикселей и добавь на него событие наведения мышки. 
// При наведении мышки выведите текстом координаты, где находится курсор мышки

const div = document.createElement("div");

const span = document.createElement("span");

div.style.border = "2px black solid";
div.style.width = "400px";
div.style.height = "400px";

div.addEventListener("mousemove", (event) => {
    span.innerText = `x: ${event.x}, y: ${event.y}`;
})

document.body.append(span, div);