const Developer = require('../src/Developer');

/*
Test case 1:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer has been created successfully
*/
test('Developer can be instantiated and getDetails works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.getDetails()).toBe('Employee ID: 1, John Smith earns 60000 and codes in JavaScript');
});

/*
Test case 2:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer ID can be retrieved successfully
*/
test('Developer getId method works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.getId()).toBe(1);
});


/*
Test case 3:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer name can be retrieved successfully
*/
test('Developer getName method works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.getName()).toBe('John Smith');
});

/*
Test case 4:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer salary can be retrieved successfully
*/
test('Developer getSalary method works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.getSalary()).toBe(60000);
});

/*
Test case 5:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Change the salary of the developer and verify that the salary has been updated successfully
*/
test('Developer setSalary method works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    developer.setSalary(70000);
    expect(developer.getSalary()).toBe(70000);
});

/*
Test case 6:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer programming language can be retrieved successfully
*/
test('Developer programmingLanguage property is set correctly', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.programmingLanguage).toBe('JavaScript');
});