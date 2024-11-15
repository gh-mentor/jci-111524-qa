const Employee = require('../src/Employee');


/*
Test case 1:
Create an Employee object with the ID 1, name 'John Doe', and salary 50000. Verify that an error is thrown when trying to instantiate an Employee object directly
*/
test('Employee cannot be instantiated directly', () => {
    expect(() => new Employee(1, 'John Doe', 50000)).toThrow(TypeError);
});

/*
Test case 2:
Create a TestEmployee class that extends the Employee class. Create an instance of the TestEmployee class with the ID 1, name 'John Doe', and salary 50000. Verify that the employee has been created successfully
*/
test('Employee getId method works', () => {
    class TestEmployee extends Employee {}
    const employee = new TestEmployee(1, 'John Doe', 50000);
    expect(employee.getId()).toBe(1);
});

/*
Test case 3:
Create a TestEmployee class that extends the Employee class. Create an instance of the TestEmployee class with the ID 1, name 'John Doe', and salary 50000. Verify that the employee name can be retrieved successfully
*/
test('Employee getName method works', () => {
    class TestEmployee extends Employee {}
    const employee = new TestEmployee(1, 'John Doe', 50000);
    expect(employee.getName()).toBe('John Doe');
});

/*
Test case 4:
Create a TestEmployee class that extends the Employee class. Create an instance of the TestEmployee class with the ID 1, name 'John Doe', and salary 50000. Verify that the employee salary can be retrieved successfully
*/
test('Employee getSalary method works', () => {
    class TestEmployee extends Employee {}
    const employee = new TestEmployee(1, 'John Doe', 50000);
    expect(employee.getSalary()).toBe(50000);
});

test('Employee setSalary method works', () => {
    class TestEmployee extends Employee {}
    const employee = new TestEmployee(1, 'John Doe', 50000);
    employee.setSalary(60000);
    expect(employee.getSalary()).toBe(60000);
});

test('Employee getDetails method works', () => {
    class TestEmployee extends Employee {}
    const employee = new TestEmployee(1, 'John Doe', 50000);
    expect(employee.getDetails()).toBe('Employee ID: 1, John Doe earns 50000');
});