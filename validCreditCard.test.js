const { expect } = require('@jest/globals');
const validateCreditCard = require('./validCreditCard')

describe('validate credit card',()=>{
    it('correct',()=>{
        const result = validateCreditCard("4539413193296917");
        expect(result).toBe(true)
    });
    it('false',()=>{
        const result = validateCreditCard("4001919257537193");
        expect(result).toBe(true)
    });
});