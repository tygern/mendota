import {safeProvide} from "safe-provide"

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken, FixtureProvider} from "./fixtures/fixtureProvider";

export const SINGLETON_SERVICE_PROVIDERS = [
    safeProvide<FixtureProvider>(FixtureProviderToken)<FixtureService>(FixtureService)
];
