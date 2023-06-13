const numb3 = Number (prompt("Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100`  ::::>       enter your number:"))
if (numb3 < 100) {
    console.log(" number is <100")
} else {
    if (numb3 > 100) {
        console.log(" number is >100")
    } else {
        if (numb3 === 100) {
            console.log(" number is = 100")
        } else {
            console.log("  enterd numbers is not  a number  ")
        }
    }
}