import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserStore } from '../basics/store/user-store.service';
import { ParamComponent } from './param/param.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
    declarations: [RoutingComponent, ParamComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RoutingComponent,
                children: [
                    {
                        path: ':id',
                        component: ParamComponent,
                    },
                ],
            },
        ]),
    ],
    providers: [UserStore],
})
export class MyRoutingModule {}
