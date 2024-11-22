import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.scss'],
})
export class HTTPComponent implements OnInit {
    public loadingInprogress = false;

    public webUsers$: Observable<{ id: number; name: string }[]> = this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .pipe(map((users: any) => users.map((user: any) => ({ id: user.id, name: user.name }))));

    public onUserSelected$ = new BehaviorSubject<number | null>(null);

    public selectedUser$: Observable<{ id: number; userName: string }> = this.onUserSelected$.pipe(
        filter((id) => !!id),
        switchMap((id) => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)),
        map((user: any) => ({ id: user.id, userName: user.username })),
        tap(() => (this.loadingInprogress = false))
    );

    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    selectUser(id: number) {
        this.loadingInprogress = true;
        this.onUserSelected$.next(id);
    }
}
