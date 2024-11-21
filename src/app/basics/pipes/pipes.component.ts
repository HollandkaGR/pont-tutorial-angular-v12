import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
    public today = new Date();

    public user = {
        name: 'Max',
        age: 30,
        address: {
            street: 'Main St',
            city: 'New York',
            state: 'NY',
        },
    };

    constructor() {}

    ngOnInit(): void {}
}
