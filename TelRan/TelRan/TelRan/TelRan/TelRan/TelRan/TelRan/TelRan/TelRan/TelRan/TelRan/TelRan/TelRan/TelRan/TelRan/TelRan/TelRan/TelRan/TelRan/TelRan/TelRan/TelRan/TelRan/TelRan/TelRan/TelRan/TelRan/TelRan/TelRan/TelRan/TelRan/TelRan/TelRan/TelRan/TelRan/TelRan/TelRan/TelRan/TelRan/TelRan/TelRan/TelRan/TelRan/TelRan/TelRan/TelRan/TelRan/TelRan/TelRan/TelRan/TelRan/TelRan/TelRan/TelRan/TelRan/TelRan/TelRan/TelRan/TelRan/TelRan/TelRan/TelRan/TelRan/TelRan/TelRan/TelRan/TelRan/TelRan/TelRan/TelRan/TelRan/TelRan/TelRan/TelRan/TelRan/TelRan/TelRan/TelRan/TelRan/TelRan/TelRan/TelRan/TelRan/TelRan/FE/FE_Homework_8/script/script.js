// Домашнее задание 8. (после 19 урока)
// Решить следующие задачи:
console.log(`#1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.`)
const divElem = document.createElement("div")
divElem.setAttribute("class", "numbers")
const pElems = []
for (let i = 100; i >= 50; i -= 10) {
    const pElems = document.createElement("p") // <p></p>
    pElems.innerText = i // <p>{i}</p>
    divElem.appendChild(pElems)
}
document.body.prepend(divElem)
console.log(divElem);

console.log(`======== #2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.`)
const divElem2 = document.createElement("div")
divElem2.setAttribute(`class`, `strings_container`)
const myArray = ['one', 'two', 'three', `eleven`, `twelve`]
const pElems2 = []
for (let i = 0; i < myArray.length; i++) {
    const pElems2 = document.createElement("p") // <p></p>
    pElems2.innerText = myArray[i] // <p>myArray[i]</p>

    divElem2.appendChild(pElems2)
}
document.body.prepend(divElem2)
console.log(divElem2);

console.log(` ====== #3 Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.`)
const divElem3 = document.createElement("div")
divElem3.setAttribute(`class`, `users_container`)
const pElems3 = []
const user = [{
        first_name: 'Petr',
        last_name: 'Ivanov',
        age: 20,
        salary: 500
    },
    {
        first_name: 'Alex',
        last_name: 'Sonner',
        age: 15,
        salary: 1500
    },
    {
        first_name: 'Mark',
        last_name: 'Chor',
        age: 26,
        salary: 450
    },
    {
        first_name: 'Serg',
        last_name: 'Custo',
        age: 17,
        salary: 150
    },
    {
        first_name: 'Alena',
        last_name: 'Prado',
        age: 22,
        salary: 1900
    }
]
for (let i = 0; i < user.length; i++) {
    const {
        first_name,
        last_name,
        age
    } = user[i]
    if (age> 18) {
        const pFirstName = document.createElement("p") // <p></p>
        pFirstName.innerText = first_name
        const pLastName = document.createElement("p") // <p></p>
        pLastName.innerText = last_name
        const pAge = document.createElement("p") // <p></p>
        pAge.innerText = age
        const divElem4 = document.createElement("div")
        divElem4.append(pFirstName, pLastName, pAge)
        divElem3.appendChild(divElem4)
    } else {
        i
    }
}
document.body.prepend(divElem3)
console.log(divElem3);