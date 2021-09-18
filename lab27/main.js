/*
1. Написать функцию, которая принимает 2 числа и возвращает
-1, если первое меньше, чем второе;
1 – если первое больше, чем второе;
и 0 – если числа равны.
*/
function firstTask(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return 0
    } else {
        if (firstNumber > secondNumber) {
            return 1;
        } else
            return -1;
    }
}
/*
2. Написать функцию, которая вычисляет факториал переданного ей числа.
*/
function factorial (targetNumber) {
    let result =1;

    for (let i = 2; i <= targetNumber; i++)
        result = result * i;

    return result;
}
/*
3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
Например: цифры 1, 4, 9 превратятся в число 149.
*/
function joinNumber (firstNumber, secondNumber, thirdNumber) {
    return firstNumber * 100 + secondNumber * 10 + thirdNumber;
}
/*
4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
*/
function areaCalc (height, width) {
    if (width === undefined)
        width = height;

    return height * width;
}
/*
5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
Совершенное число – это число, равное сумме всех своих собственных делителей.
*/
function numberIsPerfect (number) {
    let divisorsSum = 0;

    for (let i = 1; i < number; i++)
        if (number % i === 0)
            divisorsSum += i;

    return number === divisorsSum;
}
/*
6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
и выводит только те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
*/
function perfectNumbersInRange(number) {
    let perfectNumbers = [];

    for (let i = 1; i < number; i++)
        if (numberIsPerfect(i))
            perfectNumbers.push(i);

    return perfectNumbers;
}
/*
7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
*/
function showTime(hours, minutes, seconds) {
    if (seconds == null)
        seconds = 0;

    if (minutes == null)
        minutes = 0;

    if (seconds < 10)
        seconds = '0'+ seconds;

    if (minutes < 10)
        minutes = '0'+ minutes;

    if (hours < 10)
        hours = '0'+ hours;

    return hours + ':' + minutes + ':' + seconds;
}
/*
8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
*/
const SECONDSINONEMINUTE = 60;
const SECONDSINONEHOUR = 60 * SECONDSINONEMINUTE;

function timeInSeconds(seconds, minutes, hours) {
    if (hours == null)
        hours = 0;

    if (minutes == null)
        minutes = 0;

    return seconds + minutes * SECONDSINONEMINUTE + hours * SECONDSINONEHOUR;
}
/*
9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
*/
function secondsToTime(seconds) {
    let hours = Math.floor(seconds / SECONDSINONEHOUR);
    seconds -= hours * SECONDSINONEHOUR;

    let minutes = Math.floor(seconds / SECONDSINONEMINUTE);
    seconds -= minutes * SECONDSINONEMINUTE;

    return showTime(hours, minutes, seconds);
}
/*
10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
При выполнении задания используйте функции из предыдущих 2-х заданий:
сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
 */
function timeDiff(firstHours, secondsHours, firstMinutes, secondMinutes, firstSeconds, secondSeconds) {
    let firstTimeInSeconds = timeInSeconds(firstSeconds, firstMinutes, firstHours);
    let secondTimeInSeconds = timeInSeconds(secondSeconds, secondMinutes, secondsHours);

    let timeDiffInSeconds = firstTimeInSeconds - secondTimeInSeconds;

    return secondsToTime(timeDiffInSeconds);
}