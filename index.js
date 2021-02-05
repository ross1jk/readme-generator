// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the title of your project?"
    }, 
    {
        type: "input",
        name: "description", 
        message: "Briefly describe your project (Think about the what, why, and how for this projects development)."
    },
    {
        type: "input", 
        name: "installation", 
        message: "Provide step-by-step installation procedures that will help the user get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for use?"
    }, 
    //contributing, test
    {
        type: "checkbox",
        name: "license",
        message: "What License does your application have?",
        choices: [
            "GNU_AGPLv3",
            "GNU_GPLv3",
            "GNU_LGPLv3",
            "Mozilla_Public_License_2.0", 
            "Apache_License_2.0",
            "MIT_License",
            "Boost_Software_License_1.0",
            "The_Unlicense"
        ]
    },
    {
        type: "input", 
        name: "github",
        message: "Proide your Github Username"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address"
    }
]).then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
    const readme =  `
# ` + `${data.name}` + `

![badge](https://img.shields.io/static/v1?label=License&message=`+`${data.license}`+`&color=blue)

## Description
`+`${data.description}`+`

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation 
`+`${data.installation}`+
`    
## Usage
figure out how to add an image 
`+`${data.usage}`+`

## Contributing
    
## Tests

## Questions

Please reach out to me with any addtional questions by contacting me on my **GitHub Profile** `+`${data.github}`+` or through **My Email Address** `+`${data.email}`

fs.writeFile(filename, readme , (err) =>
err ? console.log(err) : console.log('Success!'))})