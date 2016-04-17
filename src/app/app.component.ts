import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {FixturesComponent} from "./fixtures/fixturesComponent";

@Component({
    selector: 'mendota',

    template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Fixtures', component: FixturesComponent, useAsDefault: true}
])
export class AppComponent {
    constructor() {
    }
}