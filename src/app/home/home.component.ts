import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public hooksVisibe = false;
    public inputToPass = 'Updated from outside';

    public inputValue = 'Default';

    constructor() {}

    ngOnInit(): void {}

    public changeInput() {
        this.inputToPass = Math.random().toString();
    }

    public inputChanged(ref: Event) {
        console.log(ref);
    }
}
