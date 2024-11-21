import { Component } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
})
export class LifecycleHooksComponent {
    public hooksVisible = false;
    public inputToPass = 'Default';

    private counter = 0;

    public changeInput() {
        this.counter++;
        this.inputToPass = `Updated from outside ${this.counter} times`;
    }
}
