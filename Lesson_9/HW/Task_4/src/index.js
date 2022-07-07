/**
    Створіть слайдер кожні 3 сек змінюватиме зображення 
 */

const div = document.createElement("div");
div.classList.add("container");

const image = document.createElement("img");
image.setAttribute("src", "https://pets.24tv.ua/resources/photos/news/202102/1531386.jpg?v=1612353531000&w=1200&h=675&fit=cover")
div.append(image);

document.body.append(div);


let imageIndex = 0;
let showImages = [
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/02A7/production/_102697600_gettyimages-103131833.jpg",
    "https://life.pravda.com.ua/images/doc/7/f/7f87247-kit-golov.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Коти.jpg",
    "https://www.vezha.org/wp-content/uploads/2020/02/gallery-156995_5-e1581953350125.jpg",
    "https://kozhen.in.ua/wp-content/uploads/2021/04/cats001.jpg"
];

const slide = () => {
    image.setAttribute('src', showImages[imageIndex]);
    imageIndex++;
    if (imageIndex === showImages.length) imageIndex = 0;
}

const show = () => {
    setInterval(slide, 3000);
}

show()


