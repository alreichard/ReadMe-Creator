
  module.exports = {
  generateMarkdown: function(data) {
  return `
  
# ${data.title}
![Tux, the Linux mascot](https://img.shields.io/badge/license-${data.license}-green)
## Description
${data.description}
## Table of content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
${data.dependencies}
## Usage
${data.info}
## License
This project is licensed under the ${data.license} license.
## contributing
${data.contributing}
## Tests
to run tests run the following command:
${data.test}
## Questions
If you have any issues, contact me directly at ${data.email}, or follow my githut: https://github.com/${data.username}.
`;
}
  }
//module.exports = generateMarkdown;