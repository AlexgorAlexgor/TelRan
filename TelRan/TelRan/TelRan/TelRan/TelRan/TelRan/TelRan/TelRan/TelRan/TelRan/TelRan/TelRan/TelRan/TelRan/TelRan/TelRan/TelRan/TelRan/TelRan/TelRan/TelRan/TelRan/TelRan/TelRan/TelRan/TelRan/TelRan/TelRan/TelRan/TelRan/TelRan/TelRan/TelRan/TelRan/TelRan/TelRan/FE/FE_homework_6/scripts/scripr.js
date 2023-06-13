//Домашнее задание 6. (после 14 урока)
//Решить следующие задачи:
console.log( ` #1 Напишите цикл for, который выводит консоль каждое второе число от 0 до 10 :`)
arrEven =[]
for (let i = 1; i < 10; i+=2) arrEven.push(i)    
console.log(arrEven);
console.log( `==========================================`)

console.log( ` #2 Напишите цикл for, который выводит в консоль  все числа от 55 до 20 :`)
arrNumb=[]
for (let i = 55; i >= 20; i-=1 )arrNumb.push(i)    
console.log(arrNumb);
console.log( `==========================================`)
    
console.log( ` #3 Дан массив numbers. Вывести в консоль все числа из массива :`)
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
console.log(`==========================================`)

console.log( ` #4  Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат :`)
numbers_squared =[]
for (let i = 0; i < numbers.length; i++) { numbers_squared.push(numbers[i]**2) 
}
console.log(numbers_squared);
console.log(`==========================================`)

console.log( `#5 Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу): `)
let last_elem =numbers_squared.pop(numbers_squared.length)
console.log(last_elem);
console.log(`==========================================`)

console.log( `#6 Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’ :`)
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
    console.log(` User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)
    console.log(`==========================================`)
