// -- IMPORT --
import { PersonEffects } from './person/person.effects';
import { CrudEffects } from './crud/crud.effects';
import { BasicEffects } from './basic/basic.effects';

export const AllEffects = [
    // -- LIST --
	PersonEffects,
	CrudEffects,
    BasicEffects
];
