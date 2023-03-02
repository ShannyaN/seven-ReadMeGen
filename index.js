const inquirer = require('inquirer');
const fs = require('fs');

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
            message: "Any questions? ",
            name: "questions"
        }
    ])
    .then ((response)=> {
        console.log(response);
        //const markdown = genMarkdown(response)
    })
    
    
//fs.writeFile('README.md',response, (err) =>
//err ? console.error(err) : console.log('Response logged!'));
    //    fs.writeFile(README.md, ${response}, (err) =>
     //   err ? console.error(err) : console.log('Response logged!'));
    //)
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions