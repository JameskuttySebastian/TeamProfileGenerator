const Employee = require("./Employee");
var inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github = "") {
        super(name, id, email);
        this.github = github;
        this.role = "";
    }

    getGithub() { return this.github }
    getRole() { return "Engineer" };
}

function validateEmail(mail) {
    mail = mail.trim();
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(mail) || "Not a valid email, Please try again";
}

function validateNumber(id) {
    id = id.trim();
    var pattern = /^\d+$/;
    return pattern.test(id) || "Not a valid number, Please try again";
}

function validateString(name) {
    name = name.trim();
    var pattern = /^[a-zA-Z ]{3,30}$/;
    return pattern.test(name) || "Not a valid string, Please try again";
}

let engineers = [];
const getEngineer = async () => {
    let engineer = new Engineer();
    const name = await inquirer.prompt(
        {
            message: "What's name of Engineer?",
            type: "input",
            name: "name",
            validate: validateString
        })
        .then(function (ans) {
            engineer.name = ans.name;
        })

    const id = await inquirer.prompt(
        {
            message: "What's ID of Engineer?",
            type: "input",
            name: "id",
            validate: validateNumber
        })
        .then(function (ans) {
            engineer.id = ans.id;
        })

    const email = await inquirer.prompt(
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validateEmail
        })
        .then(function (ans) {
            engineer.email = ans.email;
        })

    const github = await inquirer.prompt(
        {
            message: "What's Git name of Engineer?",
            type: "input",
            name: "github",
            validate: validateString
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
    Engineer,
    getEngineer
};

