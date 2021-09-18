/*
1. Написать функцию, которая принимает 2 числа и возвращает
-1, если первое меньше, чем второе;
1 – если первое больше, чем второе;
и 0 – если числа равны.
*/
function first_task(first_number, second_number) {
    if (first_number == second_number) {
        return 0
    } else {
        if (first_number > second_number) {
            return 1;
        } else
            return -1;
    }
}
/*
2. Написать функцию, которая вычисляет факториал переданного ей числа.
*/
function factorial (target_number) {
    let result =1;

    for (let i = 2; i <= target_number; i++)
        result = result * i;

    return result;
}
/*
3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
Например: цифры 1, 4, 9 превратятся в число 149.
*/
function join_number (first_number, second_number, third_number) {
    return first_number * 100 + second_number * 10 + third_number;
}
/*
4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
*/
function area_calc (height, width) {
    if (width === undefined)
        width = height;

    return height * width;
}
/*
5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
Совершенное число – это число, равное сумме всех своих собственных делителей.
*/
function number_is_perfect (number) {
    let divisors_sum = 0;

    for (let i = 1; i < number; i++)
        if (number % i === 0)
            divisors_sum += i;

    return number === divisors_sum;
}
/*
6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
и выводит только те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
*/
function perfect_numbers_in_range(number) {
    let perfect_numbers = [];

    for (let i = 1; i < number; i++)
        if (number_is_perfect(i))
            perfect_numbers.push(i);

    return perfect_numbers;
}
/*
7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
*/
function show_time(hours, minutes, seconds) {
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
const SECONDS_IN_ONE_MINUTE = 60;
const SECONDS_IN_ONE_HOUR = 60 * SECONDS_IN_ONE_MINUTE;

function time_in_seconds(seconds, minutes, hours) {
    if (hours == null)
        hours = 0;

    if (minutes == null)
        minutes = 0;

    return seconds + minutes * SECONDS_IN_ONE_MINUTE + hours * SECONDS_IN_ONE_HOUR;
}
/*
9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
*/
function seconds_to_time(seconds) {
    let hours = Math.floor(seconds / SECONDS_IN_ONE_HOUR);
    seconds -= hours * SECONDS_IN_ONE_HOUR;

    let minutes = Math.floor(seconds / SECONDS_IN_ONE_MINUTE);
    seconds -= minutes * SECONDS_IN_ONE_MINUTE;

    return show_time(hours, minutes, seconds);
}
/*
10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
При выполнении задания используйте функции из предыдущих 2-х заданий:
сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
 */
function time_diff(first_hours, seconds_hours, first_minutes, second_minutes, first_seconds, second_seconds) {
    let first_time_in_seconds = time_in_seconds(first_seconds, first_minutes, first_hours);
    let second_time_in_seconds = time_in_seconds(second_seconds, second_minutes, seconds_hours);

    let time_diff_in_seconds = first_time_in_seconds - second_time_in_seconds;

    return seconds_to_time(time_diff_in_seconds);
}