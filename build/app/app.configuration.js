System.register(["safe-provide", "./fixtures/fixtureService", "./fixtures/fixtureProvider"], function(exports_1) {
    var safe_provide_1, fixtureService_1, fixtureProvider_1;
    var SINGLETON_SERVICE_PROVIDERS;
    return {
        setters:[
            function (safe_provide_1_1) {
                safe_provide_1 = safe_provide_1_1;
            },
            function (fixtureService_1_1) {
                fixtureService_1 = fixtureService_1_1;
            },
            function (fixtureProvider_1_1) {
                fixtureProvider_1 = fixtureProvider_1_1;
            }],
        execute: function() {
            exports_1("SINGLETON_SERVICE_PROVIDERS", SINGLETON_SERVICE_PROVIDERS = [
                safe_provide_1.safeProvide(fixtureProvider_1.FixtureProviderToken)(fixtureService_1.FixtureService)
            ]);
        }
    }
});
//# sourceMappingURL=app.configuration.js.map