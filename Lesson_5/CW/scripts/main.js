/*
Создайте объект криптокошилек. 
В кошельке должно хранится имя владельца, несколько валют Bitcoin, Ethereum, Stellar 
и в каждой валюте дополнительно есть имя валюты, логотип, несколько монет и курс на сегодняшний день.
Также в объекте кошелек есть метод при вызове которого он принимает имя валюты и выводит на страницу информацию.
"Добрый день, ... ! На вашем балансе (Название валюты и логотип) осталось N монет, если вы сегодня продадите их то, получите ...грн. 
Вывод на страницу должен быть красиво формлен с использованием css и html.
*/

const wallet = {
  name: "Vova",
  btc: {
    name: "Bitcoine",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>",
    rate: "30245.99",
    coin: "54",
  },
  etn: {
    name: "Ethereum",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'>",
    rate: "1801.98",
    coin: "27",
  },
  xlm: {
    name: "Stellar",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png'>",
    rate: "0.1402",
    coin: "37",
  },
  show: function (nameCoine) {
    document.getElementById("wallet").innerHTML = `Добрый день, ${
      wallet.name
    }! На вашем балансе ${wallet[nameCoine].name}${
      wallet[nameCoine].logo
    } осталось ${
      wallet[nameCoine].coin
    } монет, если вы сегодня продадите их то, получите ${(
      wallet[nameCoine].rate *
      wallet[nameCoine].coin *
      31
    ).toFixed(2)}грн.`;
  },
};

wallet.show(prompt("Веддіть назви монет:", "btc,etn,xlm"));
