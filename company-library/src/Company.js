// Import the Department class
const Department = require('./Department');

/*
Create a class Company that has the following properties:
•	name - string
•	departments - array of Department objects
The class should have the following methods:
•	addDepartment(department) - a method that adds a Department object to the departments array
•	getDetails() - a method that returns a string, containing information about the company and its departments
•	getDepartments() - a method that returns an array of all departments in the company
Requirements:
•	The Company class should be exported as a module
*/

class Company {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        // If null or undefined is passed as an argument, throw an error
        if (department === null || department === undefined) {
            throw new Error("Invalid department");
        }

        // If the department is not an instance of the Department class, throw an error
        if (!(department instanceof Department)) {
            throw new TypeError("Invalid department");
        }

        // If the department is already in the departments array, throw an error
        if (this.departments.includes(department)) {
            throw new Error("Department already exists");
        }

        this.departments.push(department);
    }

    getDetails() {
        return `Company: ${this.name}, Departments: ${this.departments.length}`;
    }

    getDepartments() {
        return this.departments;
    }
}


// Export the class
module.exports = Company;