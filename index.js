//download libraries
const inquirer = require('inquirer');
const fs = require('fs');

//Constants in the Files
const tableOfContents = 
"  \n  \n # Table of Contents  \n   \n[1. Description](#Description)  \n[2. Installation](#Installation)  \n[3. Usage](#Usage)  \n[4. License](#License)  \n[5. Contributing](#Contributing) \n[6. Tests](#Tests)  \n[7. Questions](#Questions) \n"
const preFaces = ["  \n## Description  \n","  \n  \n## Installation  \n","  \n  \n## Usage  \n","  \n  \n## License  \n","  \n  \n## Contributions  \n","  \n  \n## Tests  \n","  \n  \n## Questions  \n" ]
const messages = ["description done.", "installation done.","usage done.","license done","contributions done.","tests done.","questions done."]
let badge;

//Function to generate badge
function makeBadge(title) {
    if (title== "GNU General Publice License v3.0"){
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        return badge;
    } else if (title=="MIT License"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        return badge;
    } else if (title=="BSD 2-Clause"){
        badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        return badge;
    } else if (title=="BSD 3-Clause"){
        badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        return badge;
    }else if (title=="Boost Software License 1.0"){
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        return badge;
    }else if (title=="Creative Commons Zero v1.0 Universal"){
        badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
        return badge;
    }else if (title=="Eclipse Public License 1.0"){
        badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        return badge;
    }else if (title=="Mozilla Public License 2.0"){
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        return badge;
    }else if (title=="Unlicense"){
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        return badge;
    }else {return}
}

//function for inputs
inquirer
    .prompt ([
        {
            type: "input",
            message: "File title: ",
            name: "fileTitle"
        },
        {
            type:"input",
            message: "What is the description of this repo ",
            name: "description"
        },
        {
            type:"input",
            message: "What kinds of installation do you need to access the file? ",
            name: "installation"
        },
        {
            type:"input",
            message: "Provide and example of usage. ",
            name: "usage"
        },
        {
            type:"list",
            message: "Which license was used? ",
            name: "license",
            choices: ['GNU General Publice License v3.0','MIT License','BSD 2-Clause','BSD 3-Clause','Boost Software License 1.0','Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0','Mozilla Public License','The Unlicense']
        },
        {
            type:"input",
            message: "Are you open to contributions? ",
            name: "contributions"
        },
        {
            type:"input",
            message: "What kind of tests can be done with this repo? ",
            name: "tests"
        },
       /* {
            type:"input",
            message: "Any questions? ",
            name: "questions"
        },*/
       {
            type:"input",
            message: "GitHub username: ",
            name: "questions[0]"
        },
        {
            type:"input",
            message: "E-mail: ",
            name: "questions[1]"
        }
       
    ])
    //with data input-do the following
    .then ((response)=> {
        console.log(response);
        fileWrite(response)
})
//writing the ReadMe
function fileWrite(response){
    const names = [response.description, response.installation, response.usage, response.license,response.contributions, response.tests, response.questions]
    fs.writeFileSync('README.md', "# " +(response.fileTitle),(err) =>
    err ? console.error(err) : console.log('Title in'))
    makeBadge(response.license)//badge function to run with license selected from input
    fs.appendFileSync('README.md', badge, (err)=>err ? console.error(err): console.log('Badge added'))
    fs.appendFileSync('README.md', tableOfContents, (err)=>err ? console.error(err): console.log('Table of Contents done.'));
    for (let i=0;i<preFaces.length;i++){
        fs.appendFileSync('README.md',preFaces[i] + names[i], (err)=>err ? console.error(err): console.log(messages[i]))
        }
    } 

//TO DO
    //download starter codex
    //add logox
    //add comments
    //add README
    //github link
    //linkes
    //questions-how to rach me