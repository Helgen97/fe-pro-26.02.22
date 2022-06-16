// Разработайте функцию конструктор, которая будет создавать обьект Human
// Создайте масив обьектов и реализуйте функцию, которая будет сортировать элементы масива
// по значению свойства Age по возрастанию и по убыванию

function Human(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

let humans = [];

for (let i = 0; i < 5; i++) {
  humans.push(
    new Human(
      "firstName_" + i,
      "lastName_" + i,
      Math.floor(Math.random() * (36 - 18) + 18),
      Math.random() >= 0.5 ? "Man" : "Woman"
    )
  );
}

function show(humansArray = []) {
  document.getElementById("humans").innerHTML = "";
  humansArray.forEach(
    (human, index) =>
      (document.getElementById("humans").innerHTML = document
        .getElementById("humans")
        .innerHTML.concat(
          "<p>Human " +
            index +
            ": " +
            human.firstName +
            " " +
            human.lastName +
            ". Age: " +
            human.age +
            ". Gender: " +
            human.gender +
            "</p>"
        ))
  );
}

show(humans);

function sortAsc(humans = []) {
    let sortedHumans = humans;

    for (let i = 1 ; i < sortedHumans.length; i++) {
        const current = sortedHumans[i];
        while (i > 0 && sortedHumans[i - 1].age > current.age) {
            sortedHumans[i] = sortedHumans[i - 1];
            i--;
        }
        sortedHumans[i] = current;
    }
    
    
    show(sortedHumans);
}

function sortDesc(humans = []) {
    let sortedHumans = humans;

    for (let i = 1 ; i < sortedHumans.length; i++) {
        const current = sortedHumans[i];

        while (i > 0 && sortedHumans[i - 1].age < current.age) {
            sortedHumans[i] = sortedHumans[i - 1];
            i--;
        }
        sortedHumans[i] = current;
    }
    
    show(sortedHumans);
}
