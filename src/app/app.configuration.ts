import {provide} from "angular2/core";

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken} from "./fixtures/fixtureProvider";

export const SINGLETON_SERVICE_PROVIDERS = [
    provide(FixtureProviderToken, {useClass: FixtureService})
];