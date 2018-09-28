import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PersonService } from './person.service';
import * as personActions from './person.actions';

@Injectable()
export class PersonEffects {
  @Effect() loadPeople$;
  @Effect() addPerson$;
  @Effect() addPeople$;
  @Effect() updatePerson$;
  @Effect() updatePeople$;
  @Effect() deletePerson$;
  @Effect() deletePeople$;

  constructor(
    private personService: PersonService,
    private actions$: Actions
  ) {
    this.loadPeople$ = this.actions$
      .pipe(
        ofType(personActions.LOAD_PEOPLE),
        switchMap((state: personActions.LoadPeopleAction) =>
        this.personService.loadPeople().pipe(
          // If successful, dispatch success action with result
          map(res => new personActions.LoadPeopleSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new personActions.LoadPeopleFailAction(err)))
        )
      ));

    this.addPerson$ = this.actions$
      .pipe(
        ofType(personActions.ADD_PERSON),
        switchMap((state: personActions.AddPersonAction) =>
        this.personService.addPerson(state.payload).pipe(
          map(res => new personActions.AddPersonSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.AddPersonFailAction(err)))
        )
      ));

    this.addPeople$ = this.actions$
      .pipe(
        ofType(personActions.ADD_PEOPLE),
        switchMap((state: personActions.AddPeopleAction) =>
        this.personService.addPeople(state.payload).pipe(
          map(res => new personActions.AddPeopleSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.AddPeopleFailAction(err)))
        )
      ));

    this.updatePerson$ = this.actions$
      .pipe(
        ofType(personActions.UPDATE_PERSON),
        switchMap((state: personActions.UpdatePersonAction) =>
        this.personService.updatePerson(state.payload).pipe(
          map(res => new personActions.UpdatePersonSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.UpdatePersonFailAction(err)))
        )
      ));

    this.updatePeople$ = this.actions$
      .pipe(
        ofType(personActions.UPDATE_PEOPLE),
        switchMap((state: personActions.UpdatePeopleAction) =>
        this.personService.updatePeople(state.payload).pipe(
          map(res => new personActions.UpdatePeopleSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.UpdatePeopleFailAction(err)))
        )
      ));

    this.deletePerson$ = this.actions$
      .pipe(
        ofType(personActions.DELETE_PERSON),
        switchMap((state: personActions.DeletePersonAction) =>
        this.personService.deletePerson(state.payload).pipe(
          map(res => new personActions.DeletePersonSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.DeletePersonFailAction(err)))
        )
      ));

    this.deletePeople$ = this.actions$
      .pipe(
        ofType(personActions.DELETE_PEOPLE),
        switchMap((state: personActions.DeletePeopleAction) =>
        this.personService.deletePeople(state.payload).pipe(
          map(res => new personActions.DeletePeopleSuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new personActions.DeletePeopleFailAction(err)))
        )
      ));
  }

}
