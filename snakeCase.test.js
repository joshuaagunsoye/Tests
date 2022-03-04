const checkSnakeCase = require('./snakeCase');

it('not in snake case',()=>{
    const result = checkSnakeCase("ThisIsNot")
    expect(result).toBeFalsy();
})
it('in snake case',()=>{
    const result = checkSnakeCase("this_is")
    expect(result).toBeTruthy();
})
it('in snake case',()=>{
    const result = checkSnakeCase("This_Is")
    expect(result).toBeTruthy();
})