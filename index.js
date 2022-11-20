// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes. 
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you creat for each employee type.
const fs = require('fs');
const inquirer = require('inquirer');

function teamQuestions() {
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
            choices: ['Manager', 'Employee', 'Engingeeer', 'Intern'],
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?',
            when: input.role === "Manager",
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
            when: input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
            when: input.role === "Intern",
        },
    ]
    return inquirer.prompt(questions);
}
teamQuestions();