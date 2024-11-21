import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
    hideUnless = true;

    constructor() {}

    ngOnInit(): void {
        const intervalObs = () => interval(2000);
        intervalObs().subscribe(() => {
            this.hideUnless = !this.hideUnless;
            console.log('Changeing hideUnless');
        });
    }
}
