"use strict";
var core_1 = require("angular2/core");
function safeProvide(token) {
    return function setClass(Klass) {
        return core_1.provide(token, { useClass: Klass });
    };
}
exports.safeProvide = safeProvide;
//# sourceMappingURL=index.js.map