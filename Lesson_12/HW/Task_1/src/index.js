//Створити початкову вартість. Із можливістю зміни. 
const startPizzaPrice = 50;
let pizzaPrice = startPizzaPrice;
const [...pizzaSize] = document.querySelectorAll(".radioIn");
//Масив радіо.

//Функція розрахунку вартості залежно від розміру.
function firstCalc(id) {
  switch (id) {
    case "small": {
      pizzaPrice = startPizzaPrice + soucePrice + toppingPrice;
      break;
    }
    case "mid": {
      pizzaPrice = 1.5 * (startPizzaPrice + soucePrice + toppingPrice);
      break;
    }
    case "big": {
      pizzaPrice = 2 * (startPizzaPrice + soucePrice + toppingPrice);
      break;
    }
  }
}

let soucePrice = 0;
let toppingPrice = 0;
let fullPrice = 0;

//Встановимо однакові ціни для соусів та топінгів.
const [...ingridiends] = document.querySelectorAll(".ingridients img");
for (let i = 0; i < ingridiends.length; i++) {
  if (i < 3) {
    ingridiends[i].setAttribute("data-value", 10);
  } else ingridiends[i].setAttribute("data-value", 20);
}

//Теги результату замовлення.
const price = document.querySelector(".price>p");
const sauces = document.querySelector(".sauces>p");
const toppings = document.querySelector(".topings>p");

function calc() {
  pizzaSize.forEach((el) => {
    if (el.checked == true) firstCalc(el.id);
  });
  let fullPrice = pizzaPrice;
  price.innerHTML = "Ціна: " + fullPrice + "грн";
}

const changePizza = document.querySelector("#pizza");
changePizza.addEventListener("click", () => {
  calc();
  mainPizzaFieldImg.length = ingdids.length;
});

//Глобальні зміни для виконання.
let moveEl = null;
let dragEl = null;
let droppableBelow = null;
let elemBelow = null;
const mainPizzaField = document.querySelector(".table");
let [...mainPizzaFieldImg] = document.querySelectorAll(".table>img");
let [...ingdids] = document.querySelectorAll(".table>img");

let changeForLost = null;

//Головна подія. Перетягування інгредієнтів.
document
  .querySelector(".ingridients")
  .addEventListener("mousedown", function (e) {
    [...mainPizzaFieldImg] = document.querySelectorAll(".table>img");
    [...ingdids] = document.querySelectorAll(".table>img");
    dragEl = e.target;
    if (dragEl.tagName != "IMG") return;
    dragEl.value = document.querySelector(`#${dragEl.id}+span`).innerText;
    moveEl = dragEl.cloneNode(true);
    moveEl.value = dragEl.value;
    let shiftLeft =
      e.clientX -
      document.querySelector(".ingridients").getBoundingClientRect().left;
    let shiftTop =
      e.clientY -
      document.querySelector(".ingridients").getBoundingClientRect().top;
    moveEl.style.position = "absolute";
    moveEl.style.zIndex = 10;
    document.body.append(moveEl);
    moveAt(e.pageX, e.pageY);
    function moveAt(pageX, pageY) {
      moveEl.style.left = pageX - shiftLeft + "px";
      moveEl.style.top = pageY - shiftTop + "px";
    }
    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
      moveEl.hidden = true;
      elemBelow = document.elementFromPoint(e.clientX, e.clientY);
      moveEl.hidden = false;
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", onMouseMove);
      droppableBelow = elemBelow.closest(".table");
      if (droppableBelow) {
        moveEl.style.display = "inline-block";
        mainPizzaField.append(moveEl);
        moveEl.style.left = 0 + "px";
        moveEl.style.top = 0 + "px";
        [...ingdids] = document.querySelectorAll(".table>img");
        e.stopPropagation();
      } else {
        changeForLost = true;
      }
    });
  });
document.ondragstart = function () {
  return false;
};

let lastDragElement = null;
//Видалення фото задопомогою подвійного натискання.
let dell = false;
document.addEventListener("dblclick", (e) => {
  dell = false;
  if (e.target.tagName === "IMG" && changeForLost == true) {
    let elementDell = e.target;
    if (elementDell.closest(".table")) return;
    elementDell.remove();
    let [...spans] = document.querySelectorAll(".result p>span");
    spans.forEach((element) => {
      let a = element.innerText;
      let b = getTextLastDrag().slice(1, 3);
      if (dell) return;
      if (a.includes(b)) {
        element.remove();
        dell = true;
      }
    });
  }
  changeForLost = false;
});

//Інструкція для видалення. Виконуєтся до 5 секунд, коли елемент відпущений не у полі з класом "table".
let pToolTip = null;
function showHideToolTip() {
  if (changeForLost) {
    pToolTip = document.createElement("p");
    pToolTip.innerHTML = "Для видалення недавно вибраного об'єкта двічі натисніть на нього";
    pToolTip.classList.add("tooltip");
    document.body.append(pToolTip);
    changeForLost = null;
    setTimeout(() => pToolTip.remove(), 4000);
  }
}
setInterval(showHideToolTip, 5000);

