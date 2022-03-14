// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Trusha', 90, 'Trusha29@gmail.com', 'TrushaBH');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github
test('gets engineer github value', () => {
    const engineer = new Engineer('Trusha', 90, 'Trusha29@gmail.com', 'TrushaBH');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role
test('gets role of employee', () => {
    const engineer = new Engineer('Trusha', 90, 'Trusha29@gmail.com', 'TrushaBH');

    expect(engineer.getRole()).toEqual("Engineer");
});