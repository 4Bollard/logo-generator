const shapes = require("./shapes")

describe("testing the shapes", () => {
    it("should return a yellow circle", () => {
        const circle = new shapes.Circle("yellow");
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80 fill="yellow"/>`)
    })
    it("should return a green square", () => {
        const Square = new shapes.Square("green");
        expect(Square.render()).toEqual(`<rect width= "200" height= "200" x= "10" y"10" fill = "green"/> `)
    })
    it("should return a blue triangle", () => {
        const triangle = new shapes.Cricle("yellow");
        expect(triangle.render()).toEqual(`<poly points= = "150,18 244,182 56,182 fill = "blue"/>`)
    })
}) 