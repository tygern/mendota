import {it, describe, beforeEach} from "angular2/testing";
import {FixtureService} from "../app/fixtures/fixtureService";
import {FixturesComponent} from "../app/fixtures/fixturesComponent";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Fixture} from "../app/fixtures/fixture";
import {Team} from "../app/fixtures/team";
import {FixtureProvider} from "../app/fixtures/fixtureProvider";

describe('FixtureService', () => {
    class FakeFixtureProvider implements FixtureProvider {

        private subject:Subject<Fixture[]>;

        constructor() {
            this.subject = Subject.create();
        }

        fetch():Observable<Fixture[]> {
            return this.subject.asObservable();
        }

        public simulateValue(fixtureList: Fixture[]) {
            this.subject.next(fixtureList);
        }

    }

    var fixtureComponent: FixturesComponent;
    var fixtureProvider: FakeFixtureProvider;

    beforeEach(() => {
        fixtureProvider = new FakeFixtureProvider();
        fixtureComponent = new FixturesComponent(fixtureProvider)
    });
    
    it('loads fixtures', () => {
        let fixture = new Fixture(
            new Team("Bolton"),
            new Team("Villa"),
            2,
            1
        );
        
        expect(fixtureComponent.fixtureList).toEqual([]);

        fixtureProvider.simulateValue([fixture]);

        expect(fixtureComponent.fixtureList).toEqual([fixture]);
    });

});
