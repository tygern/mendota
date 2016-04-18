System.register(['angular2/testing', "angular2/src/http/backends/mock_backend", "angular2/http", "angular2/core", "../app/fixtures/fixtureService"], function(exports_1) {
    var testing_1, mock_backend_1, http_1, core_1, http_2, fixtureService_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (mock_backend_1_1) {
                mock_backend_1 = mock_backend_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fixtureService_1_1) {
                fixtureService_1 = fixtureService_1_1;
            }],
        execute: function() {
            testing_1.describe('FixtureService', function () {
                var mockBackend;
                testing_1.beforeEachProviders(function () {
                    mockBackend = new mock_backend_1.MockBackend();
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            status: 200,
                            body: {
                                "fixtures": [{
                                        "_links": {
                                            "self": { "href": "http://api.football-data.org/v1/fixtureList/146780" },
                                            "soccerseason": { "href": "http://api.football-data.org/v1/soccerseasons/398" },
                                            "homeTeam": { "href": "http://api.football-data.org/v1/teams/68" },
                                            "awayTeam": { "href": "http://api.football-data.org/v1/teams/71" }
                                        },
                                        "date": "2016-04-16T11:45:00Z",
                                        "status": "FINISHED",
                                        "matchday": 34,
                                        "homeTeamName": "Norwich City FC",
                                        "awayTeamName": "Sunderland AFC",
                                        "result": { "goalsHomeTeam": 0, "goalsAwayTeam": 3 }
                                    }, {
                                        "_links": {
                                            "self": { "href": "http://api.football-data.org/v1/fixtureList/146782" },
                                            "soccerseason": { "href": "http://api.football-data.org/v1/soccerseasons/398" },
                                            "homeTeam": { "href": "http://api.football-data.org/v1/teams/74" },
                                            "awayTeam": { "href": "http://api.football-data.org/v1/teams/346" }
                                        },
                                        "date": "2016-04-16T14:00:00Z",
                                        "status": "FINISHED",
                                        "matchday": 34,
                                        "homeTeamName": "West Bromwich Albion FC",
                                        "awayTeamName": "Watford FC",
                                        "result": { "goalsHomeTeam": 0, "goalsAwayTeam": 1 }
                                    }]
                            }
                        })));
                    });
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useValue: mockBackend }),
                        fixtureService_1.FixtureService
                    ];
                });
                testing_1.it('logs in', testing_1.injectAsync([fixtureService_1.FixtureService], function (fixtureService) {
                    return new Promise(function (resolve) {
                        mockBackend.connections.subscribe(function (connection) {
                            testing_1.expect(connection.request.url.toString()).toEqual("http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n7");
                            testing_1.expect(connection.request.method).toEqual(http_2.RequestMethod.Get);
                            testing_1.expect(connection.request.headers.get("X-Auth-Token")).toEqual("b61179888f4547ddb9b5fa62d2ed4700");
                        });
                        fixtureService.fetchList().subscribe(function (fixtures) {
                            testing_1.expect(fixtures.length).toBe(2);
                            var firstFixture = fixtures[0];
                            testing_1.expect(firstFixture.homeTeam.name).toEqual("Norwich City FC");
                            testing_1.expect(firstFixture.awayTeam.name).toEqual("Sunderland AFC");
                            testing_1.expect(firstFixture.homeGoals).toEqual(0);
                            testing_1.expect(firstFixture.awayGoals).toEqual(3);
                            resolve();
                        });
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=fixtureService.test.js.map