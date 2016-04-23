import {provide} from "angular2/core";

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken, FixtureProvider} from "./fixtures/fixtureProvider";

function safeProvider<T>(token) {
    return function setClass<U extends T>(Klass:{new(...args:any[]):U;}) {
        return provide(token, {useClass: Klass});
    };
}

export const SINGLETON_SERVICE_PROVIDERS = [
    safeProvider<FixtureProvider>(FixtureProviderToken)<FixtureService>(FixtureService)
];
