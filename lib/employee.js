class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return 'employee';
    }
}

// const ben = new Employee('ben','#employee','bdurham227');
// console.log(ben);

module.exports = Employee;