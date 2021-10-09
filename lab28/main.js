var number =[1,5,3,6,9,12]

var t0 = performance.now();
number.shift();
var t1 = performance.now();

var t2 = performance.now();
number.pop();
var t3 = performance.now();

if ((t1 - t0) < (t3 - t2)) {
    console.log("True");}
else
    {
        console.log("False");

}
//console.log("Call to shift took " + (t1 - t0) + " milliseconds." )
//console.log("Call to pop took " + (t3 - t2) + " milliseconds.")