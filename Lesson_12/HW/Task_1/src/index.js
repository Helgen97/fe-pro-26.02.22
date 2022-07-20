function Pizza(price, sauces, topings) {
    this.price = price;
    this.sauces = sauces;
    this.topings = topings;
}


const basePizzaPrice = 50;
const sausePrise = 15;
const toppingPrise = 25;

const price = document.querySelector(".price > p > span");
const sauses = document.querySelector(".sauces > p > span");
const topings = document.querySelector(".topings > p > span");

const saucesList = [];
const topingsList = [];

//Вибір розміру піцци
const radiobtns = document.querySelectorAll("input[type=radio]");

const chooseSize = (id) => {
    switch (id) {
        case "small": {
            price.innerText = basePizzaPrice * 1.5;
            break;
        }
        case "mid": {
            price.innerText = basePizzaPrice * 2;
            break;
        }
        case "big": {
            price.innerText = basePizzaPrice * 2.5;
            break;
        }
    }
}

radiobtns.forEach((btn) => btn.addEventListener("click", (event) => {
    chooseSize(event.target.id);
}))


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
        let pizza = new Pizza(price, sauses, topings)
        localStorage.setItem('order', JSON.stringify(pizza));
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



