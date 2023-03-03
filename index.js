//download libraries
const inquirer = require('inquirer');
const fs = require('fs');

//Constants in the Files
const tableOfContents = 
"  \n  \n # Table of Contents  \n   \n1. [Description](#description)  \n2. [Installation](#installation)  \n3. [Usage](#usage)  \n4. [License](#license)  \n5. [Contributions](#contributions)  \n6. [Tests](#tests)  \n7. [Questions](#questions)  \n8. [Screenshots](#screenshots)  \n9. [Links](#links)"
const preFaces = ["  \n## Description  \n","  \n  \n## Installation  \n","  \n  \n## Usage  \n","  \n  \n## License  \n","  \n  \n## Contributions  \n","   \n   \n## Tests   \n","   \n   \n## Questions  \nTake a closer look at this repo and my other work by visiting my GitHub with the link below, or contact me directly by email.  \nGitHub: https://github.com/" ,"  \nEmail: ","  \n## Screenshots  \n![screenshot1]","  \n![screenshot2]","  \n## Links  \nDeployed site: ","  \nRepository: "]
const messages = ["description done.", "installation done.","usage done.","license done","contributions done.","tests done.","git added.","email added","first screenshot done.","second screenshot done.","deplyed link done.","repo link done."]
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
            message: "Provide an example of usage. ",
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
       {
            type:"input",
            message: "GitHub username: ",
            name: "github"
        },
        {
            type:"input",
            message: "E-mail: ",
            name: "email"
        },
        {
            type:"input",
            message: "Links/paths to first screenshot-IN PARANTHESIS: ",
            name: "screenshot1"
        },
        {
            type:"input",
            message: "Links/paths to second screenshot-IN PARANTHESIS: ",
            name: "screenshot2"
        },
        {
            type:"input",
            message: "Deployed site link: ",
            name: "deployed"
        },
        {
            type:"input",
            message: "Repo link: ",
            name: "repo"
        }
       
    ])
    //with data input-do the following
    .then ((response)=> {
        console.log(response);
        fileWrite(response)
})
//writing the ReadMe
function fileWrite(response){
    const names = [response.description, response.installation, response.usage, response.license,response.contributions, response.tests, response.github,response.email, response.screenshot1, response.screenshot2, response.deployed,response.repo]
    fs.writeFileSync('README.md', "# " +(response.fileTitle),(err) =>
    err ? console.error(err) : console.log('Title in'))
    makeBadge(response.license)//badge function to run with license selected from input
    fs.appendFileSync('README.md',"  \n"+ badge, (err)=>err ? console.error(err): console.log('Badge added'))
    fs.appendFileSync('README.md', tableOfContents, (err)=>err ? console.error(err): console.log('Table of Contents done.'));
    for (let i=0;i<preFaces.length;i++){
        fs.appendFileSync('README.md',preFaces[i] + names[i], (err)=>err ? console.error(err): console.log(messages[i]))
        }
    } 