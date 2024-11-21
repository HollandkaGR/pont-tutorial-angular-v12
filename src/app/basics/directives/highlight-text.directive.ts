import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlightText]',
})
export class HighlightTextDirective {
    // @HostBinding('style.color') color = 'blue';
    // @HostBinding('style.backgroundColor') backgroundColor = 'green';
    // @HostBinding('style') styles = {
    //     color: 'blue',
    //     backgroundColor: 'green',
    // };

    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        this.elementRef.nativeElement.style.color = 'red';
    }
}
