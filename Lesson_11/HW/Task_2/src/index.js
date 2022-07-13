// Создай список состоящий из 4 листов. 
// Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу синий фон, а 3 красный

const ul = document.querySelector("ul");

const [...li] = ul.children;

li[1].previousElementSibling.style.background = "blue";

li[1].nextElementSibling.style.background = "red";