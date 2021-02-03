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
        message: "Briefly describe your project."
    }
]).then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
    const readme =  `
# ` + `${data.name}` + `

## Table of Contents

## Description
`+`${data.description}`+
`
## Instalation 
    
## Usage
    
## Contributing
    
## Tests
   
## Questions

**GitHub Profile**

**Email**`

    fs.writeFile(filename, readme , (err) =>
    err ? console.log(err) : console.log('Success!'))})