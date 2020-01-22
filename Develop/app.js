const Employee = require("./lib/Employee");
const { Manager, getManager } = require("./lib/Manager");
const { Engineer, getEngineer } = require("./lib/Engineer");
const { Intern, getIntern } = require("./lib/Intern");
const managerHtmlFile = require("./lib/managerHtml");
const engineerHtmlFile = require("./lib/engineerHtml");
const internHtmlFile = require("./lib/internHtml");
const mainHtmlFile = require("./lib/mainHtml");

const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const main = async () => {

    let employeeHtmlArray = [];

    const managerObj = await getManager();

    // console.log(managerObj);

    managerObj.forEach(element => {
        employeeHtmlArray.push(managerHtmlFile.generateHtml(element))
    });


    let engineerHtml = await getEngineer();

    engineerHtml.forEach(element => {
        employeeHtmlArray.push(engineerHtmlFile.generateHtml(element))
    });

    let internrHtml = await getIntern();

    internrHtml.forEach(element => {
        employeeHtmlArray.push(internHtmlFile.generateHtml(element))
    });

    

    let employeeHtml = employeeHtmlArray.join("\n");


    let htmlFile = mainHtmlFile.generateHtml(employeeHtml);

    // console.log("all---" + JSON.stringify(htmlFile));

    await writeFileAsync(`./output/team.html`, htmlFile);
};


main();

