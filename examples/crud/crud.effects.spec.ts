import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CrudEffects } from './crud.effects';
import { CrudService } from './crud.service';

describe('CrudEffects', () => {
  let runner, crudEffects, crudService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      CrudEffects,
      {
        provide: CrudService,
        useValue: jasmine.createSpyObj('crudService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    crudEffects = TestBed.get(CrudEffects);
    crudService = TestBed.get(CrudService);
  });

  describe('crud$', () => {

    it('should return a LOAD_CRUD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_CRUD_FAIL action, on error', function () {

    });

  });

});
