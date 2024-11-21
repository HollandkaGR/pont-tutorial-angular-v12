import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoute } from './core/models/app-route.model';
import { HomeComponent } from './home/home.component';

export const appRoutes: AppRoute[] = [
    { displayName: 'Home', route: { path: '', component: HomeComponent } },
    {
        displayName: 'Basics',
        route: { path: 'basics', loadChildren: () => import('./basics/basics.module').then((m) => m.BasicsModule) },
    },
    {
        displayName: 'Secret',
        route: {
            path: 'pipes',
            loadChildren: () => import('./secret/secret.module').then((m) => m.SecretModule),
            canActivate: [AuthGuard],
            canLoad: [AuthGuard],
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot([...appRoutes.map((r) => r.route), { path: '**', component: NotFoundComponent }])],
    exports: [RouterModule],
})
export class AppRoutingModule {}
