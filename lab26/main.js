
//1
/*
var a = +prompt("From:");
var n= +prompt("To:");
var sum = 0;

while(a <= n){
    sum+=a;
    a++;
}
alert(sum);


//2
var num1= +prompt("First:");
var num2= +prompt("Second:");

    if (num1 == 0){
        alert("GCD: "+num2);
    }
    while (num2 != 0) {
        if (num1 > num2)
            num1 = num1 - num2;
        else
            num2 = num2 - num1;
    }
 alert("GCD: "+num1);

//3

var num= +prompt("Your number:");
var arr = [];

if(num < 0)
    num *= -1;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        arr.push(i);
    }
}
console.log(arr);

//4
var num= +prompt("Your number:");
console.log(num.toString().length);

 //5
var stats = {
    'positive': 0,
    'negative': 0,
    'zeroes': 0,
    'odd': 0,
    'even': 0
};

for(let i = 1; i <= 10; i++) {
   let number = parseInt(prompt("Your number #" + i + ": "));

    if (number == 0) {
        stats.zeroes++;
    } else {
        if (number > 0)
            stats.positive++;
        else
            stats.negative++;

        if (number % 2)
            stats.odd++;
        else
            stats.even++
    }
}

console.log(stats);

//6
do {
    let first_number = parseInt(prompt("First number:"));
    let action = prompt("Action:");
    let second_number = parseInt(prompt("Second number:"));

    let result = undefined;

    switch (action) {
        case '*':
            result = first_number * second_number;
            break;

        case '/':
            result = first_number / second_number;
            break;

        case '+':
            result = first_number + second_number;
            break;

        case '-':
            result = first_number - second_number;
            break;

        default:
            alert("Wrong action");

    }

    if (typeof result != "undefined")
        alert("Result: " + result);
} while (confirm("Do you want another calculation?"));

  //7
let move_number = prompt("Number: ");
let move_offset = parseInt(prompt("Offset: "));

let move_number_length = move_number.length;

let full_length_offset_repeats = parseInt(move_offset / move_number_length);
move_offset -= full_length_offset_repeats * move_number_length;

if (move_offset)
    move_number = move_number.substr(move_offset,move_number_length - move_offset) + move_number.substr(0, move_offset);

console.log(move_number);

//8
let current_date = new Date();
while (confirm("Now is " + current_date.toLocaleString(window.navigator.language, {weekday: 'long'}) + ". Do you want know next day name?"))
    current_date.setDate(current_date.getDate() + 1);

//9
let table = document.createElement("table")

let table_head = document.createElement("thead");
let row = document.createElement("tr");
for(let i = 0; i <= 10; i++) {
    let cell = document.createElement("th");
    let cell_text = document.createTextNode(i ? i : '#');
    cell.appendChild(cell_text);
    row.appendChild(cell);
}
table_head.appendChild(row);
table.appendChild(table_head);

let table_body = document.createElement("tbody");
for(let i = 2; i < 10; i++) {
    let row = document.createElement("tr");

    let cell = document.createElement("td");
    let cell_text = document.createTextNode(i);
    cell.appendChild(cell_text);
    row.appendChild(cell);

    for(let j = 1; j <= 10; j++) {
        let cell = document.createElement("td");
        let cell_text = document.createTextNode(i * j);
        cell.appendChild(cell_text);
        row.appendChild(cell);
    }
    table_body.appendChild(row);
}
table.appendChild(table_body);

var body = document.getElementsByTagName("body")[0];

body.appendChild(table);
*/
//10
let sign = undefined;

let number_from_n = 0;
let number_to_n = 100;

alert("Загадайте число от " + number_from_n + " до " + number_to_n + ".");
let half_of_number_to_n = 0;

while (sign != "=") {
    half_of_number_to_n = Math.round((number_to_n -  number_from_n) / 2) + number_from_n;

    if (number_to_n == 1)
        half_of_number_to_n = 0;

    if (half_of_number_to_n == number_to_n) {
        break
    }

    sign = prompt("Введите, знак > если Ваше число больше чем " + half_of_number_to_n + ", < если меньше или еквивалетно " + half_of_number_to_n + " и знак = если равно "+ number_to_n + ". Нажмите кнопку отмены чтоб прекратить игру.");

    if (sign === null)
        break;

    switch (sign) {
        case ">":
            number_from_n = half_of_number_to_n;
            break;

        case "<":
            number_to_n = half_of_number_to_n;
            break;

        case "=":
            half_of_number_to_n =number_to_n;
            break;

        default:
            alert("Вы ввели неправильный знак. Можно только <, > и =.")
    }
}

if (sign !== null)
    alert("Вы загадали число: " + half_of_number_to_n);