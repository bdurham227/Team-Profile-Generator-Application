// const generatedTeamArray = require('../index');
// console.log(generatedTeamArray);
// const fs = require('fs');
// // console.log(generatedTeamArray);

// function generateHtml(){

//     const arrayToStoreFinishedHtml = []
//     const htmlHeader = 
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
//       <title>${generatedTeamArray[0]}</title>
//     </head>
//     <body>
//     <div class="jumbotron jumbotron-fluid bg-danger text-light">
//     <div class="container">
//     <h1 class="display-4 text-center">${generatedTeamArray[0]}</h1>
//     </div>
//     </div>
//     <div class="container">
//     <div class="row">
//     `;
//     arrayToStoreFinishedHtml.push(htmlHeader);
//     //for loop that runs the length of of generatedTeamArray's length
//     //access generatedTeamArrays key/values to display inputs dynamically
//     for (i = 1; i < generatedTeamArray.length; i++) {

//     let teamHtmlData = `
    
    
//     <div class="col-lg-4 col-md-12 mb-4">
        
//         <div class="card" style="width: 18rem;">
//         <div class="card-header bg-primary text-light">
//         <h1>${generatedTeamArray[i].name}</h1>
//         <h3>${generatedTeamArray[i].getRole()}</h3>
    
//         </div>
//         <div class="card p-2 m-3">
//         <div class="card-body p-2">
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${generatedTeamArray[i].id}</li>
//                     <li class="list-group-item">Email: <a href="mailto:${generatedTeamArray[i].email}">${generatedTeamArray[i].email}</a></li>
                   
//                     `
    

//     if (generatedTeamArray[i].officeNumber){
//         teamHtmlData +=  `
//         <li class="list-group-item"> Office Number: ${generatedTeamArray[i].officeNumber}</li>
        
//         `
        
//     }
   


//     if (generatedTeamArray[i].github){
//       teamHtmlData += `
//       <li class="list-group-item"> Github: <a href="http://github.com/${generatedTeamArray[i].github}"> ${generatedTeamArray[i].github}</a></li>
     
//       `
     
//     }
    
//     if (generatedTeamArray[i].school) {
//         teamHtmlData += `
//         <li class="list-group-item"> School: ${generatedTeamArray[i].school}</li>
       
//         `
//     }


//     // if(generatedTeamArray[i].school){
//     //     `
//     //     <li class="list-group-item">Officer Number: ${generatedTeamArray[i].getSchool()}</li>
//     //   </ul>
//     // </div>`
//     // arrayToStoreFinishedHtml.push(teamHtmlData);
//     // }
//     teamHtmlData += `
    
//     </div>
//     </div>
//     </div>
//     </div>
    
   
//     `
//     arrayToStoreFinishedHtml.push(teamHtmlData);


//     }

// const ending =
//     `
//     </div>
//     </div>
//     </body>
//     </html>`;
    
//     arrayToStoreFinishedHtml.push(ending);
//     //access the fs module to create a new html file with the user's responses 
//     fs.writeFile(`./dist/${generatedTeamArray[0]}.html`, arrayToStoreFinishedHtml.join(''), (err) =>{
//         err ? console.error(err) : console.log(`successfully created html document with team members!`)
//     })

// }

// module.exports = generateHtml;