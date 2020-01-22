const Employee = require("./Employee");
const inquirer = require('inquirer');
const validate = require("./validate");


class Engineer extends Employee {
    constructor(name, id, email, github = "") {
        super(name, id, email);
        this.github = github;
    }
    getRole(){return "Engineer"}; 
    getGithub() { return this.github }
}



let engineers = [];
const getEngineer = async () => {
    let engineer = new Engineer();
    const name = await inquirer.prompt(
        {
            message: "What's name of Engineer?",
            type: "input",
            name: "name",
            validate: validate.validateString
        })
        .then(function (ans) {
            engineer.name = ans.name;
        })

    const id = await inquirer.prompt(
        {
            message: "What's ID of Engineer?",
            type: "input",
            name: "id",
            validate: validate.validateNumber
        })
        .then(function (ans) {
            engineer.id = ans.id;
        })

    const email = await inquirer.prompt(
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validate.validateEmail
        })
        .then(function (ans) {
            engineer.email = ans.email;
        })

    const github = await inquirer.prompt(
        {
            message: "What's Git name of Engineer?",
            type: "input",
            name: "github",
            validate: validate.validateString
        })
        .then(function (ans) {
            engineer.github = ans.github;
        })

    engineer.role = engineer.getRole();
    engineers.push(engineer);

    const repeat = await inquirer.prompt(
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another Engineer? ',
            default: true
        })
        .then(function (ans) {
            return ans.again;
        })

    // console.log("engineer" + JSON.stringify(engineer));
    // console.log("engineers------" + JSON.stringify(engineers));
    return repeat ? getEngineer() : engineers;
}

// getEngineer();

module.exports = {
    Engineer: Engineer,
    getEngineer: getEngineer
};
