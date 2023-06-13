// === Домашнее задание 9. (после 22 урока)  Решить следующие задачи:
// #1 Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
// Создаем кнопку
const buttonRed = document.createElement("button")
buttonRed.innerText = "Change red square"
const squareRed = document.createElement("p"); // Создаем красный квадрат
squareRed.innerText = " #1 Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px."
squareRed.style.width = "200px";
squareRed.style.height = "200px";
squareRed.style.fontSize = "18px";
squareRed.style.backgroundColor = "red";
document.body.append(squareRed, buttonRed)
buttonRed.addEventListener("click", function () { //Обработчик события клика на кнопку
    squareRed.style.backgroundColor = "green"; // Изменяем цвет заднего фона на зеленый
    squareRed.style.fontSize = "8px";
    squareRed.style.width = "100px"; // Уменьшаем размеры квадрата до 100x100px
    squareRed.style.height = "100px";
});
// #2 Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const buttonPink = document.createElement("button") // Создаем кнопку
buttonPink.innerText = "Change pink square";
const squarePink = document.createElement("p"); // Создаем розовый квадрат
squarePink.innerText = " #2 Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата."
squarePink.style.width = "200px";
squarePink.style.height = "200px";
squarePink.style.backgroundColor = "pink "
document.body.append(squarePink, buttonPink)
buttonPink.addEventListener("click", function () { //Обработчик события клика на кнопку
    squarePink.style.backgroundColor = "blue"; // Изменяем цвет заднего фона на синий
    console.log("При клике цвет квадрата :", squarePink.style.backgroundColor);
});
// #3 Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const buttonWhite = document.createElement("button") // Создаем кнопку
buttonWhite.innerText = "Change white square";
const squareWhite = document.createElement("p"); // Создаем  квадрат
squareWhite.innerText = " #3 Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px."
squareWhite.style.width = "150px";
squareWhite.style.height = "150px";
squareWhite.style.border = "solid"
squareWhite.style.backgroundColor = "aliceblue"
document.body.append(squareWhite, buttonWhite)
buttonWhite.addEventListener("click", function () { //Обработчик события клика на кнопку
    squareWhite.style.width = "170px";
    squareWhite.style.height = "170px";
});
// === #4 Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
const buttonDiv = document.createElement("button") // Создаем кнопку
buttonDiv.innerText = " Into div at p with blue-color";
const elemDiv = document.createElement("div"); // Создаем  div
elemDiv.classList.add("root") // Создаем  class
elemDiv.innerText = " #4 Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный."
document.body.append(elemDiv, buttonDiv)
buttonDiv.addEventListener("click", function () { //Обработчик события клика на кнопку
    const elemP = document.createElement("p"); // Создаем параграф
    elemDiv.append(elemP)
    elemP.style.backgroundColor = "blue"; //параграф синего цвета
    elemP.innerText = " #4 Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный."
});
//==== #5 Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const buttonDivTwoColors = document.createElement("button") // Создаем кнопку
buttonDivTwoColors.innerText = " Into div at pp with two-colors";
const elemDivTwoColors = document.createElement("div"); // Создаем  div
elemDivTwoColors.classList.add("root") // Создаем  class
elemDivTwoColors.innerText = " #5 Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий."
document.body.append(elemDivTwoColors, buttonDivTwoColors)
buttonDivTwoColors.addEventListener("click", function () { //Обработчик события клика на кнопку
    const elemParTwoColors = document.createElement("p"); // Создаем параграф
    elemDivTwoColors.append(elemParTwoColors)
    elemParTwoColors.style.backgroundColor = "blue"; //параграф синего цвета
    elemParTwoColors.innerText ="параграф синего цвета"
})
buttonDivTwoColors.addEventListener("click", function () { //Обработчик события клика на кнопку
    const elemParTwoColors = document.createElement("p"); // Создаем параграф
    elemDivTwoColors.append(elemParTwoColors)
    elemParTwoColors.style.backgroundColor = "green"; //параграф зеленого цвета
    elemParTwoColors.innerText ="параграф зеленого цвета"
})