import {Component, Inject} from 'angular2/core';
import {Fixture} from "./fixture";
import {FixtureProvider} from "./fixtureProvider";
import {FixtureService} from "./fixtureService";

@Component({
    selector: 'fixtureList',
    template: `
        <table>
            <thead>
                <tr>
                    <th>Home</th>
                    <th></th>
                    <th>Away</th>
                </tr>
            </thead>  
            <tbody>
                <tr *ngFor="#fixture of fixtureList">
                    <td>{{fixture.homeTeam.name}}</td>
                    <td>{{fixture.homeGoals}} - {{fixture.awayGoals}}</td>
                    <td>{{fixture.awayTeam.name}}</td>
                </tr>
            </tbody>                  
        </table>
    `
})
export class FixturesComponent {
    public fixtureList:Fixture[] = [];

    constructor(@Inject(FixtureService) private fixtureProvider:FixtureProvider) {
        
        fixtureProvider.fetch().subscribe((fixtures) => {
            this.fixtureList = fixtures;
        });
    }
}
