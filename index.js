// prompt for information about employees
// will generate an HTML page with employees information
// required to use classes.
// use bootstrap to make cards for the HTML page. make emails in info hyperlinks. also Gitub page link
// test classes you create for each employee type.
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/generatepage");
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

const employeeQuestions = [
  {
    type: "confirm",
    name: "addmore",
    message: "Do you want to add another Employee?",
    default: false,
  },
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee would you like to add to your team?",
    choices: ["Engineer", "Intern"],
  },
];
function init() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const newManager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    const newEngineer = new Engineer(
      engineerAnswers.name,
      engineerAnswers.id,
      engineerAnswers.email,
      engineerAnswers.github
    );
    const newIntern = new Intern(
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.school
    );
    teamArray.push(newManager);
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
      if (employeeAnswers.employeeType === "Engineer") {
        inquirer
          .prompt(engineerQuestions)
          .then((engineerAnswers) => teamArray.push(newEngineer));
        return;
      } else {
        inquirer
          .prompt(internQuestions)
          .then((internAnswers) => teamArray.push(newIntern));
        return;
      }
    });
    if (employeeAnswers.addmore === true) {
    } else {
      break;
    }
  });

  fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("Team Profile Generated!");
  });
}
// init();
