const assert = require('chai').assert;
const getKitty = require('../breedFetcher');

describe('getKitty', () => {
  it('should return a custom error if the search query is invalid', () => {
    let wrongKey = getKitty('wibiwbfiuwebfg');
    assert.strictEqual(wrongKey, `"wibiwbfiuwebfg" is not a type of cat I recognize. Please try again`);
   
  });
  it('should return the description of a Siberian if the keyword is "sib"', () => {
    let siberian = getKitty('sib');
    assert.deepStrictEqual(siberian, 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.');
  });
});