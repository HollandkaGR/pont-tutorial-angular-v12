import { Component } from '@angular/core';
import { appRoutes } from 'src/app/app-routing.module';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    public navItems: { displayName: string; slug: string }[] = [];

    constructor() {
        this.navItems = appRoutes.map((route) => ({ displayName: route.displayName, slug: route.route.path || '' }));
    }
}
