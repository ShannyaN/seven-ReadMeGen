const inquirer = require('inquirer');
const fs = require('fs');

//Constants in the Files
const tableOfContents = 
"\n\n #Table of Contents\n1. Description\n2. Installation\n3. Usage\n4. Licence\n5. Contributing\n6. Tests\n7. Questions\n"

inquirer
    .prompt ([
        {
            type: "input",
            message: "File title: ",
            name: "fileTitle"
        },
       /* {
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
        }*/
    ])
    .then ((response)=> {
        console.log(response);
        fileWrite(response)
        //const markdown = genMarkdown(response)
    })
    
    
//fs.writeFile('README.md',response, (err) =>
//err ? console.error(err) : console.log('Response logged!'));
    //    fs.writeFile(README.md, ${response}, (err) =>
     //   err ? console.error(err) : console.log('Response logged!'));
    //)
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

function fileWrite(response){
    fs.writeFile('README.md', "##" +(response.fileTitle),(err) =>
    err ? console.error(err) : console.log('Title in'))
    fs.appendFile('README.md',tableOfContents, (err)=>err ? console.error(err): console.log('Table of Contents in'))
}