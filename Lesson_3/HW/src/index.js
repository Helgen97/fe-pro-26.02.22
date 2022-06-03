    // Создайте массив styles с элементами «Джаз» и «Блюз». 
    let styles = ['Джаз', 'Блюз'];
    document.write('Исходный массив: ' + styles);

    // Добавьте «Рок-н-ролл» в конец.
    styles.push('Рок-н-ролл');
    document.write('<br>Массив после добавления в конец элемента: ' + styles);

    // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
    var middleIndex = styles.length%2 != 1 ? styles.length/2 : Math.round((styles.length/2)) - 1;
    styles[middleIndex] = 'Классика';
    document.write('<br>Массив после изменения середины элемента: ' + styles);

    // Удалите первый элемент массива и покажите его.
    var element = styles.shift();
    document.write('<br>Массив после удаления первого элемента: ' + styles);
    document.write('<br>Удаленный элемент: ' + element);

    // Вставьте «Рэп» и «Регги» в начало массива.
    styles.unshift('Рэп', 'Регги');
    document.write('<br>Массив после вставки элементов в начало: ' + styles);
