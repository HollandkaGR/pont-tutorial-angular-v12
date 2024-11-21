import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

@NgModule({
    declarations: [SubMenuComponent],
    imports: [CommonModule, RouterModule],
    exports: [SubMenuComponent],
})
export class SharedModule {}
