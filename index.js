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
 
function roleOption(answers)  {
    const roleAnswer = answers.role
    if (roleAnswer = "Manager") {
        inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?'
        })
    } else if (roleAnswer = "Engingeer") {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?'
        })
    } else if (roleAnswer = "Intern") {
        inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'What school do you attend?'
        })
    }
}

const init= () => {
    return inquirer.prompt(questions);
    roleOption();
}
init()
    .then
    // .then(() => {
    //     roleOption()
    // })
    fs.writeFile('./dist/index.html', data, (err) => {
        err ? console.log(err) : console.log('Team Profile Generated!')
    })

