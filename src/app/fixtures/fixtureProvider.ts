import {Fixture} from "./fixture";
import {Observable} from "rxjs/Observable";

export interface FixtureProvider {
    fetchList():Observable<Fixture[]>
}