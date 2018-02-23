import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as from{{ properCase name }} from './{{ kebabCase name }}.reducer';

export const select{{ properCase name }}State = createFeatureSelector<from{{ properCase name }}.{{ properCase name }}State>('{{ camelCase name }}');

export const getSelected{{ properCase name }}ID = (state: from{{ properCase name }}.{{ properCase name }}State) => state.selected{{ properCase name }}ID;

export const select{{ properCase name }}Ids = createSelector(select{{ properCase name }}State, from{{ properCase name }}.select{{ properCase name }}IDs);
export const select{{ properCase name }}Entities = createSelector(select{{ properCase name }}State, from{{ properCase name }}.select{{ properCase name }}Entities);
export const selectAll{{ properCase plural }} = createSelector(select{{ properCase name }}State, from{{ properCase name }}.selectAll{{ properCase plural }});
export const select{{ properCase name }}Total = createSelector(select{{ properCase name }}State, from{{ properCase name }}.select{{ properCase name }}Total);
export const selectCurrent{{ properCase name }}ID = createSelector(select{{ properCase name }}State, getSelected{{ properCase name }}ID);

export const selectCurrent{{ properCase name }} = createSelector(
  select{{ properCase name }}Entities,
  selectCurrent{{ properCase name }}ID,
  ({{ camelCase name }}Entities, {{ camelCase name }}ID) => {{ camelCase name }}Entities[{{ camelCase name }}ID]
);