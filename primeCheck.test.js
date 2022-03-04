const PrimeCheck = require('./primeCheck')

describe('Is a prime number',()=>{
    it('is prime',()=>{
        const result = PrimeCheck(7589);
        expect(result).toBe(true)
    });
    it('is even',()=>{
        const result = PrimeCheck(8);
        expect(result).toBe(false)
    });
   
})