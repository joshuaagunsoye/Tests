const ROT13 = require('./rotThirteen');

it("Ensure it is correct",()=>{
    const result = ROT13('The quick brown fox jumps over the lazy dog')
    expect(result).toEqual('Gur dhvpx oebja sbk whzcf bire gur ynml qbt')
})
it("Ensure it is correct",()=>{
    const result = ROT13('I am from Nigeria')
    expect(result).toEqual('V nz sebz Avtrevn')
})
it("Ensure it is correct",()=>{
    const result = ROT13('Use this tool to encode and decode texts')
    expect(result).toEqual('Hfr guvf gbby gb rapbqr naq qrpbqr grkgf')
})