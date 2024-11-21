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
        interval(2000).subscribe(() => {
            this.hideUnless = !this.hideUnless;
        });
    }
}
