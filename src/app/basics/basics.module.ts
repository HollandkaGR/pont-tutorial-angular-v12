import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../core/models/app-route.model';
import { SharedModule } from '../shared/shared.module';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultCDComponent } from './change-detection/default-cd/default-cd.component';
import { OnPushComponent } from './change-detection/on-push/on-push.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HTTPComponent } from './http/http.component';
import { DummyComponent } from './life-cycle/dummy/dummy.component';
import { LifecycleHooksComponent } from './life-cycle/lifecycle-hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenedPipe } from './pipes/shortened.pipe';
import { AddressComponent } from './reactive-form-company/address/address.component';
import { BudgetComponent } from './reactive-form-company/budget/budget.component';
import { CompanyComponent } from './reactive-form-company/company/company.component';
import { ReactiveFormCompanyComponent } from './reactive-form-company/reactive-form-company.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StoreComponent } from './store/store.component';
import { TDFormComponent } from './tdform/tdform.component';

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
        {
            displayName: 'Pipes',
            route: {
                path: 'pipes',
                component: PipesComponent,
            },
        },
        {
            displayName: 'TDForm',
            route: {
                path: 'template-driven-form',
                component: TDFormComponent,
            },
        },
        {
            displayName: 'ReactiveForm',
            route: {
                path: 'reactive-form',
                component: ReactiveFormComponent,
            },
        },
        {
            displayName: 'ReactiveFormCompany',
            route: {
                path: 'reactive-form-company',
                component: ReactiveFormCompanyComponent,
            },
        },
        {
            displayName: 'Store',
            route: {
                path: 'store',
                component: StoreComponent,
            },
        },
        {
            displayName: 'Http',
            route: {
                path: 'http',
                component: HTTPComponent,
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
        UnlessDirective,
        PipesComponent,
        ShortenedPipe,
        TDFormComponent,
        ReactiveFormComponent,
        ReactiveFormCompanyComponent,
        CompanyComponent,
        BudgetComponent,
        AddressComponent,
        StoreComponent,
        HTTPComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: basicsRoutes.route.path,
                component: basicsRoutes.route.component,
                children:
                    basicsRoutes.children?.map((route) => ({
                        path: route.route.path,
                        component: route.route.component,
                        children: route.children || [],
                    })) || [],
            },
        ]),
        SharedModule,
    ],
    exports: [],
})
export class BasicsModule {}
