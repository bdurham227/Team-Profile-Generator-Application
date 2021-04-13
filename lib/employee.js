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
// const ben = new Employee('jay', 2, 'jaybabydaddy@gmail.com');
// console.log(ben.name);
// console.log(ben.id);
// console.log(ben.email);
const employee = new Employee();
console.log(employee)


module.exports = Employee;