const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human age, then cat age, then dog age', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
    });
  });
// Look Ma, no handlebars!!!
