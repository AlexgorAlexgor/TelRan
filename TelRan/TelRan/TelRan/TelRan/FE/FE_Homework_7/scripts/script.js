//Домашнее задание 7. (после 17 урока)
//Решить следующие задачи:
console.log(`#1 Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.`)

function min(a, b) {
    if (a > b) return b
    else return a
}
console.log(`#1.1 min number is: ${min(5,8)}`)
console.log(`===============================`)
const min1 = (a, b) => a < b ? a : b
console.log(`#1.2 min number is: ${min(9,8)}`)
console.log(`===============================`)

console.log(` #2 Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.`)

function printEversInRange(max, min) {
    if (max < min) {
        max = min + max //14  11  25
        min = max - min // 11
        max = max - min //14
    }
    if (max % 2 !== 0) max--
    for (let i = max; i >= min; i -= 2) console.log(i);
}
printEversInRange(12, 1)
console.log(`============< 12 , 1  >==================`)
printEversInRange(10, 13)
console.log(`=============< 10 , 13  >==================`)
console.log(`===============================`)

console.log(` #3 Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.`)

function power(base, power = 2) {
    console.log(`число ${base} в  степени 2 :`);
    return base ** 2
}
console.log(power(7))
console.log(`===============================`)

console.log(` #4 Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n. :`)

function sumOneN(n) {
    let sum = 0
    if (n >= 1) {
        for (let i = 1; i < n + 1; i++) {
            sum += i
        }
    } else {
        console.log(`entered number <1`)
        return
    }
    return sum
}
console.log(`сумму чисел от 1 до n.: ${sumOneN(7 )}`);
console.log(`===============<  7  >================`)

console.log(` #5 Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).`)

function sumEvenOdd(n, m) {
    let sumEven = 0
    let sumOdd = 0
    console.log(`сумму  чисел от n :${n} до m: ${m}`);
    if (n > m) {
        m = m + n
        n = m - n
        m = m - n
    }
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i
        } else {
            sumOdd += i
        }
    }
    console.log(`суммa четных чисел : ${sumEven} суммa нечетныхчисел : ${sumOdd}`);

    return sumEven, sumOdd
}
sumEvenOdd(7, 3)
console.log(`==========< 7  , 3 >=====================`)
sumEvenOdd(2, 15)
console.log(`==========< 2  , 15 >=====================`)
console.log(`===============================`)

console.log(` #6   Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. [ 'one', 'two', 'three' ] => 'three' .`)

function findLongestElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    let longestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestElement.length) {
            longestElement = arr[i];
        }
    }
    return longestElement;
}
const myArray = ['one', 'two', 'three', `eleven`, `twelve`];
const result = findLongestElement(myArray);
console.log(result); // Вывод: 'eleven'
console.log(`==========< ['one', 'two', 'three', 'eleven', 'twelve'] >==============`)
const nullArray = []
const result1 = findLongestElement(nullArray);
console.log(result1); // Вывод: 'null'
console.log(`==========< [] >=====================`)

