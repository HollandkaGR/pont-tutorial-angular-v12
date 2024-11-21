import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { CDUser } from '../change-detection.model';

@Component({
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit, DoCheck {
    @Input()
    public user!: CDUser;

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges OnPush', changes);
    }

    ngDoCheck(): void {
        console.log('ngDoCheck OnPush');
    }

    doNothing() {}
}
