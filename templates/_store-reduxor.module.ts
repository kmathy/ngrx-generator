import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Uncomment this line if you want to use the StoreDevtool
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
// import { CustomSerializer } from './router-serializer';
import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
import { HttpClientModule } from '@angular/common/http';

// -- IMPORT SERVICES --
import { {{ properCase name }}Service } from './{{ folder name "services" }}/{{ kebabCase name }}.service';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([...AllEffects]),
        // StoreRouterConnectingModule.forRoot({
        //     stateKey: 'router'
        // })
        // StoreDevtoolsModule.instrument({
        //     maxAge: 25, //  Retains last 25 states
        // })
    ],
    exports: [],
    providers: [
        // { provide: RouterStateSerializer, useClass: CustomSerializer },
        // -- PROVIDERS --
        {{ properCase name }}Service
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}
