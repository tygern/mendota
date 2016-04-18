System.register(["angular2/testing", "../app/fixtures/fixturesComponent", "rxjs/Subject", "../app/fixtures/fixture", "../app/fixtures/team"], function(exports_1) {
    var testing_1, fixturesComponent_1, Subject_1, fixture_1, team_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (fixturesComponent_1_1) {
                fixturesComponent_1 = fixturesComponent_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (fixture_1_1) {
                fixture_1 = fixture_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            }],
        execute: function() {
            testing_1.describe('FixtureService', function () {
                var FakeFixtureProvider = (function () {
                    function FakeFixtureProvider() {
                        this.subject = Subject_1.Subject.create();
                    }
                    FakeFixtureProvider.prototype.fetchList = function () {
                        return this.subject.asObservable();
                    };
                    FakeFixtureProvider.prototype.simulateValue = function (fixtureList) {
                        this.subject.next(fixtureList);
                    };
                    return FakeFixtureProvider;
                })();
                var fixtureComponent;
                var fixtureProvider;
                testing_1.beforeEach(function () {
                    fixtureProvider = new FakeFixtureProvider();
                    fixtureComponent = new fixturesComponent_1.FixturesComponent(fixtureProvider);
                });
                testing_1.it('loads fixtures', function () {
                    var fixture = new fixture_1.Fixture(new team_1.Team("Bolton"), new team_1.Team("Villa"), 2, 1);
                    expect(fixtureComponent.fixtureList).toEqual([]);
                    fixtureProvider.simulateValue([fixture]);
                    expect(fixtureComponent.fixtureList).toEqual([fixture]);
                });
            });
        }
    }
});
//# sourceMappingURL=fixtureComponent.test.js.map