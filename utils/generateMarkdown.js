// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
![badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)
  
## Description
${data.description}
  
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation 
${data.installation}
   
## Usage
${data.usage}
  
## Contributing
${data.contributing}  
  
## Tests
${data.tests} 
  
## Questions
  
Please reach out to me with any addtional questions by contacting me.
* GitHub Profile: ${data.github}  
* My Email Address: ${data.email}
  
`
}

module.exports = generateMarkdown;
