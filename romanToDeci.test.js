const romanToDecimal = require('./romanToDeci')

it('check if correct',()=>{
    const result = romanToDecimal("IV");
    expect(result).toBe(4);
})
it('check if correct',()=>{
    const result = romanToDecimal("IX");
    expect(result).toBe(9);
})
it('check if correct',()=>{
    const result = romanToDecimal("X");
    expect(result).toBe(10);
})