const name4 = (prompt("Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний  :::>>>    enter your name"))
const numb4 = Number(prompt("enter your age (in years)"))
if (numb4 < 18) {
    console.log(`Hi , ${name4}`)
}
    else {
     if (numb4 >= 18) 
     {console.log(`Hello , ${name4}`) }
else {
            console.log(" enterd age is not  a number  ")
        }
    }