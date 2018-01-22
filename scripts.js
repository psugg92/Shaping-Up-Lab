class Shape {
    constructor(side, number) {
        this.side = side
        this.number = number
    //this.stringProperties = "I am a undefined sort of shape."
    }

    createShape() {
        $('#canvas').append($(`<div class="square" id="${this.number}"></div>`))
        $(`#${this.number}`).css({height: `${this.side}px`})
        $(`#${this.number}`).css({width: `${this.side}px`})
        $(`#${this.number}`).css(`top`, `${getRandomTop()}px`)
        $(`#${this.number}`).css(`left`, `${getRandomLeft()}px`)
    }

    describe() {
            //example
            // $('#Description').text(this.stringProperties);

        if ($(event.target).hasClass("rectangle")) {
            $('#ShapeName').text("Shape Name: Rectangle")
            let width = $(`#${event.target.id}`).width();
            let recLength = $(`#${event.target.id}`).height();
            $('#Width').text(`Shape Width: ${width} units`)
            $('#Height').text(`Shape Height: ${recLength} units`)
            $('#Area').text(`Shape Area: ${recLength * width} units`)
            $('#Perimeter').text(`Shape Perimeter: ${(2 * recLength) + (2 * width)} units`)
        } else if ($(event.target).hasClass("square")) {
            $('#ShapeName').text("Shape Name: Square")
            let width = $(`#${event.target.id}`).width();
            $('#Width').text(`Shape Width: ${width} units`)
            $('#Height').text(`Shape Height: ${width} units`)
            $('#Area').text(`Shape Area: ${width * width} units`)
            $('#Perimeter').text(`Shape Perimeter: ${4 * width} units`)
        } else if ($(event.target).hasClass("circle")) {
            $('#ShapeName').text("Shape Name: Circle")
            let width = $(`#${event.target.id}`).width();
            $('#Width').text(`Shape Width: ${width} units`)
            $('#Height').text(`Shape Height: ${width} units`)
            $('#Radius').text(`Shape Radius: ${(width / 2)} units`)
            $('#Area').text(`Shape Area: ${(((width/2)^2)*(3.14159))} units`)
            $('#Perimeter').text(`Shape Perimeter: ${2 * (3.14159) * (width/2)} units`)
        } else if ($(event.target).hasClass("triangle")) {
            $('#ShapeName').text("Shape Name: Triangle")
            let triArray = []
            triArray.push($(event.target).text());
            $('#Width').text(`Shape Width: ${triArray[0]} units`)
            $('#Height').text(`Shape Height: ${triArray[0]} units`)
            $('#Area').text(`Shape Area: ${(triArray[0] * triArray[0]) / 2} units`)
            $('#Perimeter').text(`Shape Perimeter: ${(Math.sqrt((triArray[0] * triArray[0]) + (triArray[0] * triArray[0]))) + (triArray[0] * 2)} units`)
        } else {
            $('#ShapeName').text("Shape Name:")
            $('#Width').text(`Shape Width: 0 units`)
            $('#Height').text(`Shape Height: 0 units`)
            $('#Radius').text('Shape Radius: 0 units')
            $('#Area').text(`Shape Area: 0 units`)
            $('#Perimeter').text(`Shape Perimeter: 0 units`)
        }
    }
}

class Rectangle extends Shape {
    constructor(side, number, length) {
        super(side, number);
        this.length = length
    }

    createShape() {
        $('#canvas').append($(`<div class="rectangle" id="${this.number}"></div>`))
        $(`#${this.number}`).css({height: `${this.side}px`})
        $(`#${this.number}`).css({width: `${this.length}px`})
        $(`#${this.number}`).css(`top`, `${getRandomTop()}px`)
        $(`#${this.number}`).css(`left`, `${getRandomLeft()}px`)
    }
}

class Circle extends Shape {
    constructor(side, number) {
        super(side, number);
    }
     
    createShape() {
        $('#canvas').append($(`<div class="circle" id="${this.number}"></div>`))
        $(`#${this.number}`).css("border-radius", `${this.side}px`)
        $(`#${this.number}`).css("height", `auto`)
        $(`#${this.number}`).css("width", `${this.side}px`)
        $(`#${this.number}`).css("padding-top", `${this.side}px`)
        $(`#${this.number}`).css(`top`, `${getRandomTop()}px`)
        $(`#${this.number}`).css(`left`, `${getRandomLeft()}px`)
    }
}

class Triangle extends Shape {2514
    constructor(side, number) {
        super(side, number);
    }

    createShape() {
        $('#canvas').append($(`<div class="triangle" id="${this.number}">${this.side}</div>`))
        $(`#${this.number}`).css("border-bottom", `${this.side}px solid yellow`)
        $(`#${this.number}`).css("height", `0`)
        $(`#${this.number}`).css("width", `0`)
        $(`#${this.number}`).css("border-right", `${this.side}px solid transparent`)
        $(`#${this.number}`).css(`top`, `${getRandomTop()}px`)
        $(`#${this.number}`).css(`left`, `${getRandomLeft()}px`)
    }
}

function getRandomLeft() {
    return (Math.floor(Math.random() * (520-30) + 30))
}

function getRandomTop() {
    return (Math.floor(Math.random() * (870-370) + 370))
}

let counter = 0
$("#SquButton").click(function() {
    counter++
    let thing = new Shape($(`#MsgSquare`).val(), counter)
    thing.createShape();
})

$("#RecButton").click(function() {
    counter++
    let thing = new Rectangle($(`#MsgRectangle-side1`).val(), counter, $(`#MsgRectangle-side2`).val())
    thing.createShape();
})

$("#CirButton").click(function() {
    counter++
    let thing = new Circle($(`#MsgCircle`).val(), counter);
    thing.createShape();
})

$("#TriButton").click(function() {
    counter++
    let thing = new Triangle($(`#MsgTriangle`).val(), counter);
    thing.createShape();
})

$('div').click(function() {
    let thing = new Shape();
    thing.describe();
})

$('div').dblclick(function() {
    if ($(event.target).hasClass("circle") || $(event.target).hasClass("square")) {
        $(`#${event.target.id}`).remove();
    } else if ($(event.target).hasClass("rectangle") || $(event.target).hasClass("triangle")) {
        $(`#${event.target.id}`).remove();
    }
})