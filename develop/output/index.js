//Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function initialize() {
    const exists = fs.existsSync('./niktoResults');
    if(exists === true) {
      return;
    }
    fs.mkdirSync('./niktoResults')
}
//Creates an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to say?',
            name: 'text',
            maxLength: '3',
        },
        {
            type: 'input',
            message: 'What is the text color?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What is the shape?',
            choices: ["circle", "triangle", "square"],
            name: 'shape',

        },
        {
            type: 'input',
            message: 'What is the shapes color?',
            name: 'shapeColor',

        },
        
    ])
    .then((data) => {

    // Creates a function to write logo.svg file
    fs.writeFile("../output/examples/logo.svg", logo(data), (error) =>
    {error
        ? console.log(error)
        : console.log('success')})
    })

//Creates foundation for README file
const logo = ({text, textColor, shape, shapeColor}) => {
    if (shape === "triangle") {
    return`<svg height="210" width="300">
    <polygon points="200,10 250,100 160,100" style="fill:${shapeColor}" />
    <text x="188" y="60" fill="${textColor}">${text}</text>
    </svg>`
    }
        
`<circle cx="25" cy="75" r="20"/>

<svg height="210" width="500">
<polygon points="200,10 250,190 160,210" style="fill:${shapeColor};stroke:purple;stroke-width:1" />
</svg>

<svg width="400" height="110">
<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>`
}