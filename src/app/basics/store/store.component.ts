import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/shared/services/data-source.service';
import { UserStore } from './user-store.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss'],
    providers: [UserStore],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
    public users$ = this.userStore.users$.pipe(tap((u) => console.log('users$', u)));
    public bannedUsers$ = this.userStore.bannedUsers$.pipe(tap((u) => console.log('bannedUsers$', u)));
    public activeUsersCount$ = this.userStore.activeUsersCount$.pipe(tap((u) => console.log('activeUsersCount$', u)));
    public totalUsersCount$ = this.userStore.totalUsersCount$.pipe(tap((u) => console.log('totalUsersCount$', u)));

    constructor(private readonly userStore: UserStore) {}

    ngOnInit(): void {}

    banUser(user: User) {
        this.userStore.banUser(user);
    }

    unbanUser(user: User) {
        this.userStore.unbanUser(user);
    }

    addUser() {
        this.userStore.addRandomUser();
    }
}
