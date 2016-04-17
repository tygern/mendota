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

    constructor(private fixtureService:FixtureService) {
        fixtureService.fetch().subscribe((fixtures) => {
            this.fixtureList = fixtures;
        });
    }
}
