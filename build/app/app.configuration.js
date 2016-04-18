System.register(["angular2/core", "./fixtures/fixtureService", "./fixtures/fixtureProvider"], function(exports_1) {
    var core_1, fixtureService_1, fixtureProvider_1;
    var SINGLETON_SERVICE_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fixtureService_1_1) {
                fixtureService_1 = fixtureService_1_1;
            },
            function (fixtureProvider_1_1) {
                fixtureProvider_1 = fixtureProvider_1_1;
            }],
        execute: function() {
            exports_1("SINGLETON_SERVICE_PROVIDERS", SINGLETON_SERVICE_PROVIDERS = [
                core_1.provide(fixtureProvider_1.FixtureProviderToken, { useClass: fixtureService_1.FixtureService })
            ]);
        }
    }
});
//# sourceMappingURL=app.configuration.js.map