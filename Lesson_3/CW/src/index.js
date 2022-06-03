var array = [1, 2, "three", "four", "five", 6, 7, 8 ,9 ,10, 11, 12, 13, 14, true];

var reverseArray = array.reverse().join('&#9729;');

document.write("Исходный массив: " + array);

document.write("<br>");

document.write("Измененный массив: " + reverseArray);

document.write("<br>");

var index = Number(prompt("Какой элемент удаляем?"));

if(index >= 0 && index < array.length) {
    array.splice(index, 1);
    document.write("Массив после удаления указаного индекса: " + array);
} else {
    alert("Указанный индекс не подходит!");
}

