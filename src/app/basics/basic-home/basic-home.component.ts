import { Component, OnInit } from '@angular/core';
import { basicsRoutes } from '../basics.module';

@Component({
    selector: 'app-basic-home',
    templateUrl: './basic-home.component.html',
    styleUrls: ['./basic-home.component.scss'],
})
export class BasicHomeComponent implements OnInit {
    public subMenu: { displayName: string; slug: string }[];

    constructor() {
        this.subMenu =
            basicsRoutes.children?.map((route) => ({
                displayName: route.displayName,
                slug: route.route.path || '',
            })) || [];
    }

    ngOnInit(): void {}
}
