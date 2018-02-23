import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPerson from './person.reducer';

export const selectPersonState = createFeatureSelector<fromPerson.PersonState>('person');

export const getSelectedPersonID = (state: fromPerson.PersonState) => state.selectedPersonID;

export const selectPersonIds = createSelector(selectPersonState, fromPerson.selectPersonIds);
export const selectPersonEntities = createSelector(selectPersonState, fromPerson.selectPersonEntities);
export const selectAllPeople = createSelector(selectPersonState, fromPerson.selectAllPeople);
export const selectPersonTotal = createSelector(selectPersonState, fromPerson.selectPersonTotal);
export const selectCurrentPersonID = createSelector(selectPersonState, getSelectedPersonID);

export const selectCurrentPerson = createSelector(
  selectPersonEntities,
  selectCurrentPersonID,
  (personEntities, personID) => personEntities[personID]
);