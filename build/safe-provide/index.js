"use strict";
var core_1 = require("angular2/core");
function safeProvide(token) {
    return {
        useClass: function (Klass) {
            return core_1.provide(token, { useClass: Klass });
        }
    };
}
exports.safeProvide = safeProvide;
//# sourceMappingURL=index.js.map