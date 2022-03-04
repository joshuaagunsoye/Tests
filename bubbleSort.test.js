const bubbleSort = require('./bubbleSort');

it('check correctness',()=>{
    const result = bubbleSort(['y','a','z','q','e'])
    expect(result).toEqual(['a','e','q','y','z'])
})
it('check correctness',()=>{
    const result = bubbleSort(['y','Y','A','q','e'])// it put capital letters before small letters
    console.log(result)
    expect(result).toEqual(['A','Y','e','q','y'])
})