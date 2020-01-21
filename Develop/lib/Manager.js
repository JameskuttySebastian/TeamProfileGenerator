const Employee = require("./Employee");
var inquirer = require('inquirer');


class Manager extends Employee {
    constructor(name, id, email, officeNumber = "") {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() { return this.officeNumber }
    getRole() { return "Manager" };
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


let managers = [];
const getManager = async () => {
    let manager = new Manager();
    const name = await inquirer.prompt(
        {
            message: "What's name of Manager?",
            type: "input",
            name: "name",
            validate: validateString
        })
        .then(function (ans) {
            manager.name = ans.name;
        })

    const id = await inquirer.prompt(
        {
            message: "What's ID of Manager?",
            type: "input",
            name: "id",
            validate: validateNumber
        })
        .then(function (ans) {
            manager.id = ans.id;
        })

    const email = await inquirer.prompt(
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validateEmail
        })
        .then(function (ans) {
            manager.email = ans.email;
        })

    const officeNumber = await inquirer.prompt(
        {
            message: "What's office number of Manager?",
            type: "input",
            name: "officeNumber",
            validate: validateNumber
        })
        .then(function (ans) {
            manager.officeNumber = ans.officeNumber;
        })

    manager.role = manager.getRole();
    managers.push(manager);

    // console.log("manager" + JSON.stringify(manager));
    // console.log("managers------" + JSON.stringify(managers));
    return managers;
}

// getManager();

module.exports = {
    Manager,
    getManager
}