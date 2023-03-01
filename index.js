const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt ([
        {
            type: "input",
            message: "File title: ",
            name: "fileName"
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
