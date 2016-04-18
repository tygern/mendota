import {provide} from "angular2/core";

import {FixtureService} from "./fixtures/fixtureService";
import {FixtureProviderToken} from "./fixtures/fixtureProvider";

export const SERVICE_PROVIDERS = provide(FixtureProviderToken, {useClass: FixtureService});