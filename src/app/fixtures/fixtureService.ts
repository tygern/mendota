import {Http, Headers, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/subject/BehaviorSubject";
import "rxjs/Rx";
import {Fixture} from "./fixture";
import {Team} from "./team";
import {FixtureProvider} from "./fixtureProvider";

@Injectable()
export class FixtureService implements FixtureProvider {

    private subject:BehaviorSubject<Fixture[]> = new BehaviorSubject([]);

    constructor(private _http:Http) {
        this.updateList();
    }

    fetchList():Observable<Fixture[]> {
        return this.subject.asObservable();
    }

    private updateList() {
        let headers = new Headers({'X-Auth-Token': 'b61179888f4547ddb9b5fa62d2ed4700'});

        this._http.get(
            "http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n7",
            {headers}
            )
            .map(this.responseToFixtureList)
            .subscribe((fixtureList) => this.subject.next(fixtureList));
    }

    private responseToFixtureList(response:Response) {
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
    }
}
