const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

function main(){
    let managerData = Manager.getManager();
    let engineerData = Engineer.getEngineer();
    let internrData = Intern.getIntern();
    
}

main();