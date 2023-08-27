class Shape{

    info(): void {
        console.log("this is a shape");
    }
    draw(): void {
        console.log('drawing a shape');
        
    }
}
// 1)
class Rectangle extends Shape{
    length: number;
    width:number;

    constructor(length: number, width: number){
        super();
        this.length = length;
        this.width = width;
    }
    area(): number {
        const area = this.length * this.width;
        return area
    }
    info(): void {
        console.log('this is a rectangle'); 
    }
}

// let rect1 = new Rectangle(5, 5);
// rect1.info()

class ColoredRectangle extends Rectangle{
    color: string;
    constructor(length: number, width: number, color: string) {
        super(length, width)
        this.color = color
    }
    info(): void {
        console.log(`this is a ${this.color} rectangle`);
        
        
    }
}

// 2)
class Square extends Shape{
    rib:number;

    constructor(rib:number) {
        super();
        this.rib = rib;
    }
    area(): void {
        const area = this.rib **2;
        console.log(area); 
    }
    draw(): void {
        console.log('drawing a square');
    }
}

// const ribua = new Square(5);
// let ans = ribua.area()
// console.log(ans);

// 5)
class Circle extends Shape{
    constructor(){
        super()
    }
    draw(): void {
        console.log('drawing a circle');
    }
}

class Triangle extends Shape{
    constructor(){
        super()
    }
    draw(): void {
        console.log('drawing a triangle');
    }
}

type drawShapes = Shape|Triangle|Circle|Square;
function renderShapes(shapesArr: drawShapes[]) { // change the any!!!!
    for (let i: number = 0; i < shapesArr.length; i++) {
        shapesArr[i].draw()
    }
}

// let ball = new Circle;
// let pizza = new Triangle;
// let door = new Square(5);
// let mashu = new Shape;
// const myArr = [ball, pizza, door, mashu];

// renderShapes(myArr);