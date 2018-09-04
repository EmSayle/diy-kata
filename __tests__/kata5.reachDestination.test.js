const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5 hours.');
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(65, 12)).toEqual('I should be there in 5.5 hours.');
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(157, 15)).toEqual('I should be there in 10.5 hours.');  
  });
});
