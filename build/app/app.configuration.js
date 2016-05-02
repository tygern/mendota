System.register(["safe-provide", "./fixtures/fixtureService"], function(exports_1) {
    var safe_provide_1, fixtureService_1;
    var FixtureProviderToken, SINGLETON_SERVICE_PROVIDERS;
    return {
        setters:[
            function (safe_provide_1_1) {
                safe_provide_1 = safe_provide_1_1;
            },
            function (fixtureService_1_1) {
                fixtureService_1 = fixtureService_1_1;
            }],
        execute: function() {
            exports_1("FixtureProviderToken", FixtureProviderToken = new safe_provide_1.SafeToken("FixtureProvider"));
            exports_1("SINGLETON_SERVICE_PROVIDERS", SINGLETON_SERVICE_PROVIDERS = [
                safe_provide_1.safeProvide(FixtureProviderToken).useClass(fixtureService_1.FixtureService)
            ]);
        }
    }
});
//# sourceMappingURL=app.configuration.js.map