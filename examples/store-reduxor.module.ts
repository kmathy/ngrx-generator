import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
import { HttpClientModule } from '@angular/common/http';
// -- IMPORT SERVICES --
import { UserService } from './crud-entity/user.service';
import { CrudService } from './crud/crud.service';
import { BasicService } from './basic/basic.service';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([...AllEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, //  Retains last 25 states
        })
    ],
    exports: [],
    providers: [
        // -- PROVIDERS --
		UserService,
		CrudService,
        BasicService
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}
