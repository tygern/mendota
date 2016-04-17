import {injectAsync, it, describe, beforeEachProviders, expect} from 'angular2/testing';
import {MockBackend} from "angular2/src/http/backends/mock_backend";
import {XHRBackend, HTTP_PROVIDERS, ResponseOptions, Response} from "angular2/http";
import {provide} from "angular2/core";
import {RequestMethod} from "angular2/http";
import {FixtureService} from "../app/fixtures/fixtureService";

describe('FixtureService', () => {

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            FixtureService
        ];
    });

    it('logs in', injectAsync([XHRBackend, FixtureService], (mockBackend, fixtureService) => {
        return new Promise(
            (resolve) => {

                mockBackend.connections.subscribe(connection => {

                    expect(connection.request.url.toString()).toEqual("http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n7");
                    expect(connection.request.method).toEqual(RequestMethod.Get);
                    expect(connection.request.headers.get("X-Auth-Token")).toEqual("b61179888f4547ddb9b5fa62d2ed4700");

                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            "fixtures": [{
                                "_links": {
                                    "self": {"href": "http://api.football-data.org/v1/fixtureList/146780"},
                                    "soccerseason": {"href": "http://api.football-data.org/v1/soccerseasons/398"},
                                    "homeTeam": {"href": "http://api.football-data.org/v1/teams/68"},
                                    "awayTeam": {"href": "http://api.football-data.org/v1/teams/71"}
                                },
                                "date": "2016-04-16T11:45:00Z",
                                "status": "FINISHED",
                                "matchday": 34,
                                "homeTeamName": "Norwich City FC",
                                "awayTeamName": "Sunderland AFC",
                                "result": {"goalsHomeTeam": 0, "goalsAwayTeam": 3}
                            }, {
                                "_links": {
                                    "self": {"href": "http://api.football-data.org/v1/fixtureList/146782"},
                                    "soccerseason": {"href": "http://api.football-data.org/v1/soccerseasons/398"},
                                    "homeTeam": {"href": "http://api.football-data.org/v1/teams/74"},
                                    "awayTeam": {"href": "http://api.football-data.org/v1/teams/346"}
                                },
                                "date": "2016-04-16T14:00:00Z",
                                "status": "FINISHED",
                                "matchday": 34,
                                "homeTeamName": "West Bromwich Albion FC",
                                "awayTeamName": "Watford FC",
                                "result": {"goalsHomeTeam": 0, "goalsAwayTeam": 1}
                            }]
                        }
                    })));
                });

                fixtureService.fetchList().subscribe(
                    (fixtures) => {
                        expect(fixtures.length).toBe(2);

                        var firstFixture = fixtures[0];
                        expect(firstFixture.homeTeam.name).toEqual("Norwich City FC");
                        expect(firstFixture.awayTeam.name).toEqual("Sunderland AFC");
                        expect(firstFixture.homeGoals).toEqual(0);
                        expect(firstFixture.awayGoals).toEqual(3);

                        resolve();
                    }
                )
            }
        );
    }));

});
