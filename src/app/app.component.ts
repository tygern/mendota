import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {FixturesComponent} from "./fixtures/fixturesComponent";

@Component({
    selector: 'mendota',

    template: `
        <h1>Welcome</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/fixtures', name: 'Fixtures', component: FixturesComponent, useAsDefault: true}
])

export class AppComponent {
    constructor() {
    }
}