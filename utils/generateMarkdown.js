// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//  // if (typeof input == "string"){
//     let badge ="https://img.shields.io/static/v1?label=License&message="+license+"&color=blue"
//     return badge; 
//   } 
  if (license === "GNU_AGPLv3") {
    badge = "https://img.shields.io/static/v1?label=License&message=GNU%20AGPLv3&color=blue"
  } 
  if (license === "GNU_GPLv3") {
    badge = "https://img.shields.io/static/v1?label=License&message=GNU%20GPLv3&color=blue"
  }
  if (license === "GNU_LGPLv3") {
    badge = "https://img.shields.io/static/v1?label=License&message=GNU%20LGPLv3&color=blue"
  }
  if (license === "Mozilla_Public_License_2.0") {
    badge = "https://img.shields.io/static/v1?label=License&message=Mozilla%20Public%20License%202.0&color=blue"
  }
  if (license === "Apache_License_2.0") {
    badge = "https://img.shields.io/static/v1?label=License&message=Apache%20License%202.0&color=blue"
  }
  if (license === "MIT_License") {
    badge = "https://img.shields.io/static/v1?label=License&message=MIT%20License&color=blue"
  }
  if (license === "Boost_Software_License_1.0") {
    badge = "https://img.shields.io/static/v1?label=License&message=Boost%20Software%20License%201.0&color=blue"
  }
  if (license === "The_Unlicense") {
    badge = "https://img.shields.io/static/v1?label=License&message=The%20Unlicense&color=blue"
  }
  return badge; 
}; 


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
![badge](${renderLicenseBadge(data.license)})
  
## Description
${data.description}
  
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation 
${data.installation}
   
## Usage
${data.usage}

## License
  
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
  // badge = `![badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)"`