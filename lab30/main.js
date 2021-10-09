/*1) Реализовать класс, описывающий окружность.
В классе должны быть следующие компоненты:
поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. */
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        this._diameter = this.radius() * 2;
    }

    square() {
        let square = Math.PI * Math.pow(this.radius(), 2);
        return square;
    }

    length() {
        let length = 2 * Math.PI * this.radius();
        return length;
    }
}

let circle = new Circle(5);
console.log("Radius: " + circle.radius);
circle.radius = 7;
console.log("Radius: " + circle.radius);