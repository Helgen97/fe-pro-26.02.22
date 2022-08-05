Hamburger.SIZE_SMALL = {
    id: "small",
    price: 50,
    callories: 20,
}
Hamburger.SIZE_LARGE = {
    id: "big",
    price: 100,
    callories: 40,
}
Hamburger.STUFFING_CHEESE = {
    id: "toppingCheese",
    price: 10,
    callories: 20,
}
Hamburger.STUFFING_SALAD = {
    id: "toppingSalad",
    price: 20,
    callories: 5,
}
Hamburger.STUFFING_POTATO = {
    id: "toppingPotato",
    price: 15,
    callories: 10,
}
Hamburger.TOPPING_MAYO = {
    id: "toppingMayo",
    price: 15,
    callories: 0,
}
Hamburger.TOPPING_SPICE = {
    id: "toppingSpice",
    price: 20,
    callories: 5,
}

/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) {
    this.size = {};
    this.stuffing = []

    if (size === undefined || stuffing === undefined) {
        throw new HamburgerException("no size or stuffing given")
    }
    if (size.id === "small" || size.id === "big") {
        this.size = size;
    } else {
        throw new HamburgerException("no size given")
    }

    if (stuffing.id === "toppingCheese" || stuffing.id === "toppingSalad" || stuffing.id === "toppingPotato") {
        this.stuffing.push(stuffing);
    } else {
        throw new HamburgerException("invalid size 'TOPPING_SAUCE'")
    }


}

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 * 
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    if (this.stuffing.includes(topping)) {
        throw new HamburgerException(`duplicate topping ${topping.id}`);
    }
    this.stuffing.push(topping);

}

/**
* Убрать добавку, при условии, что она ранее была 
* добавлена.
* 
* @param topping   Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.removeTopping = function (topping) {
    if (this.stuffing.includes(topping)) {
        this.stuffing = this.stuffing.filter((el) => el.id !== topping.id);
    } else {
        throw new HamburgerException(`no such topping ${topping.id}`);
    }
}

/**
* Получить список добавок.
*
* @return {Array} Массив добавленных добавок, содержит константы
*                 Hamburger.TOPPING_*
*/
Hamburger.prototype.getToppings = function () {
    return this.stuffing;
}

/**
* Узнать размер гамбургера
*/
Hamburger.prototype.getSize = function () {
    return this.size.id;
}

/**
* Узнать начинку гамбургера
*/
Hamburger.prototype.getStuffing = function () {
    let topings = []
    this.stuffing.forEach((el) => {
        topings.push(el.id);
    });
    return topings;
}

/**
* Узнать цену гамбургера
* @return {Number} Цена в тугриках
*/
Hamburger.prototype.calculatePrice = function () {
    let totalPrice = 0;
    totalPrice += this.size.price;
    this.stuffing.forEach((el) => {
        totalPrice += el.price;
    });
    return totalPrice;
}

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Hamburger.prototype.calculateCalories = function () {
    let callories = 0;
    callories += this.size.callories;
    this.stuffing.forEach((el) => {
        callories += el.callories;
    });
    return callories;
}

/**
* Представляет информацию об ошибке в ходе работы с гамбургером. 
* Подробности хранятся в свойстве message.
* @constructor 
*/
function HamburgerException(message) {
    this.name = "Hamburger Exception";
    this.message = message;
    toString = function () { return this.name + ": " + this.message; }
}

HamburgerException.prototype = new Error;
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1


// не передали обязательные параметры
//var h2 = new Hamburger(); // => HamburgerException: no size given
                   
// передаем некорректные значения, добавку вместо размера
//var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 
// HamburgerException: duplicate topping 'TOPPING_MAYO'