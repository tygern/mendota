import {safeProvide} from "angular2-safe-provider"

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken, FixtureProvider} from "./fixtures/fixtureProvider";

export const SINGLETON_SERVICE_PROVIDERS = [
    safeProvide<FixtureProvider>(FixtureProviderToken)<FixtureService>(FixtureService)
];
