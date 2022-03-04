const ReverseNumber = require('./reverse');
const rev = require('./reverse');

describe('reverse number',()=>{
    it('Ensures length is the same',()=>{
        const result = ReverseNumber(12345);
        expect(result).toBe(54321)
    })    
    it('Ensures length is the same',()=>{
        const result = ReverseNumber(12345);
        expect(result.toString().length).toBe(5)
    })    
})