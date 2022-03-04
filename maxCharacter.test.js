const maxCharacter = require('./maxCharacter')
const max = require('./maxCharacter')
it("Highest number of character",()=>{
    const result = maxCharacter("Come over to the bright side of life")
    expect(result).toBe('e')
})
it("Highest number of character",()=>{
    const result = maxCharacter("The little brown fox jumped over the wall")
    expect(result).toBe('e')
})
it("Highest number of character",()=>{
    const result = maxCharacter("QUICK QUICKER QUICKEST")
    expect(result).toBe('Q')
})