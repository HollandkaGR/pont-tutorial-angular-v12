import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DataSourceService, User } from 'src/app/shared/services/data-source.service';

export interface UserState {
    users: User[];
    bannedUsers: User[];
}

@Injectable()
export class UserStore extends ComponentStore<UserState> {
    constructor(dataSourceService: DataSourceService) {
        super({ users: dataSourceService.getUsers(), bannedUsers: [] });
    }

    readonly addUser = this.updater((state, user: User) => ({
        ...state,
        users: [...state.users, user],
    }));
    readonly users$ = this.select((s) => s.users);
    readonly bannedUsers$ = this.select((s) => s.bannedUsers);

    readonly totalUsersCount$ = this.select(
        this.users$,
        this.bannedUsers$,
        (users, bannedUsers) => users.length + bannedUsers.length
    );

    readonly activeUsersCount$ = this.select((state) => state.users.length);

    public banUser(user: User) {
        this.patchState((s) => ({
            bannedUsers: [...s.bannedUsers, user],
            users: s.users.filter((u) => u.id !== user.id),
        }));
    }

    public unbanUser(user: User) {
        this.patchState((s) => ({
            bannedUsers: s.bannedUsers.filter((u) => u.id !== user.id),
            users: [...s.users, user],
        }));
    }

    public addRandomUser() {
        this.patchState((s) => ({
            users: [...s.users, { ...s.users[0], id: s.users.length + 1 }],
        }));
    }
}
