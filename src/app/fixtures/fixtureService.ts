import {Http, Headers} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Fixture} from "./fixture";
import {Team} from "./team";
import {FixtureProvider} from "./fixtureProvider";

@Injectable()
export class FixtureService implements FixtureProvider {

    constructor(private _http:Http) {
    }

    fetch():Observable<Fixture[]> {
        let headers = new Headers({'X-Auth-Token': 'b61179888f4547ddb9b5fa62d2ed4700'});

        return this._http.get(
            "http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n7",
            {headers}
            )
            .map((response) => {
                return response.json().fixtures.map((fixture) => {
                    let homeTeam = new Team(fixture.homeTeamName);
                    let awayTeam = new Team(fixture.awayTeamName);

                    return new Fixture(
                        homeTeam,
                        awayTeam,
                        fixture.result.goalsHomeTeam,
                        fixture.result.goalsAwayTeam
                    );
                });
            })
    }
}
