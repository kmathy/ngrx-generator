import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BasicEffects } from './basic.effects';
import { BasicService } from './basic.service';

describe('BasicEffects', () => {
  let runner, basicEffects, basicService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      BasicEffects,
      {
        provide: BasicService,
        useValue: jasmine.createSpyObj('basicService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    basicEffects = TestBed.get(BasicEffects);
    basicService = TestBed.get(BasicService);
  });

  describe('basic$', () => {

    it('should return a LOAD_BASIC_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_BASIC_FAIL action, on error', function () {

    });

  });

});
