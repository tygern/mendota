import {Fixture} from "./fixture";
import {Observable} from "rxjs/Observable";

export interface FixtureProvider {
    fetch():Observable<Fixture[]>
}