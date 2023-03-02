const inquirer = require('inquirer');
const fs = require('fs');

//Constants in the Files
const tableOfContents = 
"\n\n # Table of Contents \n \n[1. Description](#Description) \n[2. Installation] (#Installation)\n[3. Usage](#Usage) \n[4. License](#License) \n[5. Contributing](#Contributing)\n[6. Tests](#Tests) \n[7. Questions](#Questions)\n"
const preFaces = ["\n# Description\n","\n\n# Installation\n","\n\n# Usage\n","\n\n# License\n","\n\n# Contributions\n","\n\n# Tests\n","\n\n# Questions\n" ]

const messages = ["description done.", "installation done.","usage done.","contributions done.","tests done.","questions done."]
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
            choices: ['GNU General Publice License v3.0','MIT Licence','BSD','Boost Software License 1.0','Creative Commons Zero v1.0 Universal', 'Eclipse Public Licence 2.0','Mozilla Public License','The Unlicense']
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
            name: "qGitHub"
        },
        {
            type:"input",
            message: "E-mail: ",
            name: "email"
        }
       
    ])
    .then ((response)=> {
        console.log(response);
        fileWrite(response)
})
    
function fileWrite(response){
    const names = [response.description, response.installation, response.usage, response.contributions, response.tests, response.questions]
    fs.writeFile('README.md', "##" +(response.fileTitle) + "\n======",(err) =>
    err ? console.error(err) : console.log('Title in'))
    fs.appendFile('README.md',tableOfContents, (err)=>err ? console.error(err): console.log('Table of Contents done.'))
    for (let i=0;i<preFaces.length;i++){
        fs.appendFile('README.md',preFaces[i] + names[i], (err)=>err ? console.error(err): console.log(messages[i]))
    }
}
//setTimeout
//await
//call response dep variables before and then use variables in function??
//sep into diff functions and use await