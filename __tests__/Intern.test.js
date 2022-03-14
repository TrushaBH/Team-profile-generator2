
const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('Trusha', 90, 'Trusha29@gmail.com', 'FSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school 
test('gets employee school', () => {
    const intern = new Intern('Trusha', 90, 'Trusha29@gmail.com', 'FSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role 
test('gets role of employee', () => {
    const intern = new Intern('Trusha', 90, 'Trusha29@gmail.com', 'FSU');

    expect(intern.getRole()).toEqual("Intern");
}); 