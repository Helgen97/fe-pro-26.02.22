// Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице

const div = document.createElement("div");

document.body.style.position = "absolute";
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "2px black solid";
div.style.position = "relative";

div.addEventListener("mouseover", () => {
    div.style.left = `${Math.floor(Math.random() * 500)}px`
    div.style.top = `${Math.floor(Math.random() * 500)}px`
})

document.body.append(div);

