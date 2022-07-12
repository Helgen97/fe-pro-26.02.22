/*  Необходимо сделать этот калькулятор рабочим.
 * При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
 * При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет введения второго числа для выполнения операции.
 * Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`, так и любого из операторов, в табло должен появиться результат выполенния предыдущего выражения.
 * При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит, что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC` должно очищать память.
 */

const displayContainer = document.querySelector(".display");

const display = document.getElementById("display");

const panel = document.getElementById("panel");

let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";
let memory = "";
let cleanMemory = false;

const pressNumber = (value) => {
    if (numberTwo === "" && operator === "") {
        numberOne += value;
        display.value = numberOne;
    } else if (numberOne !== "" && operator !== "") {
        numberTwo += value;
        display.value = numberTwo;
    }
}

const reload = () => {
    numberOne = "";
    numberTwo = "";
    operator = "";
}

const resultOperation = () => {
    if (numberOne === "") return;

    switch (operator) {
        case "+": {
            result = Number(numberOne) + Number(numberTwo);
            display.value = result;
            reload();
            break;
        }
        case "-": {
            result = Number(numberOne) - Number(numberTwo);
            display.value = result;
            reload();
            break;
        }
        case "/": {
            result = numberTwo === "0" ? "ERR" : Number(numberOne) / Number(numberTwo);
            display.value = result;
            reload();
            break;
        }
        case "*": {
            result = Number(numberOne) * Number(numberTwo);
            display.value = result;
            reload();
            break;
        }
    }
}


panel.addEventListener("click", (event) => {
    event.preventDefault();

    const element = event.target;
    if (element.getAttribute("type") !== "button") return;
    const elementValue = element.value;

    if (elementValue.match(/[\d.]/)) {
        pressNumber(elementValue);
    } else if (elementValue.match(/[+\-/*]/) && elementValue !== "m-" && elementValue !== "m+") {
        display.value = "";
        operator = elementValue;
    } else {
        switch (elementValue) {
            case "=": {
                display.value = "";
                resultOperation();
                break;
            }
            case "C": {
                display.value = "";
                reload()
                break;
            }
            case "m-": {
                if (!displayContainer.classList.contains("memory")) displayContainer.classList.add("memory");
                memory = memory === "" ? display.value : Number(memory) - Number(display.value);
                break;
            }
            case "m+": {
                if (!displayContainer.classList.contains("memory")) displayContainer.classList.add("memory");
                memory = memory === "" ? display.value : Number(memory) + Number(display.value);
                break;
            }
            case "mrc": {
                if (!cleanMemory) {
                    display.value = memory 
                    cleanMemory = true;
                    return;
                }
                memory = "";
                cleanMemory = false;
                displayContainer.classList.remove("memory");
                break;
            }
        }
    }
})