//Функція періодичної перевірки цін.
function auditRes() {
  //if (dragEl.tagName != "IMG") return;
  if (ingdids.length > mainPizzaFieldImg.length) {
    if (moveEl.getAttribute("data-value") == 10) {
      soucePrice += Number(moveEl.getAttribute("data-value"));
    }
    if (moveEl.getAttribute("data-value") == 20) {
      toppingPrice += Number(moveEl.getAttribute("data-value"));
    }
    calc();
    mainPizzaFieldImg.length = ingdids.length;
  }
}
setInterval(() => auditRes(), 500);

window.onload = function () {
  let fullPrice = pizzaPrice;
  price.innerHTML = "Ціна: " + fullPrice + "грн.";
};

//Зберігання соусів та топінгів.
function createList(elem) {
  if (dragEl) {
    let span = document.createElement("span");
    span.innerText = getText();
    elem.append(span);
    let b = document.createElement("br");
    span.append(b);
  }
  lastDragElement = dragEl;
  dragEl = null;
}

//Дістаємо текст із перенесеного елемента. 
function getText() {
  if (dragEl) {
    let id = dragEl.id;
    let spanText = document.querySelector(`#${id}+span`).innerHTML;
    return spanText;
  }
}

function getTextLastDrag() {
  if (lastDragElement) {
    let id = lastDragElement.id;
    let spanText = document.querySelector(`#${id}+span`).innerHTML;
    return spanText;
  }
}

function soucesAdd() {
  createList(sauces);
  dragEl = null;
}
function toppingAdd() {
  createList(toppings);
  dragEl = null;
}

setInterval(() => {
  if (dragEl && dragEl.getAttribute("data-value") == 10) {
    soucesAdd();
  }
  if (dragEl && dragEl.getAttribute("data-value") == 20) {
    toppingAdd();
  }
}, 500);


//Видалення добавок при натисканні на них.

const resultField = document.querySelector(".result");
let isDeleteElement = false;
resultField.addEventListener("click", (e) => {
  // [...mainPizzaFieldImg] = document.querySelectorAll(".table>img");
	// [...ingdids] = document.querySelectorAll(".table>img");
  isDeleteElement = false;
  let target = e.target;
  if (target.tagName != "SPAN") return;
  let [...tableField] = document.querySelectorAll(".table>img");
  let spanText = target.innerText;
  tableField.forEach((elem) => {
    if (isDeleteElement) return;
    if (spanText.includes(elem.value)) {
      if (elem.getAttribute("data-value") == 10) {
        soucePrice -= Number(elem.getAttribute("data-value"));
      }
      if (elem.getAttribute("data-value") == 20) {
        toppingPrice -= Number(elem.getAttribute("data-value"));
      }
      calc();
      elem.remove();
      target.remove();
      isDeleteElement = true;
      [...mainPizzaFieldImg] = document.querySelectorAll(".table>img");
      [...ingdids] = document.querySelectorAll(".table>img");
    }
  });
  auditDell();
});

function auditDell() {
  let [...elOfTable] = document.querySelectorAll(".table>img");
  let [...allSpan] = document.querySelectorAll(".result span");
  if(elOfTable.length != allSpan.length + 1) {
    elOfTable[elOfTable.length - 1].remove();
  }
}

// Форма підтвердження замовлення
const [...inputs] = document.querySelectorAll('form[name=info] input');

const validate = ({ name, value }) => {
    switch (name) {
        case "name": return /^[A-я]{2,}$/i.test(value);
        case "phone": return /^\+380\d{9}$/.test(value);
        case "email": return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        default: throw new Error("Невірний виклик регулярного виразу");
    }
}

const textInputs = inputs.filter((element) => element.type !== "button");

textInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
        console.log(validate(event.target));
    })
})


const reset = () => {
    price.innerHTML = 50;
    textInputs.forEach((input) => input.value = "");
}
const submit = () => {
    let validateResult = textInputs.map((element) => {
        return validate(element);
    })
    if (!validateResult.includes(false)) {
        window.location.replace('./thank-you.html')
    }
}

inputs.find(input => input.name === 'cancel').addEventListener('click', reset);
inputs.find(input => input.name === 'btnSubmit').addEventListener('click', submit);


// Невловимий банер
const banner = document.getElementById("banner");

const runningBanner = (element, posX, posY) => {
    element.style.position = "absolute";
    element.style.top = Math.round(Math.random() * posX) + "px";
    element.style.left = Math.round(Math.random() * posY) + "px";
    element.style.right = "auto";
    element.style.bottom = "auto";
}

banner.addEventListener("mouseenter", (event) => {
    runningBanner(event.target, event.clientX, event.clientY)
})



