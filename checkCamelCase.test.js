const checkCamelCase = require("./checkCamelCase");
const camel = require("./checkCamelCase");

describe('Check Camel Case',()=>
{
    it('Correct',()=>{
        const result = checkCamelCase('landOftheFree');
        expect(result).toBe(true);
    });it('Correct',()=>{
        const result = checkCamelCase('Againstallodds');
        expect(result).toBe(false);
    });it('Correct',()=>{
        const result = checkCamelCase('smallwords');
        expect(result).toBe(true);
    });   
});