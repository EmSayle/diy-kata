const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns yes when passed a truthy and no for a falsey', () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
  })
  
});
