const Department = require('../src/Department');
const Developer = require('../src/Developer');

/*
Test case 1:
Create a Department object with the ID 1 and the name 'Engineering' and verify that the department has been created successfully
*/
test('Department can be created successfully', () => {
    const department = new Department(1, 'Engineering');
    expect(department.name).toBe('Engineering');
    expect(department.id).toBe(1);
    expect(department.employees).toEqual([]);
}); 

/*
Test case 2:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and verify that the employee has been added successfully  
*/
test('Department can add employees', () => {
    const department = new Department(1, 'Engineering');
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    department.addEmployee(developer);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 1');
} );


/*
Test case 3:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and remove the employee. Verify that the employee has been removed successfully
*/
test('Department can remove employees', () => {
    const department = new Department(1, 'Engineering');
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    department.addEmployee(developer);
    department.removeEmployee(developer);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 0');
});

/*
Test case 4:
Create a Department object with the ID 1 and the name 'Engineering'. Add multiple Developer objects to the department and verify that the employees have been added successfully
*/
test('Department can add multiple employees', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 2');
});

/*
Test case 5:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and verify that the department ID can be retrieved successfully
*/
test('Department getId method works', () => {
    const department = new Department(1, 'Engineering');
    expect(department.getId()).toBe(1);
});

/*
Test case 6:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and verify that the department name can be retrieved successfully
*/
test('Department getName method works', () => {
    const department = new Department(1, 'Engineering');
    expect(department.getName()).toBe('Engineering');
});

/*
Test case 7:
Create a Department object with the ID 1 and the name 'Engineering'. Add multiple Developer objects to the department and verify that the getEmployees method returns an array of all employees in the department
*/
test('Department getEmployees method works', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    expect(department.getEmployees()).toEqual([developer1, developer2]);
});
/*
Test case 8:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works', () => {
    const department = new Department(1, 'Engineering');
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    department.addEmployee(developer);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 1');
});

/*
Test case 9:
Create a Department object with the ID 1 and the name 'Engineering'. Add multiple Developer objects to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works with multiple employees', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 2');
});

/*
Test case 10:
Create a Department object with the ID 1 and the name 'Engineering'. Add and remove multiple Developer objects to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works after adding and removing employees', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    department.removeEmployee(developer1);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 1');
});
/*
Test case 8:
Create a Department object with the ID 1 and the name 'Engineering'. Add a Developer object to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works', () => {
    const department = new Department(1, 'Engineering');
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    department.addEmployee(developer);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 1');
});

/*
Test case 9:
Create a Department object with the ID 1 and the name 'Engineering'. Add multiple Developer objects to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works with multiple employees', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 2');
});

/*
Test case 10:
Create a Department object with the ID 1 and the name 'Engineering'. Add and remove multiple Developer objects to the department and verify that the getDetails method returns the correct string
*/
test('Department getDetails method works after adding and removing employees', () => {
    const department = new Department(1, 'Engineering');
    const developer1 = new Developer(1, 'John Smith', 60000, 'JavaScript');
    const developer2 = new Developer(2, 'Jane Doe', 65000, 'Python');
    department.addEmployee(developer1);
    department.addEmployee(developer2);
    department.removeEmployee(developer1);
    expect(department.getDetails()).toBe('Department ID: 1, Name: Engineering, Employees: 1');
});