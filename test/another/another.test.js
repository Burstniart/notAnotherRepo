const Another = require('./../../app/another/Another')

describe("Test Suite 101 by Lex", () => {
    test("1) I'm empty inside", () => {
        const res = new Another()

        expect(res.sayHi()).toBe('Hi');
    });
})