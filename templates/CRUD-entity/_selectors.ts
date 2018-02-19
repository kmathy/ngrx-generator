import { createFeatureSelector, createSelector } from '@ngrx/store';
import { {{ titleCase name }}State, {{ camelCase name }}Adapter } from './{{ kebabCase name }}.reducer';

export const select{{ titleCase name }}State = createFeatureSelector<{{ titleCase name }}State>('{{ camelCase name }}');

export const getSelected{{ titleCase name }}ID = (state: {{ titleCase name }}State) => state.selected{{ titleCase name }}ID;

const selectors = {
  selectIds: select{{ titleCase name }}IDs,
  selectEntities: select{{ titleCase name }}Entities,
  selectAll: selectAll{{ titleCase plural }},
  selectTotal: select{{ titleCase name }}Total
} = {{ camelCase name }}Adapter.getSelectors(select{{ titleCase name }}State);

export const select{{ titleCase name }}Ids = createSelector(select{{ titleCase name }}State, selectors.select{{ titleCase name }}Ids);
export const select{{ titleCase name }}Entities = createSelector(select{{ titleCase name }}State, selectors.select{{ titleCase name }}Entities);
export const selectAll{{ titleCase plural }} = createSelector(select{{ titleCase name }}State, selectors.selectAll{{ titleCase plural }});
export const select{{ titleCase name }}Total = createSelector(select{{ titleCase name }}State, selectors.select{{ titleCase name }}Total);
export const selectCurrent{{ titleCase name }}ID = createSelector(select{{ titleCase name }}State, getSelected{{ titleCase name }}ID);

export const selectCurrent{{ titleCase name }} = createSelector(
  select{{ titleCase name }}Entities,
  selectCurrent{{ titleCase name }}ID,
  ({{ camelCase name }}Entities, {{ camelCase name }}ID) => {{ camelCase name }}Entities[{{ camelCase name }}ID]
);