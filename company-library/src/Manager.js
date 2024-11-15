// require the Employee class
const Employee = require('./Employee');


/*
Create a class Manager that has the following properties:
•	department - string
The class should inherit the properties of the Employee class and have the following methods:
•	getDetails() - a method that returns a string, containing information about the manager
Requirements:
•	The Manager class should be exported as a module
*/
class Manager extends Employee {
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()} and manages the ${this.department} department`;
    }
}

module.exports = Manager;