// using Manager constructor 
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Trusha', 90, 'Trusha29@gmal.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role of employee', () => {
    const manager = new Manager('Trusha', 90, 'Trusha29@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 