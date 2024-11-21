import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FormFactoryService {
    private _variable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public variable$ = this._variable.asObservable().pipe(
        tap((v) => console.log('Variable olvasva: ', v)),
        shareReplay(1)
    );

    public toggleVariable() {
        this._variable.next(!this._variable.getValue());
    }

    constructor(private fb: FormBuilder) {}

    createCompanyForm(addressNumber: number | null = null) {
        const addressArray: FormArray = this.fb.array([]);
        if (addressNumber !== null && addressNumber > 0) {
            for (let i = 0; i < addressNumber; i++) {
                addressArray.push(this.addressForm);
            }
        }

        return this.fb.group({
            id: [],
            name: [],
            budget: this.budgetForm,
            addresses: addressArray,
        });
    }

    get budgetForm() {
        return this.fb.group({
            income: [0, [Validators.required, Validators.min(500)]],
            expenses: [0, [Validators.required]],
            profit: this.fb.control({ value: 0, disabled: true }),
        });
    }

    get addressForm(): FormGroup {
        return this.fb.group({
            id: [],
            state: [, [Validators.required]],
            street: [, [Validators.required]],
        });
    }
}
