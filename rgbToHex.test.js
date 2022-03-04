const RGBToHex = require('./rgbToHex');

it('Check red ',()=>{
    const result = RGBToHex(255,0,0)
    expect(result).toBe('#ff0000')
})
it('Check pink ',()=>{
    const result = RGBToHex(255,192,203)
    expect(result).toBe('#ffc0cb')
})
it('Check black ',()=>{
    const result = RGBToHex(0,0,0)
    expect(result).toBe('#000000')
})