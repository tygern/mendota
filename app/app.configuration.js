System.register(["angular2-safe-provider", "./fixtures/fixtureService", "./fixtures/fixtureProvider"], function(exports_1) {
    var angular2_safe_provider_1, fixtureService_1, fixtureProvider_1;
    var SINGLETON_SERVICE_PROVIDERS;
    return {
        setters:[
            function (angular2_safe_provider_1_1) {
                angular2_safe_provider_1 = angular2_safe_provider_1_1;
            },
            function (fixtureService_1_1) {
                fixtureService_1 = fixtureService_1_1;
            },
            function (fixtureProvider_1_1) {
                fixtureProvider_1 = fixtureProvider_1_1;
            }],
        execute: function() {
            exports_1("SINGLETON_SERVICE_PROVIDERS", SINGLETON_SERVICE_PROVIDERS = [
                angular2_safe_provider_1.safeProvider(fixtureProvider_1.FixtureProviderToken)(fixtureService_1.FixtureService)
            ]);
        }
    }
});
//# sourceMappingURL=app.configuration.js.map