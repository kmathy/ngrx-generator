// -- IMPORT --
import { UserEffects } from './crud-entity/user.effects';
import { CrudEffects } from './crud/crud.effects';
import { BasicEffects } from './basic/basic.effects';

export const AllEffects = [
    // -- LIST --
	UserEffects,
	CrudEffects,
    BasicEffects
];
