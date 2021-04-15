"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var bytes = function (n) {
    n = Math.floor(n);
    var min = n >= 0 ? n : 0;
    return crypto_1.randomBytes(min);
};
var strings = function (n) { return bytes(n).toString('hex').slice(0, n); };
exports.default = strings;
//# sourceMappingURL=random-hex-strings.js.map