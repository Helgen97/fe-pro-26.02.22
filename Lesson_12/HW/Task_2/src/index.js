/**
 * У файлі index.html лежить розмітка для кнопок
 * Кожна кнопка містить назву клавіші на клавіатурі
 * Після натисканння вказаних клавіш - та кнопка на якій написана ця літера повинна фарбуватись у синій колір.
 * При цьому якщо якась інша літера вже раніше буда пофарбована в синій колір - вона стає чорною
 */


const [...btns] = document.querySelectorAll("button");
let lastPressedButton;

document.body.addEventListener("keypress", (event) => {

    const btn = btns.find((element) => event.key === element.innerText.toLowerCase() || event.key === element.innerText)
    if (btn !== undefined) {
        if (lastPressedButton) lastPressedButton.classList.remove("blue");
        btn.classList.add("blue")
        lastPressedButton = btn;
    }
})
