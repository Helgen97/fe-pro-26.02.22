const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
/*
    Створіть програму секундомір. 
    Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
    При натисканні на кнопку стоп фон секундоміра має бути червоним, 
        старт - зелений, 
        скидання - сірий * 
    Виведення лічильників у форматі ЧЧ:ММ:СС
    Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/


const seconds = document.getElementById("seconds");

const start = document.getElementById("start");
const pause = document.getElementById("stop");
const reset = document.getElementById("reset");

const display = document.getElementById("display");

let hoursCounter = 0;
let minutesCounter = 0;
let secondsCounter = 0;

let intervalHandler;

const tick = () => {
    secondsCounter++;
    if (secondsCounter >= 60) {
        secondsCounter = 0;
        minutesCounter++;
        if (minutesCounter >= 60) {
            minutesCounter = 0;
            hoursCounter++;
        }
    }
}

const draw = () => {
    seconds.innerText = secondsCounter < 10 ? ("0" + secondsCounter) : secondsCounter;
    minutes.innerText = minutesCounter < 10 ? ("0" + minutesCounter) : minutesCounter;
    hours.innerText = hoursCounter < 10 ? ("0" + hoursCounter) : hoursCounter;
}


const startTimer = () => {
    setDisplayColor("green");
    intervalHandler = setInterval(() => {
        tick();
        draw();
    }, 1000)

}

const stopTimer = () => {
    clearInterval(intervalHandler);
    setDisplayColor("red");
}

const resetTimer = () => {
    clearInterval(intervalHandler);
    setDisplayColor("silver");
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    hoursCounter = 0;
    minutesCounter = 0;
    secondsCounter = 0;
}

const setDisplayColor = (color = "black") => {
    const colors = ["black", "silver", "red", "green"];
    colors.forEach(color => display.classList.remove(color));
    display.classList.add(color);
}

start.onclick = startTimer;
pause.onclick = stopTimer;
reset.onclick = resetTimer;
