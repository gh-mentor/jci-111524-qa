const Manager = require('../src/Manager');

/*
Test case 1:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager has been created successfully
*/
test('Manager can be instantiated and getDetails works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.getDetails()).toBe('Employee ID: 1, Jane Doe earns 70000 and manages the HR department');
});

/*
Test case 2:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager ID can be retrieved successfully
*/
test('Manager getId method works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.getId()).toBe(1);
});

/*
Test case 3:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager name can be retrieved successfully
*/
test('Manager getName method works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.getName()).toBe('Jane Doe');
});

/*
Test case 4:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager salary can be retrieved successfully
*/
test('Manager getSalary method works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.getSalary()).toBe(70000);
});

/*
Test case 5:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Change the salary of the manager and verify that the salary has been updated successfully
*/
test('Manager setSalary method works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    manager.setSalary(80000);
    expect(manager.getSalary()).toBe(80000);
});

/*
Test case 6:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager department can be retrieved successfully
*/
test('Manager department property is set correctly', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.department).toBe('HR');
});