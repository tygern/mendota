import {safeProvider} from "angular2-safe-provider"

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken, FixtureProvider} from "./fixtures/fixtureProvider";

export const SINGLETON_SERVICE_PROVIDERS = [
    safeProvider<FixtureProvider>(FixtureProviderToken)<FixtureService>(FixtureService)
];
