//require Employee.js to use Employee parent class to create children classes
const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }
    //get engineer github
    getGithub(){
        return this.github;
    }
    //get engineer role
    getRole(){
        return `Engineer <i class="fas fa-glasses"></i>`
    }

}

//export Engineer.js

module.exports = Engineer;