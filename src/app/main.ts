import {bootstrap}    from 'angular2/platform/browser'

import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";

import 'rxjs/Rx'

import {AppComponent} from "./app.component";
import {SINGLETON_SERVICE_PROVIDERS} from "./app.configuration";

bootstrap(AppComponent, [
    SINGLETON_SERVICE_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
