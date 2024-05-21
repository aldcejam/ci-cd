const { soma, subtracao } = require('./index')

describe('index', () => {
    it('should pass', () => {
        expect(soma(2,2)).toBe(4)
    })
    it('should pass', () => {
        expect(subtracao(2,2)).toBe(0)
    })
})