System.register(['angular2/platform/browser', 'angular2/core', "angular2/http", "angular2/router", 'rxjs/Rx', "./app.component", "./app.configuration"], function(exports_1) {
    var browser_1, core_1, http_1, router_1, app_component_1, app_configuration_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_configuration_1_1) {
                app_configuration_1 = app_configuration_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                app_configuration_1.SINGLETON_SERVICE_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: location.pathname })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map