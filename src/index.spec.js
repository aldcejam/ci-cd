const soma = require('./index')

describe('index', () => {
    it('should pass', () => {
        expect(soma(2,2)).toBe(4)
    })
})