import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
})
export class LifecycleHooksComponent
    implements
        OnInit,
        OnDestroy,
        AfterViewInit,
        AfterViewChecked,
        AfterViewInit,
        AfterContentInit,
        AfterContentChecked,
        OnChanges,
        DoCheck
{
    @Input()
    public inputString: string = 'Default';

    constructor() {
        console.log('Constructor');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }
}
