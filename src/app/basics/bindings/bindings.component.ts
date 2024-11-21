import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bindings',
    templateUrl: './bindings.component.html',
    styleUrls: ['./bindings.component.scss'],
})
export class BindingsComponent implements OnInit {
    public oneWayInput = 'One way';
    public twoWayInput = 'Two way';
    public ngModel = 'Ng model';

    constructor() {}

    ngOnInit(): void {}
}
