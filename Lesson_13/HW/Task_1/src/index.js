class Character {

    constructor({ name, height, mass, hair_color, birth_year, gender }) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.birth_year = birth_year;
        this.gender = gender;
    }

}

class Card {

    constructor(character = Character) { 
        this.character = character;
    };

    saveCharacter = () => {
        localStorage.setItem(this.character.name, JSON.stringify(this.character));
    }

    removeCharacter = () => {
        localStorage.removeItem(this.character.name)
    }

    createCard = () => {
        const div = document.createElement("div");
        div.classList.add("card");

        for (let key in this.character) {
            let p = document.createElement("p");
            let span = document.createElement("span");

            span.innerText = key + ": ";
            p.innerText = this.character[key];
            p.prepend(span)
            div.append(p);
        }

        const saveButton = document.createElement("button")
        saveButton.innerText = "Save Character"
        saveButton.addEventListener("click", this.saveCharacter);

        const removeButton = document.createElement("button")
        removeButton.innerText = "Remove Character"
        removeButton.addEventListener("click", this.removeCharacter);
        div.append(saveButton, removeButton)
        return div;
    }
}

const cardBox = document.querySelector(".box");

const responce = fetch("https://swapi.dev/api/people", {
    method: "GET"
}).then(responce => {
    return responce.json()
}).catch(error => {
    console.error(error)
}).finally(() => {
    console.log("Fetching done");
});

responce.then((data) => {
    data.results.forEach(element => {
        let character = new Character(element);
        let card = new Card(character);
        cardBox.append(card.createCard());
    });
})

