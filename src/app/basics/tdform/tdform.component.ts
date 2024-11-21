import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from './tdform.model';

@Component({
    selector: 'app-tdform',
    templateUrl: './tdform.component.html',
    styleUrls: ['./tdform.component.scss'],
})
export class TDFormComponent {
    title = 'Template driven form';

    countryList: Country[] = [
        { id: 1, name: 'India', code: 'IN' },
        { id: 2, name: 'USA', code: 'US' },
        { id: 3, name: 'UK', code: 'UK' },
        { id: 4, name: 'Germany', code: 'DE' },
    ];

    onSubmit(contactForm: NgForm) {
        console.log(contactForm);
    }
}
