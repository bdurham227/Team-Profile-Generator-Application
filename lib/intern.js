//require Employee.js to use Employee parent class to create children classes
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    //get intern school
    getSchool(){
        return this.school;
    }
    //get intern role
    getRole(){
        return 'intern'
    }
}

//export intern.js

module.exports = Intern;