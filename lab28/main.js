/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
и следующие функции для работы с этим объектом:
    Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
    Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/
const  timePerSleepHour = 4;

const car = {
   producer : "Audi",
    model :"TT",
    year : 2022,
    avgSpeed : 100,
    carInfo() {
        console.log("Producer: " + this.producer +
            "\nModel: " + this.model +
            "\nYear: " + this.year +
            "\nAverage speed: " + this.avgSpeed)
    },
    time(distance) {
        let  time = distance / this.avgSpeed;
        let timeFloored = Math.floor(time);

        console.log("Time: " + (timeFloored + Math.ceil(time / timePerSleepHour)));
    }
}
console.log(car.carInfo());
console.log(car.time(900));
/*
2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
    Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.*/
const fraction1 = {
    numerator : 3,
    denominator : 5,
}
const fraction2= {
    numerator : 6,
    denominator : 9,
}

function normalizeDenominator(firstFraction, secondFraction) {
    let copyFirstFraction = Object.assign({}, firstFraction);
    let copySecondFraction = Object.assign({}, secondFraction);

    if (copyFirstFraction.denominator !== copySecondFraction.denominator) {
        copyFirstFraction.numerator *= secondFraction.denominator;
        copyFirstFraction.denominator *= secondFraction.denominator;

        copySecondFraction.numerator *= firstFraction.denominator;
        copySecondFraction.denominator *= firstFraction.denominator;
    }

    return [copyFirstFraction, copySecondFraction];
}

function greatestCommonDivisor(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return firstNumber;
    } else {
        return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);
    }
}

function reduction(fraction) {
    let smallestDivisor = greatestCommonDivisor(fraction.denominator, fraction.numerator);

    fraction.numerator /= smallestDivisor;
    fraction.denominator /= smallestDivisor;

    return fraction;
}

function add(firstFraction, secondFraction) {
    let [copyFirstFraction, copySecondFraction] = normalizeDenominator(firstFraction, secondFraction);

    copyFirstFraction.numerator += copySecondFraction.numerator;
    reduction(copyFirstFraction);
    return copyFirstFraction;
}

function minus(firstFraction, secondFraction) {
    let [copyFirstFraction, copySecondFraction] = normalizeDenominator(firstFraction, secondFraction);

    copyFirstFraction.numerator -= copySecondFraction.numerator;
    reduction(copyFirstFraction);
    return copyFirstFraction;
}

function multiply(firstFraction, secondFraction) {
    let copyFirstFraction = Object.assign({}, firstFraction);

    copyFirstFraction.numerator *= secondFraction.numerator;
    copyFirstFraction.denominator *= secondFraction.denominator;

    reduction (copyFirstFraction);
    return copyFirstFraction;
}
function divide(firstFraction, secondFraction) {
    let copyFirstFraction = Object.assign({}, firstFraction);

    copyFirstFraction.numerator *= secondFraction.denominator;
    copyFirstFraction.denominator *= secondFraction.numerator;

    reduction (copyFirstFraction);
    return copyFirstFraction;
}

console.log("Fraction1: ");
console.log(fraction1);

console.log("Fraction2: ");
console.log(fraction2);

let fraction5 = add(fraction1, fraction2);

console.log("Add: ");
console.log(fraction5 );

let fraction6 = minus(fraction1, fraction2);

console.log("Minus: ");
console.log(fraction6 );

let fraction3 = multiply(fraction1, fraction2);

console.log("Multiplication: ");
console.log(fraction3 );

let fraction4 = divide(fraction1, fraction2);

console.log("Division: ");
console.log(fraction4);

console.log("Reduction: ");
console.log(reduction(fraction2));

/*
3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
    Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов.
    Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например,
    если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».*/

const secondsInMinute = 60;
const minsInHour = 60;

const time ={
    hours: 20,
    min: 30,
    seconds: 45,
    addSeconds(seconds){
        this.seconds += seconds;
        if (this.seconds > secondsInMinute) {
            this.min += Math.floor(this.seconds / secondsInMinute);

            if (this.min > minsInHour) {
                this.hours += Math.floor(this.min / minsInHour);
                this.min = this.min % minsInHour;
            }

            this.seconds = this.seconds % secondsInMinute;
        }
    }
}

console.log(time)
console.log(time.addSeconds(5))
console.log(time)
console.log(time.addSeconds(30))
console.log(time)
console.log(time.addSeconds(3600))
console.log(time)