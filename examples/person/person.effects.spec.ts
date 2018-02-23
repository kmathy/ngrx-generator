import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { PersonEffects } from "./person.effects";
import { PersonService } from "./person.service";

describe('PersonEffects', () => {
  let runner, personEffects, personService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      PersonEffects,
      {
        provide: PersonService,
        useValue: jasmine.createSpyObj('personService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    personEffects = TestBed.get(PersonEffects);
    personService = TestBed.get(PersonService);
  });

  describe('person$', () => {

    it('should return a LOAD_PERSON_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_PERSON_FAIL action, on error', function () {

    });

  });

});
