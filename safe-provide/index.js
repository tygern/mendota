"use strict";
var core_1 = require("angular2/core");
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