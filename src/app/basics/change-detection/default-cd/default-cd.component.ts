import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CDUser } from '../change-detection.model';

@Component({
    selector: 'app-default-cd',
    templateUrl: './default-cd.component.html',
    styleUrls: ['./default-cd.component.scss'],
})
export class DefaultCDComponent implements OnInit, OnChanges, DoCheck {
    @Input()
    public user!: CDUser;

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges Default', changes);
    }

    ngDoCheck(): void {
        console.log('ngDoCheck Default');
    }
}
