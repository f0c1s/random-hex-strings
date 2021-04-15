
import randomHexStrings from './random-hex-strings';

describe('random-hex-strings', () => {
    it('generates a random string of given length', () => {
        const actual = randomHexStrings(10).length;
        const expected = 10;
        expect(actual).toEqual(expected);
    });
    it('generates random strings that are not equal for a given length', () => {
        const actual1 = randomHexStrings(10);
        const actual2 = randomHexStrings(10);
        const expected = false;
        expect(actual1 === actual2).toEqual(expected);
    });
    it('does not fail at negative numbers', () => {
        const actual = randomHexStrings(-10).length;
        const expected = 0;
        expect(actual).toEqual(expected);
    })
});