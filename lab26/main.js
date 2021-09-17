/*
var a = +prompt("From:");
var n= +prompt("To:");
var sum = 0;

while(a <= n){
    sum+=a;
    a++;
}
alert(sum);

/*----------------------------------------------*/
/*
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
 */
/*----------------------------------------------*/
var num= +prompt("Your number:");
var arr = [];
if(num < 0)
{num = num * -1;}
for (let i = 1; i <= num; i++) {

    if (num % i == 0)
    {
        arr.push(i);
    }
}
console.log(arr);