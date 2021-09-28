/*1. Создать массив «Список покупок». Каждый элемент массива является объектом,
 который содержит название продукта, необходимое количество и куплен или нет.
  Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

let productsDemo = [
    {
        name: "Potato",
        amount: 0,
        available: false
    },
    {
        name: "Juice",
        amount: 15,
        available: true
    },
    {
        name: "Milk",
        amount: 0,
        available: false
    }
];

function sortByBought(array) {
    return array.sort(function (a, b) {
        if (a.available > b.available) {
            return -1;
        } else if (a.available < b.available) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortByBought(productsDemo);

function printProducts(productsArray) {
    for (let index = 0; index < productsArray.length; ++index) {
        console.log(productsArray[index]);
    }
}

printProducts(productsDemo);

function addNewProduct(productsList, product) {
    let updated = false;

    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name === product.name) {
            productsList[i].available = product.available;
            productsList[i].amount += product.amount;
            updated = true;
            break;
        }
    }

    if (!updated)
        productsList.push(product);

    return productsList;
}

const product1 = {
    name: "Milk",
    amount: 6,
    available: true
}

addNewProduct(productsDemo, product1);
console.log("With added product:\n");

sortByBought(productsDemo)

printProducts(productsDemo);

const product2 = {
    name: "Milka",
    amount: 20,
    available: true
}

addNewProduct(productsDemo, product2);
console.log("With added product:\n");

printProducts(productsDemo);

function buyProduct(receiptProducts, product) {
    for (let i = 0; i < receiptProducts.length; i++) {
        if (receiptProducts[i].name === product.name) {
            receiptProducts[i].available = false;
            receiptProducts[i].amount = 0;
        }
    }
}

buyProduct(productsDemo, product2);
console.log("With deleted product:\n");

printProducts(productsDemo);

/*2. Создать массив, описывающий чек в магазине.
Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.*/
let receiptDemo = [
    {
        name: "Potato",
        amount: 2,
        price: 9.50
    },
    {
        name: "Milk",
        amount: 1,
        price: 20
    },
    {
        name: "Meat",
        amount: 3,
        price: 225.50
    }
];

function printReceipt(receipt) {
    for (let index = 0; index < receipt.length; ++index) {
        console.log(receipt[index]);
    }
}

console.log("Receipt:\n");
printReceipt(receiptDemo);

function countSum(receipt) {
    let sum = 0;
    for (let index = 0; index < receipt.length; ++index) {
        let item = receipt[index];
        sum += item.amount * item.price
    }
    return sum;
}

console.log("Sum: " + countSum(receiptDemo));

function maxPrice(receipt) {
    let maxPrice = null;
    let maxPriceItem = null;
    for (let index = 0; index < receipt.length; ++index) {
        let item = receipt[index];
        let totalPrice = item.amount * item.price;
        if (totalPrice > maxPrice) {
            maxPriceItem = item;
        }
    }
    return maxPriceItem;
}

console.log("MaxPrice:");
console.log(maxPrice(receiptDemo));

function avgPrice(receipt) {
    let allPrice = 0;
    for (let index = 0; index < receipt.length; ++index) {
        let item = receipt[index];
        allPrice += item.price;
    }
    return allPrice / receipt.length;
}

console.log("AvgPrice:");
console.log(avgPrice(receiptDemo));
/*3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.*/

styles = [
    {
        name: "font-size",
        value: "30px"
    }
]

function writeStylizedDeprecated(message, styles) {
    let stylesAttributeValue = "";
    for (let i = 0; i < styles.length; i++) {
        let style = styles[i];
        stylesAttributeValue += style.name + ": " + style.value + ";";
    }

    document.write("<p style='" + stylesAttributeValue + "'>" + message + "</p>"); // Deprecated, so, working DOM solution is next
}

function writeStylized(message, styles) {
    let paragraph = document.createElement("p");

    for (let i = 0; i < styles.length; i++) {
        let style = styles[i];
        paragraph.style[style.name] = style.value;
    }

    let text  = document.createTextNode(message);
    paragraph.appendChild(text);

    document.body.appendChild(paragraph);
}

writeStylized("Hello", styles);
/*4. Создать массив аудиторий академии. Объект-аудитория состоит из названия,
количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
Написать несколько функций для работы с ними:
Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы.
Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).*/

let classrooms = [
    {
        name: "AM-1",
        capacity: 15,
        faculty: "law"
    },
    {
        name: "KN-3",
        capacity: 20,
        faculty: "computer science"
    },
    {
        name: "LK-13",
        capacity: 18,
        faculty: "law"
    }
]

let group = {
    name: "LS-1",
    amount: 10,
    faculty: "law"
}

function printAll(classrooms) {
    for (let index = 0; index < classrooms.length; index++) {
        console.log(classrooms[index]);
    }
}

console.log("All classrooms:");
printAll(classrooms);

function classroomForFaculty(classrooms, faculty) {
    for (let index = 0; index < classrooms.length; index++) {
        let classroom = classrooms[index];
        if (classroom.faculty === faculty) {
            console.log(classrooms[index]);
        }
    }
}

console.log("Classrooms:");
classroomForFaculty(classrooms, "law");

function classroomForGroup(classrooms, group) {
    for (let index = 0; index < classrooms.length; index++) {
        let classroom = classrooms[index];
        if (classroom.faculty === group.faculty && classroom.capacity >= group.amount) {
            console.log(classrooms[index]);
        }
    }
}

console.log("Classrooms:");
classroomForGroup(classrooms, group);

function sortByCapacity(classrooms) {
    return classrooms.sort(function (a, b) {
        if (a.capacity > b.capacity) {
            return -1;
        } else if (a.available < b.available) {
            return 1;
        } else {
            return 0;
        }
    });
}
console.log(sortByCapacity(classrooms));

function sortByName(classrooms) {
    return classrooms.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    });
}
console.log(sortByName(classrooms));