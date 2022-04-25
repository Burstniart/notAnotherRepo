const Another = require('./../../app/another/Another')

describe("Test Suite 101 by Lex", () => {
    test("1) I'm empty inside", () => {
        const res = new Another('Monika', 0, ['Tulpish', 'English', 'Spanish'], 'Female', 'Lex')

        expect(res.sayHi()).toBe('Hi');
    });
    test('2) Create object', () => {
        const Mon = new Another('Monika', 0, ['Tulpish', 'English', 'Spanish'], 'Female', 'Lex')

        expect (Mon.name).toBe('Monika')
        expect (Mon.age).toBe(0)
        expect (Mon.language).toStrictEqual(['Tulpish', 'English', 'Spanish'])
        expect (Mon.gender).toBe('Female')
        expect (Mon.host).toBe('Lex')
    })
})