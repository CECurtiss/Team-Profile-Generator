// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes. 
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you creat for each employee type.
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
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
            choices: ['Manager', 'Employee', 'Engingeeer', 'Intern'],
        }
    ])