import {safeProvide, SafeToken} from "safe-provide"

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProvider} from "./fixtures/fixtureProvider";

export const FixtureProviderToken = new SafeToken<FixtureProvider>("FixtureProvider");

export const SINGLETON_SERVICE_PROVIDERS = [
    safeProvide(FixtureProviderToken).useClass(FixtureService)
];
