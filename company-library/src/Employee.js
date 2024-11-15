/*
Create a class Employee that has the following properties:
•	id - string
•	name - string
•	salary - number
The class should have the following methods:
•	getDetails() - a method that returns a string, containing information about the employee
•	getId() - a method that returns the id of the employee
•	getName() - a method that returns the name of the employee
•	getSalary() - a method that returns the salary of the employee
•	setSalary(newSalary) - a method that sets the salary of the employee
Requirements:
•	The constructor of the Employee class should throw an error if an instance of the Employee class is created directly
•	The Employee class should be exported as a module
*/

class Employee {
    constructor(id, name, salary) {
        if (new.target === Employee) {
            throw new TypeError("Cannot construct Employee instances directly");
        }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `Employee ID: ${this.id}, ${this.name} earns ${this.salary}`;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary) {
        this.salary = newSalary;
    }
}

module.exports = Employee;