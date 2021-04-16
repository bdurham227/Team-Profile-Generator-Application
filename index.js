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



//function that initializes the application
function init() {
    getTeamInfo();
}

//function that prompts user to input a team name. Pushes that input into the empty array and calls askManager function
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
//function to get manager inputs
//creates a promise that once fulfilled instantiates teamMember as a new instance of Manager class
//pushes teamMember to empty array
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
            message: "What is your team manager's office number?"
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
        //call teamBuilder()
        teamBuilder();


    })
  
};
//prompts user to select which team member they would like to add next
const teamBuilder = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose what kind of team member you would like to add to your team',
            choices: ['Engineer','Intern', 'Team Complete'],
           
        },
       
    ])
    .then((data) => {

    //switch statement checking which role was selected and returns correlating function 
    switch(data.role){

        case 'Engineer':
             getEngineer();
            break;

            case 'Intern':
                 getIntern();
                break;
                // case 'Manager':
                //     askManager();
                //     break;
                    case 'Team Complete':
                         generateHtml();
                         break;
                       
    }
})
}
//function that runs prompt to get engineer information if engineer was selected from the list of choices
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
            //fulfill promise to instantiate teamMember as a new instance of Engineer class
            //then calls teamBuilder() to prompt the user if they would like to add more team members
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
//function that prompts for user inputs if intern was selected
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
        //promise that instantiates a new instance of Intern class and pushe to empty array
        //then calls teamBuilder() to prompt the user if they would like to add more team members
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

//function that generates html based off user inputs
function generateHtml(){

    const arrayToStoreFinishedHtml = []
    const htmlHeader = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <title>${generatedTeamArray[0]}</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-danger text-light">
    <div class="container">
    <h1 class="display-4 text-center">${generatedTeamArray[0]}</h1>
    </div>
    </div>
    <div class="container">
    <div class="row">
    `;
    arrayToStoreFinishedHtml.push(htmlHeader);
    //for loop that runs the length of of generatedTeamArray's length
    //access generatedTeamArrays key/values to display inputs dynamically
    for (i = 1; i < generatedTeamArray.length; i++) {

    let teamHtmlData = `
    
    
    <div class="col-lg-4 col-md-12 mb-4">
        
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-light">
        <h1>${generatedTeamArray[i].name}</h1>
        <h3>${generatedTeamArray[i].getRole()}</h3>
    
        </div>
        <div class="card p-2 m-3">
        <div class="card-body p-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${generatedTeamArray[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${generatedTeamArray[i].email}">${generatedTeamArray[i].email}</a></li>
                   
                    `
    

    if (generatedTeamArray[i].officeNumber){
        teamHtmlData +=  `
        <li class="list-group-item"> Office Number: ${generatedTeamArray[i].officeNumber}</li>
        
        `
        
    }
   


    if (generatedTeamArray[i].github){
      teamHtmlData += `
      <li class="list-group-item"> Github: <a href="http://github.com/${generatedTeamArray[i].github}"> ${generatedTeamArray[i].github}</a></li>
     
      `
     
    }
    
    if (generatedTeamArray[i].school) {
        teamHtmlData += `
        <li class="list-group-item"> School: ${generatedTeamArray[i].school}</li>
       
        `
    }
    teamHtmlData += `
    
    </div>
    </div>
    </div>
    </div>
    
   
    `
    arrayToStoreFinishedHtml.push(teamHtmlData);


    }

const ending =
    `
    </div>
    </div>
    </body>
    </html>`;
    
    arrayToStoreFinishedHtml.push(ending);
    //access the fs module to create a new html file with the user's responses 
    fs.writeFile(`./dist/${generatedTeamArray[0]}.html`, arrayToStoreFinishedHtml.join(''), (err) =>{
        err ? console.error(err) : console.log(`successfully created html document with team members!`)
    })

}

init();
