const Company = require('../src/Company');
const Department = require('../src/Department');


/*
Test case 1:
Create a Company object with the name 'TechCorp' and verify that the company has been created successfully

Test case 2:
Create a Company object with the name 'TechCorp' and add a department to the company. Verify that the department has been added successfully

Test case 3:
Create a Company object with the name 'TechCorp' and add multiple departments to the company. Verify that the departments have been added successfully

Test case 4:
Create a Company object with the name 'TechCorp' and add a department to the company. Try adding the same department again and verify that an error is thrown

Test case 5:
Create a Company object with the name 'TechCorp' and try adding an invalid department (null, undefined, or an object that is not an instance of the Department class). Verify that an error is thrown
*/

// Test case 1
test('Company can be created successfully', () => {
    const company = new Company('TechCorp');
    expect(company.name).toBe('TechCorp');
});

// Test case 2
test('Company can add a department', () => {
    const company = new Company('TechCorp');
    const department = new Department(1, 'Engineering');
    company.addDepartment(department);
    expect(company.getDetails()).toBe('Company: TechCorp, Departments: 1');
    expect(company.getDepartments()).toEqual([department]);
});

// Test case 3
test('Company can add multiple departments', () => {
    const company = new Company('TechCorp');
    const department1 = new Department(1, 'Engineering');
    const department2 = new Department(2, 'HR');
    company.addDepartment(department1);
    company.addDepartment(department2);
    expect(company.getDetails()).toBe('Company: TechCorp, Departments: 2');
    expect(company.getDepartments()).toEqual([department1, department2]);
});

// Test case 4
test('Company cannot add the same department twice', () => {
    const company = new Company('TechCorp');
    const department = new Department(1, 'Engineering');
    company.addDepartment(department);
    expect(() => company.addDepartment(department)).toThrow('Department already exists');
});


