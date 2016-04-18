System.register([], function(exports_1) {
    var Fixture;
    return {
        setters:[],
        execute: function() {
            Fixture = (function () {
                function Fixture(homeTeam, awayTeam, homeGoals, awayGoals) {
                    this.homeTeam = homeTeam;
                    this.awayTeam = awayTeam;
                    this.homeGoals = homeGoals;
                    this.awayGoals = awayGoals;
                }
                return Fixture;
            })();
            exports_1("Fixture", Fixture);
        }
    }
});
//# sourceMappingURL=fixture.js.map