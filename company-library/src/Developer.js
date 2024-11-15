// require Employee class
const Employee = require('./Employee');

/*
Create a class Developer that has the following properties:
•	programmingLanguage - string
The class should inherit the properties of the Employee class and have the following methods:
•	getDetails() - a method that returns a string, containing information about the developer
*/
class Developer extends Employee {
    constructor(id, name, salary, programmingLanguage) {
        super(id, name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    getDetails() {
        return `${super.getDetails()} and codes in ${this.programmingLanguage}`;
    }
}

// Export the class
module.exports = Developer;