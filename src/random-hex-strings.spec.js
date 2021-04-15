"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_hex_strings_1 = __importDefault(require("./random-hex-strings"));
describe('random-hex-strings', function () {
    it('generates a random string of given length', function () {
        var actual = random_hex_strings_1.default(10).length;
        var expected = 10;
        expect(actual).toEqual(expected);
    });
    it('generates random strings that are not equal for a given length', function () {
        var actual1 = random_hex_strings_1.default(10);
        var actual2 = random_hex_strings_1.default(10);
        var expected = false;
        expect(actual1 === actual2).toEqual(expected);
    });
    it('does not fail at negative numbers', function () {
        var actual = random_hex_strings_1.default(-10).length;
        var expected = 0;
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=random-hex-strings.spec.js.map