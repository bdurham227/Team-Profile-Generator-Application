//require Employee.js to use Employee parent class to create children classes
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    //get manager role
    getRole(){
        return 'manager';
    }
}
//export Manager.js

module.exports = Manager;