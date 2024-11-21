import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
    @Input()
    company!: FormGroup;

    @Output()
    createNewAddress: EventEmitter<void> = new EventEmitter();

    @Output()
    deleteAddress: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    get companyValue() {
        return this.company.value;
    }

    get addresses(): FormArray {
        return this.company.get('addresses') as FormArray;
    }

    addAddress() {
        this.createNewAddress.emit();
    }

    removeAddress(index: number) {
        this.deleteAddress.emit(index);
    }
}
