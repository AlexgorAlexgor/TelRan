//Домашнее задание 10. (после 24 урока) Решить следующие задачи:
// === #1 Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль
const formElem = document.createElement("form")
formElem.setAttribute("id", "myForm")

const divElem = document.createElement("div")
divElem.classList.add("users-container")
document.body.append(formElem, divElem)

const inputFirstName = document.createElement("input")
inputFirstName.setAttribute("placeholder", "firstname")
inputFirstName.setAttribute("id", "firstName")
const labelInputFirstName = document.createElement("label")
labelInputFirstName.innerText = ("firstname")
labelInputFirstName.setAttribute("for", "firstName")
formElem.append(labelInputFirstName, inputFirstName)

const inputLastName = document.createElement("input")
inputLastName.setAttribute("placeholder", "lastName")
inputLastName.setAttribute("id", "lastName")
const labelInputLastName = document.createElement("label")
labelInputLastName.innerText = ("lastName")
labelInputLastName.setAttribute("for", "lastName")
formElem.append(labelInputLastName, inputLastName)

const inputAge = document.createElement("input")
inputAge.setAttribute("placeholder", "age")
inputAge.setAttribute("id", "age")
const labelInputAge = document.createComment("label")
labelInputAge.innerText = ("age")
//labelInputAge.setAttribute("for", "age")
formElem.append(labelInputAge, inputAge)

const buttonElem = document.createElement("button")
buttonElem.innerText = "Output  data "
formElem.append(buttonElem)

let users = [] // Массив для хранения пользователей

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    // Получаем значения полей
    let firstName = document.getElementById('firstName').value; // users.firstNameUsers = firstName
    let lastName = document.getElementById('lastName').value; // users.lastNameUsers = lastName
    let age = document.getElementById('age').value; // users.ageUsers = age
    // Выводим собранные данные в консоль
    console.log('Имя:', firstName);
    console.log('Фамилия:', lastName);
    console.log('Возраст:', age);
    newUser(firstName, lastName, age)
    rerender()
    // Очищаем значения инпутов
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
})
// Инициализация: создание карточек при загрузке страницы (если есть пользователи в массиве)
// if (users.length > 0) {

// }
// === #2 Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
function newUser(firstName, lastName, age) {
    let user = {
        firstName,
        lastName,
        age
    }
    users.push(user); // Добавляем пользователя в массив
    console.log("Добавлен новый пользователь:"); // Выводим данные в консоль
    console.log(users);
}
// === #3 Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.


function rerender() {
    const cardContainer = document.createElement("div")
    divElem.innerHTML = "" // Очищаем контейнер
    cardContainer.classList.add("card")
    for (let i = 0; i < users.length; i++) { //создает множество карточек с пользователями из массива
        let user = users[i]
        let pElem = document.createElement("p")
        pElem.innerText = ('Имя:' + user.firstName)
        cardContainer.append(pElem)
        pElem = document.createElement("p")
        pElem.innerText = ('Фамилия:' + user.lastName)
        cardContainer.append(pElem)
        pElem = document.createElement("p")
        pElem.innerText = ('Возраст:' + user.age)
        cardContainer.append(pElem)
        divElem.append(cardContainer)

        document.querySelector(".card").addEventListener("dblclick", function (event) {
            const userId = event.target.dataset.userId;
            users.splice(userId, 1);

            // cardContainer.classList.remove("click")
            // cardContainer.innerHTML=""
        })
    }
}
rerender

// // === #4 Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.