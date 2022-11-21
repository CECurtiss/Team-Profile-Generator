// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes. 
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you create for each employee type.
const fs = require('fs');
const inquirer = require('inquirer');

const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager Email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manager"s Office Number?'
        },
    ];

 const engineerQuestions = [
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
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
        },
    ];

const internQuestions = [
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
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
        },
    ];

inquirer.prompt(managerQuestions)

          
        .then(inquirer.prompt(
            {
                type: 'confirm',
                name: 'addmore',
                message: 'Do you want to add another Employee?',
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of employee would you like to add to your team?',
                choices: [ 'Engineer', 'Employee' ],
            }
            ))


    fs.writeFile('./dist/index.html', data, (err) => {
        err ? console.log(err) : console.log('Team Profile Generated!')
    })

