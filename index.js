//get exported Js files with classes, require them and store them
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
//setup inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
//create empty array to push team members generated into
const generatedTeamArray = [];

//set up practice to make sure everything is working

// const ben = new Employee('ben', 'manager', 'bdurham227');
// console.log(ben);
// console.log(ben.getId());
// generatedTeamArray.push(ben);
// console.log(generatedTeamArray);


function generateHtml(){
    
}
















//create function to write HTML file
function writeToFile(fileName, data) {
    //sets up shell to create a new file to file system
    fs.writeFile(fileName, data, (err) => {
        //tracks errors
        err ? console.error(err) : console.log('successfully created new html file with team members names')
    });
}

//function to initialize app
function init(){
    //call inquirer npm and run the prompt
    //return promise with data when prompt completes

    inquirer.prompt(questions).then(function(data){

        //create teamHtml variable set value to generateHtml function (data);
        const teamHtml = generateHtml(data);
        //call writeToFile function to create an html file in the Dist folder with the data stored in teamHtml
        writeToFile('./Dist/index.html', teamHtml);

    })
}
//run app by calling init();
init();