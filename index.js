const inquirer = require("inquirer");
const { Circle, Triangle, Square }= require("./lib/shapes")
const fs = require("fs")



const question = () => inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters"
    }, 
    {
        type: "input",
        name: "textColor",
        Message: "What color would you like the text to be?",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would would like for your logo?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        Message: "What color would you like for your logo?",
    },
])


    .then(({ text, textColor, shape, shapeColor }) => {
        switch (shape) {
            case "Circle":
                shape = new Circle(shapeColor)
                break
            case "Square":
                shape = new Square(shapeColor)
                break
            case "Triangle":
                shape = new Triangle(shapeColor)
                break
            default:
                console.log("incorrect shape selection")
        }

        const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
${shape.render()}
<text x="110" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`


        return logo
    })


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Your logo is saved as ${fileName}`)
        }

    })
}


function init() {
    question().then((logo) => {
        writeToFile("./generatedLogos/logo.svg", logo)
    });
}

init()


