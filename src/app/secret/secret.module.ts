import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopSecretComponent } from './top-secret/top-secret.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: TopSecretComponent,
            },
        ]),
    ],
})
export class SecretModule {}
