System.register(["angular2/core", "./fixtures/fixtureProvider", "./fixtures/fixture"], function(exports_1) {
    var core_1, fixtureProvider_1, fixture_1;
    var SINGLETON_SERVICE_PROVIDERS;
    function safeProvider(token) {
        return function setClass(Klass) {
            return core_1.provide(token, { useClass: Klass });
        };
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fixtureProvider_1_1) {
                fixtureProvider_1 = fixtureProvider_1_1;
            },
            function (fixture_1_1) {
                fixture_1 = fixture_1_1;
            }],
        execute: function() {
            exports_1("SINGLETON_SERVICE_PROVIDERS", SINGLETON_SERVICE_PROVIDERS = [
                safeProvider(fixtureProvider_1.FixtureProviderToken)(fixture_1.Fixture)
            ]);
        }
    }
});
//# sourceMappingURL=app.configuration.js.map