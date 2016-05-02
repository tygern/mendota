System.register(['angular2/core', "../app.configuration"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, app_configuration_1;
    var FixturesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_configuration_1_1) {
                app_configuration_1 = app_configuration_1_1;
            }],
        execute: function() {
            FixturesComponent = (function () {
                function FixturesComponent(fixtureProvider) {
                    var _this = this;
                    this.fixtureProvider = fixtureProvider;
                    this.fixtureList = [];
                    fixtureProvider.fetchList().subscribe(function (fixtures) {
                        _this.fixtureList = fixtures;
                    });
                }
                FixturesComponent = __decorate([
                    core_1.Component({
                        selector: 'fixtureList',
                        template: "\n        <table>\n            <thead>\n                <tr>\n                    <th>Home</th>\n                    <th></th>\n                    <th>Away</th>\n                </tr>\n            </thead>  \n            <tbody>\n                <tr *ngFor=\"#fixture of fixtureList\">\n                    <td>{{fixture.homeTeam.name}}</td>\n                    <td>{{fixture.homeGoals}} - {{fixture.awayGoals}}</td>\n                    <td>{{fixture.awayTeam.name}}</td>\n                </tr>\n            </tbody>                  \n        </table>\n    "
                    }),
                    __param(0, core_1.Inject(app_configuration_1.FixtureProviderToken)), 
                    __metadata('design:paramtypes', [Object])
                ], FixturesComponent);
                return FixturesComponent;
            })();
            exports_1("FixturesComponent", FixturesComponent);
        }
    }
});
//# sourceMappingURL=fixturesComponent.js.map