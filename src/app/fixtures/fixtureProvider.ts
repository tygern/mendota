import {OpaqueToken} from "angular2/core"
import {Fixture} from "./fixture";
import {Observable} from "rxjs/Observable";

export const FixtureProviderToken = new OpaqueToken("FixtureProvider");

export interface FixtureProvider {
    fetchList():Observable<Fixture[]>
}