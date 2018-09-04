const { joinNames } = require('../src');

describe('joinNames', () => {
it('returns string of names, seperated by commas and an ampersand', () => {
    const namesObj = [{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }]
    expect(joinNames(namesObj)).toBe('Bart, Lisa & Maggie');
  });
it('returns string of names, seperated by commas and an ampersand', () => {
  const namesObj = [{
    name: 'Emily'
  }, {
    name: 'Amy'
  }, {
    name: 'Elaine'
  }, {
    name: 'Paul'
  }]
  expect(joinNames(namesObj)).toBe('Emily, Amy, Elaine & Paul')
})
});
