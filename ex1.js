"use strict";
class Shape {
    info() {
        console.log("this is a shape");
    }
    draw() {
        console.log('drawing a shape');
    }
}
// 1)
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        const area = this.length * this.width;
        return area;
    }
    info() {
        console.log('this is a rectangle');
    }
}
// let rect1 = new Rectangle(5, 5);
// rect1.info()
class ColoredRectangle extends Rectangle {
    constructor(length, width, color) {
        super(length, width);
        this.color = color;
    }
    info() {
        console.log(`this is a ${this.color} rectangle`);
    }
}
// 2)
class Square extends Shape {
    constructor(rib) {
        super();
        this.rib = rib;
    }
    area() {
        const area = Math.pow(this.rib, 2);
        console.log(area);
    }
    draw() {
        console.log('drawing a square');
    }
}
// const ribua = new Square(5);
// let ans = ribua.area()
// console.log(ans);
// 5)
class Circle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log('drawing a circle');
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log('drawing a triangle');
    }
}
function renderShapes(shapesArr) {
    for (let i = 0; i < shapesArr.length; i++) {
        shapesArr[i].draw();
    }
}
// let ball = new Circle;
// let pizza = new Triangle;
// let door = new Square(5);
// let mashu = new Shape;
// const myArr = [ball, pizza, door, mashu];
// renderShapes(myArr);
