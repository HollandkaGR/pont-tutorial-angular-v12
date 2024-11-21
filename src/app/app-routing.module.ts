import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRoute } from './core/models/app-route.model';
import { HomeComponent } from './home/home.component';

export const appRoutes: AppRoute[] = [
    { displayName: 'Home', route: { path: '', component: HomeComponent } },
    {
        displayName: 'Basics',
        route: { path: 'basics', loadChildren: () => import('./basics/basics.module').then((m) => m.BasicsModule) },
    },
];

@NgModule({
    imports: [RouterModule.forRoot([...appRoutes.map((r) => r.route), { path: '**', component: NotFoundComponent }])],
    exports: [RouterModule],
})
export class AppRoutingModule {}
