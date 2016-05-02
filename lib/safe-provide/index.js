"use strict";
var core_1 = require("angular2/core");
var SafeToken = (function () {
    function SafeToken(name) {
        this.name = name;
    }
    SafeToken.prototype.toString = function () {
        return "Token " + this.name;
    };
    return SafeToken;
}());
exports.SafeToken = SafeToken;
function safeProvide(token) {
    return {
        useClass: function (Klass) {
            return core_1.provide(token, { useClass: Klass });
        },
        useValue: function (value) {
            return core_1.provide(token, { useValue: value });
        },
        useFactory: function (factory) {
            return core_1.provide(token, { useFactory: factory });
        }
    };
}
exports.safeProvide = safeProvide;
//# sourceMappingURL=index.js.map