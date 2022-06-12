/* 
Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. 
*/

function map(func, array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray;
}

// Test function 

function addOne(a = 0) {
    return a + 1;
}

let array = [1, 2, 3, 4 ,5 ,6 ,7];

document.write(map(addOne, array));