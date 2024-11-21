import { Component, OnInit } from '@angular/core';
import { UserStore } from 'src/app/basics/store/user-store.service';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent implements OnInit {
    public users$ = this.userStore.users$;

    constructor(private userStore: UserStore) {}

    ngOnInit(): void {}
}
