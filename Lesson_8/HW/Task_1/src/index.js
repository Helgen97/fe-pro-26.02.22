/*
При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". 
Данная кнопка должна являться единственным контентом в теле HTML документа, 
весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript
При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. 
При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. 
При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, 
то есть все остальные круги сдвигаются влево.
*/

const mainButton = document.querySelector("#clickMe");
mainButton.onclick = function () {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Диаметр круга")

    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "Нарисовать";
    button.onclick = drawCircles;

    div.append(input);
    div.append(button);

    document.body.append(div);

}

function drawCircles() {
    const circleDiameter = document.querySelector("#input").value;

    const container = document.createElement("div");
    container.className = "container";


    for (let i = 0; i < 100; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.width = circleDiameter + "px";
        circle.style.height = circleDiameter + "px";
        circle.style.borderRadius = circleDiameter + "px"
        circle.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
        circle.onclick = () => circle.style.display = "none";
        container.append(circle);

    }

    document.body.append(container);
}