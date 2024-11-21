import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../core/models/app-route.model';
import { SharedModule } from '../shared/shared.module';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DummyComponent } from './life-cycle/dummy/dummy.component';
import { LifecycleHooksComponent } from './life-cycle/lifecycle-hooks.component';

export const basicsRoutes: AppRoute = {
    displayName: 'Life Cycle',
    route: {
        path: '',
        component: BasicHomeComponent,
    },
    children: [
        {
            displayName: 'Bindings',
            route: {
                path: '',
                component: BindingsComponent,
            },
        },
        {
            displayName: 'Life Cycle',
            route: {
                path: 'lifecycles',
                component: LifecycleHooksComponent,
            },
        },
    ],
};

@NgModule({
    declarations: [LifecycleHooksComponent, BasicHomeComponent, DummyComponent, BindingsComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: basicsRoutes.route.path,
                component: basicsRoutes.route.component,
                children:
                    basicsRoutes.children?.map((route) => ({
                        path: route.route.path,
                        component: route.route.component,
                    })) || [],
            },
        ]),
        SharedModule,
    ],
    exports: [],
})
export class BasicsModule {}
