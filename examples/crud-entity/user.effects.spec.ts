import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { UserEffects } from "./user.effects";
import { UserService } from "./user.service";
import { Observable } from "rxjs/Observable";

describe('UserEffects', () => {
  let runner, userEffects, userService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      UserEffects,
      {
        provide: UserService,
        useValue: jasmine.createSpyObj('userService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    userEffects = TestBed.get(UserEffects);
    userService = TestBed.get(UserService);
  });

  describe('user$', () => {

    it('should return a LOAD_USER_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_USER_FAIL action, on error', function () {

    });

  });

});
