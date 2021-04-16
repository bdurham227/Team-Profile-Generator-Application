class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
   
    //get employee name
    getName() {
        return this.name;
    }
    // //get employee id
    getId(){
        return this.id;
    }
    // //get employe email
    getEmail() {
        return this.email;
    }
    // //get employee role
    getRole(){
        return 'employee';
    }
}

//export employee.js
module.exports = Employee;