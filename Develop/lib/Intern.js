const Employee = require("./Employee");
var inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name,id,email,school = "") {
        super(name,id,email);
        this.school = school;
    }    
    getSchool(){return this.school}
    getRole(){return "Intern"};
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


let interns = [];
const getIntern = async () => {
    let intern = new Intern();
    const name = await inquirer.prompt(
        {
            message: "What's name of intern?",
            type: "input",
            name: "name",
            validate: validateString
        })
        .then(function (ans) {
            intern.name = ans.name;
        })

    const id = await inquirer.prompt(
        {
            message: "What's ID of intern?",
            type: "input",
            name: "id",
            validate: validateNumber
        })
        .then(function (ans) {
            intern.id = ans.id;
        })

    const email = await inquirer.prompt(
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validateEmail
        })
        .then(function (ans) {
            intern.email = ans.email;
        })

    const school = await inquirer.prompt(
        {
            message: "What's school name of Intern?",
            type: "input",
            name: "school",
            validate: validateString
        })
        .then(function (ans) {
            intern.school = ans.school;
        })

    intern.role = intern.getRole();
    interns.push(intern);

    const repeat = await inquirer.prompt(
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another intern? ',
            default: true
        })
        .then(function (ans) {
            return ans.again;
        })

    // console.log("intern" + JSON.stringify(intern));
    // console.log("interns------" + JSON.stringify(interns));
    return repeat ? getIntern() : interns;
}

// getIntern();

module.exports = {
    Intern,
    getIntern};

