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
