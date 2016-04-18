System.register(["angular2/http", "angular2/core", "rxjs/subject/BehaviorSubject", "rxjs/Rx", "./fixture", "./team"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, BehaviorSubject_1, fixture_1, team_1;
    var FixtureService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (_1) {},
            function (fixture_1_1) {
                fixture_1 = fixture_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            }],
        execute: function() {
            FixtureService = (function () {
                function FixtureService(_http) {
                    this._http = _http;
                    this.subject = new BehaviorSubject_1.BehaviorSubject([]);
                    this.updateList();
                }
                FixtureService.prototype.fetchList = function () {
                    return this.subject.asObservable();
                };
                FixtureService.prototype.updateList = function () {
                    var _this = this;
                    var headers = new http_1.Headers({ 'X-Auth-Token': 'b61179888f4547ddb9b5fa62d2ed4700' });
                    this._http.get("http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n7", { headers: headers })
                        .map(this.responseToFixtureList)
                        .subscribe(function (fixtureList) { return _this.subject.next(fixtureList); });
                };
                FixtureService.prototype.responseToFixtureList = function (response) {
                    return response.json().fixtures.map(function (fixture) {
                        var homeTeam = new team_1.Team(fixture.homeTeamName);
                        var awayTeam = new team_1.Team(fixture.awayTeamName);
                        return new fixture_1.Fixture(homeTeam, awayTeam, fixture.result.goalsHomeTeam, fixture.result.goalsAwayTeam);
                    });
                };
                FixtureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FixtureService);
                return FixtureService;
            })();
            exports_1("FixtureService", FixtureService);
        }
    }
});
//# sourceMappingURL=fixtureService.js.map