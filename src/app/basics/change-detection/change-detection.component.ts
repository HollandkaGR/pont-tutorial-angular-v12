import { Component, OnInit } from '@angular/core';
import { CDUser } from './change-detection.model';

@Component({
    selector: 'app-change-detection',
    templateUrl: './change-detection.component.html',
    styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent implements OnInit {
    public user: CDUser = {
        userName: 'Béla',
        password: 'Jelszó',
    };

    public user2: CDUser = {
        userName: 'Józsi',
        password: 'Jelszó',
    };

    constructor() {}

    ngOnInit(): void {}

    mutateUser() {
        this.user.password = 'Mutated';
    }

    changeUser() {
        this.user = {
            ...this.user,
            password: 'Changed',
        };
    }
}
