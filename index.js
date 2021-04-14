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

console.log(generatedTeamArray);

function init() {
    getTeamInfo();
}


function getTeamInfo(){

     inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Every great team needs a Team Name:'

        },
       
    ]).then((data) => {
        const teamName = data.teamName
        generatedTeamArray.push(teamName)
        askManager();
    })
    
}

//create askManager function
//prompt user to get manager data
//run promise .then()-> once promise finishes, instantiate teamMember to be a new Manager
//push new Manager into empty array
function askManager () {
   inquirer.prompt([
      
        {
            type: 'input',
            name: 'name',
            message: "Every great team has a great manager! Please Enter your team manager's name",
        },
       
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Manager's email"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is your team manager's officer number?"
        },
        // {
        //     type: 'list',
        //     name: ' role',
        //     message: 'Please choose what kind of team member you would like to add to your team',
        //     choices: ['Manager', 'Engineer','Intern'],
           
        // },




    ]).then((data) => {
        const name = data.name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber);
        generatedTeamArray.push(teamMember)
        // console.log(generatedTeamArray)
        //create teamBuilder()
        teamBuilder();


    })
  
};
const teamBuilder = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose what kind of team member you would like to add to your team',
            choices: ['Manager', 'Engineer','Intern', 'Team Complete'],
           
        },
       
    ])
    .then((data) => {

    
    switch(data.role){

        case 'Engineer':
             getEngineer();
            break;

            case 'Intern':
                 getIntern();
                break;
                case 'Manager':
                    askManager();
                    break;
                    case 'Team Complete':
                         generateHtml();
    }
})
}

//create teamMemberBuilder()
//create conditional or switch statements
//create cases 
//intern, engineer, manager
//case a -intern
//case b  - engineer 
//return  getEngineer()
const getEngineer = () => {
    inquirer.prompt(
        [
            {
                type:"input",
                name: 'name',
                message: "what is your engineer name"
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your engineers email'

            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your engineers github'

            },

        ]).then((data) => {
            const name = data.name;
            const id = 2;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            generatedTeamArray.push(teamMember);
            teamBuilder();
        })
    

}
const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern team member's name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?'
        },
    ]).then((data) => {
        const name = data.name;
        const id = 3;
        const email = data.email;
        const school = data.school;
        const teamMember = new Intern(name, id, email, school);
        generatedTeamArray.push(teamMember);
        teamBuilder();
    })
}
//create engineer function
//inquirer.prompt()
//questions prompt
//return promise .then()
//const for name,id,email, github
//create new instance 
//push to array
//call next function
//===========================
//create intern function
//inquirer.prompt()
//questions prompt
//return promise .then()
//const name id email school
//create new instance
//push to array
//call next function

function generateHtml(){
    `jumbotron/title area`



    addHtml()
}

// const addHtml = () => {
  
// }
















//create function to write HTML file
function writeToFile(fileName, data) {
    //sets up shell to create a new file to file system
    fs.writeFile(fileName, data, (err) => {
        //tracks errors
        err ? console.error(err) : console.log('successfully created new html file with team members names')
    });
}

//function to initialize app
// function init(){
//     //call inquirer npm and run the prompt
//     //return promise with data when prompt completes

//     // inquirer.prompt(questions).then(function(data){

//     //     //create teamHtml variable set value to generateHtml function (data);
//     //     const teamHtml = generateHtml(data);
//     //     //call writeToFile function to create an html file in the Dist folder with the data stored in teamHtml
//     //     writeToFile('./Dist/index.html', teamHtml);

//     // })
   
// }
// //run app by calling init();
init();
