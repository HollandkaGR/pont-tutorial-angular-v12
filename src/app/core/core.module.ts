import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [NotFoundComponent, NavBarComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavBarComponent],
})
export class CoreModule {}
