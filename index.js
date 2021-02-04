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
    //contributing, test, questions
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

## Table of Contents

## Description
`+`${data.description}`+
`
## Installation 
`+`${data.installation}`+
`    
## Usage
    figure out how to add an image 
`+`${data.usage}`+`
## Contributing
    
## Tests

## Questions

**GitHub Profile**
`+`${data.github}`+`

**Email**
`+`${data.email}`

fs.writeFile(filename, readme , (err) =>
err ? console.log(err) : console.log('Success!'))})