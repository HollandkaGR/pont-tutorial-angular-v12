import { Route } from '@angular/router';

export interface AppRoute {
    displayName: string;
    route: Route;
    children?: AppRoute[];
}
