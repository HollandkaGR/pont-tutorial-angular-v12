import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent implements OnInit {
    @Input()
    address!: AbstractControl;

    constructor() {}

    get addressFormGroup() {
        return this.address as FormGroup;
    }

    get addressValue() {
        console.log('AddressValue');
        return this.address.value;
    }

    get fullAddress() {
        const values = this.addressValue;
        let fullAddress = '';
        if (values.state) fullAddress += values.state + ', ';
        if (values.street) fullAddress += values.street;
        return fullAddress;
    }

    ngOnInit() {}
}
