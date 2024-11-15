/*
Create a class Department that has the following properties:
•	name - string
•	id - string
•	employees - array of Employee objects
The class should have the following methods:
•	getId() - a method that returns the id of the department
•	getName() - a method that returns the name of the department
•	addEmployee(employee) - a method that adds an Employee object to the employees array
•	removeEmployee(employee) - a method that removes an Employee object from the employees array
•	getDetails() - a method that returns a string, containing information about the department and its employees
•	getEmployees() - a method that returns an array of all employees in the department
Requirements:
•	The Department class should be exported as a module
*/

class Department {
    constructor(id, name) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee) {
        this.employees = this.employees.filter(e => e.getId() !== employee.getId());
    }

    getDetails() {
        return `Department ID: ${this.id}, Name: ${this.name}, Employees: ${this.employees.length}`;
    }

    getEmployees() {
        return this.employees;
    }
}

module.exports = Department;