// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes. 
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you create for each employee type.
const fs = require('fs');
const inquirer = require('inquirer');

 const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is this persons role?',
            choices: ['Manager', 'Engingeeer', 'Intern'],
        },
    ];
 inquirer.prompt(questions)


    .then
        switch (questions) {
            case questions.role === "Manager":
                inquirer.prompt({
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your Office Number?'
                });
                break;
            case questions.role === "Engineer":
                inquirer.prompt({
                    type: 'input',
                    name: 'github',
                    message: 'What is your Github user name?'
                });
                break;
            case questions.role === "Intern":
                inquirer.prompt({
                    type: 'input',
                    name: 'school',
                    message: 'What school do you attend?'
                });
                break;
                }
            
        // .then(inquirer.prompt({
        //     type: 'input',
        //     name: 'addmore',
        //     message: 'Do you want to add another Employee?',
        // }))


//     fs.writeFile('./dist/index.html', data, (err) => {
//         err ? console.log(err) : console.log('Team Profile Generated!')
//     })

