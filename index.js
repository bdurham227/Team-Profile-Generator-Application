const Employee = require('./lib/employee');

const inquirer = require('inquirer');

const fs = require('fs');


const ben = new Employee('ben', 'manager', 'bdurham227');
console.log(ben);
console.log(ben.getId());

