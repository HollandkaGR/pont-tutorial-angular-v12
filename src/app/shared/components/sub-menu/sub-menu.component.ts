import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
    @Input()
    public menuItems: { displayName: string; slug: string }[] = [];

    constructor() {}

    ngOnInit(): void {}
}
