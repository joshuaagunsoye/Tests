const ROT13 = (text) => {
    const originalCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const toBeMappedCharaterList = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    const index = x => originalCharacterList.indexOf(x)
    const replace = x => index(x) > -1 ? toBeMappedCharaterList[index(x)] : x
    return text.split('').map(replace).join('')
  }
  module.exports = ROT13;