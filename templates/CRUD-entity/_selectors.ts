import { createFeatureSelector, createSelector } from '@ngrx/store';
import { {{ properCase name }}State, {{ camelCase name }}Adapter } from './{{ kebabCase name }}.reducer';

export const select{{ properCase name }}State = createFeatureSelector<{{ properCase name }}State>('{{ camelCase name }}');

export const getSelected{{ properCase name }}ID = (state: {{ properCase name }}State) => state.selected{{ properCase name }}ID;

const selectors = {
  selectIds: select{{ properCase name }}IDs,
  selectEntities: select{{ properCase name }}Entities,
  selectAll: selectAll{{ properCase plural }},
  selectTotal: select{{ properCase name }}Total
} = {{ camelCase name }}Adapter.getSelectors(select{{ properCase name }}State);

export const select{{ properCase name }}Ids = createSelector(select{{ properCase name }}State, selectors.select{{ properCase name }}Ids);
export const select{{ properCase name }}Entities = createSelector(select{{ properCase name }}State, selectors.select{{ properCase name }}Entities);
export const selectAll{{ properCase plural }} = createSelector(select{{ properCase name }}State, selectors.selectAll{{ properCase plural }});
export const select{{ properCase name }}Total = createSelector(select{{ properCase name }}State, selectors.select{{ properCase name }}Total);
export const selectCurrent{{ properCase name }}ID = createSelector(select{{ properCase name }}State, getSelected{{ properCase name }}ID);

export const selectCurrent{{ properCase name }} = createSelector(
  select{{ properCase name }}Entities,
  selectCurrent{{ properCase name }}ID,
  ({{ camelCase name }}Entities, {{ camelCase name }}ID) => {{ camelCase name }}Entities[{{ camelCase name }}ID]
);