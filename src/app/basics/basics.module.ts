import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../core/models/app-route.model';
import { SharedModule } from '../shared/shared.module';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultCDComponent } from './change-detection/default-cd/default-cd.component';
import { OnPushComponent } from './change-detection/on-push/on-push.component';
import { DirectivesComponent } from './directives/directives.component';
import { DummyComponent } from './life-cycle/dummy/dummy.component';
import { LifecycleHooksComponent } from './life-cycle/lifecycle-hooks.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';

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
                path: 'life-cycles',
                component: LifecycleHooksComponent,
            },
        },
        {
            displayName: 'Change detection',
            route: {
                path: 'change-detection',
                component: ChangeDetectionComponent,
            },
        },
        {
            displayName: 'Directives',
            route: {
                path: 'directives',
                component: DirectivesComponent,
            },
        },
    ],
};

@NgModule({
    declarations: [
        LifecycleHooksComponent,
        BasicHomeComponent,
        DummyComponent,
        BindingsComponent,
        ChangeDetectionComponent,
        DefaultCDComponent,
        OnPushComponent,
        DirectivesComponent,
        HighlightTextDirective,
    ],
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
