// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes.
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you create for each employee type.
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/generatepage.js");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const teamArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Manager ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Manager Email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: 'What is the Manager"s Office Number?',
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "input",
    name: "school",
    message: "What school do you attend?",
  },
];

const employeeMore = [
  {
    type: "confirm",
    name: "addmore",
    message: "Do you want to add another Employee?",
    default: false,
  },
];

const employeeType = [
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee would you like to add to your team?",
    choices: ["Engineer", "Intern"],
  },
];

function managerAdd() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const newManager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    teamArray.push(newManager);
    return employeeSelect();
  });
}

function employeeAdd() {
  inquirer.prompt(employeeMore).then((employeeAnswers) => {
    if (employeeAnswers.addmore === true) {
      return employeeSelect();
    } else {
      return writeFile();
    }
  });
}
function employeeSelect() {
  inquirer.prompt(employeeType).then((employeeResponse) => {
    if (employeeResponse.employeeType === "Engineer") {
      inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        const newEngineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.github
        );
        teamArray.push(newEngineer);
        return employeeAdd();
      });
    } else {
      inquirer.prompt(internQuestions).then((internAnswers) => {
        const newIntern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );
        teamArray.push(newIntern);
        return employeeAdd();
      });
    }
  });
}

function writeFile() {
  fs.writeFile("./dist/index.html", generatePage(teamArray), (err) => {
    err ? console.log(err) : console.log("Team Profile Generated!");
  });
}
managerAdd();
