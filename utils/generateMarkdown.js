//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "GNU_AGPLv3") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=GNU%20AGPLv3&color=blue)"
  } 
  if (license === "GNU_GPLv3") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=GNU%20GPLv3&color=blue)"
  }
  if (license === "GNU_LGPLv3") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=GNU%20LGPLv3&color=blue)"
  }
  if (license === "Mozilla_Public_License_2.0") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=Mozilla%20Public%20License%202.0&color=blue)"
  }
  if (license === "Apache_License_2.0") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=Apache%20License%202.0&color=blue)"
  }
  if (license === "MIT_License") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=MIT%20License&color=blue)"
  }
  if (license === "Boost_Software_License_1.0") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=Boost%20Software%20License%201.0&color=blue)"
  }
  if (license === "The_Unlicense") {
    return "![badge](https://img.shields.io/static/v1?label=License&message=The%20Unlicense&color=blue)"
  }
  if (license === "None"){
    return ""
  }
}; 

//Function that returns license link within README
function renderLicenseLink(license) { 
  if (license === "None"){
    return ""
  } else {
    return`
* [License](#License)`
  }
};

//Function that returns the license section of the README
function renderLicenseSection(license) {  
  if (license === "None"){
    return ""
  } else {
    return `
## License 

This application has a ` + license + ` License type. Please read more about permissions at [Choose A License](https://choosealicense.com/licenses/)

`
  }
} 

//Function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
${renderLicenseBadge(data.license)}
  
## Description

${data.description}
  
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage) ${renderLicenseLink(data.license)}
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation 

${data.installation}
   
## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contributing}  
  
## Tests

${data.tests} 
  
## Questions

Please reach out to me with any additional questions by contacting me.

* GitHub Profile: https://github.com/${data.github}
* My Email Address: ${data.email}
`
}

module.exports = generateMarkdown;