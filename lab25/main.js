
const AGE = +prompt("What is your age?");
//alert( typeof AGE);
if (AGE >= 0 && AGE <= 2) {
    alert("You're a child!");
} else if (AGE >= 12 && AGE < 18) {
    alert("You're a teenager!");
} else if (AGE >= 18 && AGE < 60) {
    alert("You're a adult!");
} else if (AGE >= 60) {
    alert("You're a retiree!");
} else {
    alert("Incorrect input");
}

/*----------------------------------------------*/

const num = +prompt("Input number [0,..,9]");
switch (num) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    default:
        alert("Incorrect input");
}

/*----------------------------------------------*/

var number = +prompt( "Enter a 3-digit number:");
var number1 =  parseInt(number / 100);
//alert(number1);
var number2 = parseInt(number / 10) % 10;
var number3 = number % 10;
if(number1===number2 || number2===number3 || number1===number3)
    alert("The numbers match was found");
else
    alert("The numbers match was not found");

/*----------------------------------------------*/

var year= +prompt( "Enter a year:");
if (year % 4 == 0 || year % 100 != 0 && year % 400 == 0) {
    alert("Leap year ");
}
else {
    alert("Not leap year ");
}

/*----------------------------------------------*/

var numb= +prompt( "Enter a 5-digit number:");
var numb1 =  parseInt(numb/ 10000);
var numb2 = parseInt(numb / 1000) % 10;
var numb4 = parseInt(numb / 10) % 10;
var numb5= numb % 10;
//alert("1: "+numb1+"\n2: "+numb2+"\n4: "+numb4+"\n5: "+numb5 );
if(numb1===numb5 && numb2===numb4)
    alert("The number is palindrome");
else
    alert("The number is not palindrome");

/*----------------------------------------------*/
