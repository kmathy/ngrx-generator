import { createSelector } from '@ngrx/store';
import { RouterStateSnapshot, ParamMap } from '@angular/router';
import { RouterStateSerializer, RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    paramMap: ParamMap;
    queryParamMap: ParamMap;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const { url, root: { queryParamMap } } = routerState;
        const { paramMap } = route;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, paramMap, queryParamMap };
    }
}

export const getRouterState = (state) => state.router;
export const getCurrentUrl = createSelector(getRouterState,
    (router: RouterReducerState<RouterStateUrl>) => router.state && router.state.url);
export const getAllParams = createSelector(getRouterState,
    (router: RouterReducerState<RouterStateUrl>) => router.state && router.state.paramMap);
export const getAllQueryParams = createSelector(getRouterState,
    (router: RouterReducerState<RouterStateUrl>) => router.state && router.state.queryParamMap);
