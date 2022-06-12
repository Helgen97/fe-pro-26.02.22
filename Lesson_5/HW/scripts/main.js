/*
Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата".
Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты,
"Заголовок, тело, футер, дата". Создать методы для заполнения и отображения документа.
*/

const doc = {
  title: "",
  body: "",
  footer: "",
  date: "",
  addition: {
    title: "",
    body: "",
    footer: "",
    date: "",

    setTitle: function (title) {
      this.title = title;
    },

    setBody: function (body) {
      this.body = body;
    },

    setFooter: function (footer) {
      this.footer = footer;
    },

    setData: function (date) {
      this.date = date;
    },
  },

  setTitle: function (title) {
    this.title = title;
  },

  setBody: function (body) {
    this.body = body;
  },

  setFooter: function (footer) {
    this.footer = footer;
  },

  setData: function (date) {
    this.date = date;
  },

  showInfo: function () {
    document.body.innerHTML = "";

    document.write("<link rel='stylesheet' href='./styles/style.css'>");
    document.write(
      "<div class='back'><button onclick='backButton()'>Назад</button></div>"
    );

    document.write("<div class='doc'><p class='title'>" + this.title + "</p>");
    document.write("<p class='body'>" + this.body + "</p>");
    document.write("<div class='footer'><p>" + this.footer + "</p>");
    document.write("<p>" + this.date + "</p></div></div>");

    document.write(
      "<div class='doc'><p class='title'>" + this.addition.title + "</p>"
    );
    document.write("<p class='body'>" + this.addition.body + "</p>");
    document.write("<div class='footer'><p>" + this.addition.footer + "</p>");
    document.write("<p>" + this.addition.date + "</p></div></div>");
  },
};

function fillDocument() {
  doc.setTitle(prompt("Введите оглавление: ", "Оглавление"));
  doc.setBody(prompt("Введите тело документа: ", "Тело документа"));
  doc.setFooter(prompt("Введите футер документа: ", "Футер документа"));
  doc.setData(prompt("Введите дату: ", "Текущая дата"));

  doc.addition.setTitle(
    prompt("Введите оглавление приложения: ", "Оглавление приложения")
  );
  doc.addition.setBody(prompt("Введите тело приложения:", "Тело приложения"));
  doc.addition.setFooter(
    prompt("Введите футер приложения: ", "Футер приложения")
  );
  doc.addition.setData(prompt("Введите дату приложения", "Завтрашняя дата"));
}

function backButton() {
  document.body.innerHTML = "";
  document.write(
    "<div class='block'><button onclick='fillDocument()'>Заполнить документ</button><button onclick='doc.showInfo()'>Ознакомится с документом</button></div>"
  );
}
