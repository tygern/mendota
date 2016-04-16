import {Component} from 'angular2/core';
import {FixtureService} from "./fixtureService";
import {Fixture} from "./fixture";

@Component({
    selector: 'fixtureList',
    template: `
        <table>
            <thead>
                <tr>
                    <th>Home</th>
                    <th>result</th>
                    <th>Away</th>
                </tr>
            </thead>  
            <tbody>
                <tr *ngFor="#fixture of fixtureList">
                    <th>{{fixture.homeTeam.name}}</th>
                    <th>{{fixture.homeGoals}} - {{fixture.awayGoals}}</th>
                    <th>{{fixture.awayTeam.name}}</th>
                </tr>
            </tbody>                  
        </table>
    `
})
export class FixturesComponent {
    public fixtureList:Fixture[] = [];

    constructor(private fixtureService:FixtureService) {
        fixtureService.fetch().subscribe((fixtures) => {
            this.fixtureList = fixtures;
        });
    }
}
