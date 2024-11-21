import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserStore } from 'src/app/basics/store/user-store.service';
import { User } from 'src/app/shared/services/data-source.service';

@Component({
    selector: 'app-param',
    templateUrl: './param.component.html',
    styleUrls: ['./param.component.scss'],
})
export class ParamComponent implements OnInit, OnDestroy {
    public userData$!: Observable<User | null>;

    constructor(private activatedRoute: ActivatedRoute, private userStore: UserStore) {}

    ngOnInit(): void {
        this.userData$ = this.activatedRoute.params.pipe(switchMap((params) => this.userStore.userById(+params['id'])));
        this.activatedRoute.queryParams.subscribe((params) => console.log(params));
    }

    ngOnDestroy(): void {}
}
