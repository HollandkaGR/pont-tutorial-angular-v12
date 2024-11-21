import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FormUtilityService {
    constructor() {}

    checkValidityForControls(formGroup: FormGroup, controlNames: string[]): Observable<boolean> {
        const controlStatuses = controlNames.map((controlName) => {
            return formGroup.get(controlName)!.statusChanges.pipe(startWith(formGroup.get(controlName)?.status));
        });
        return combineLatest(controlStatuses).pipe(
            map((validityStatuses) => {
                return validityStatuses.filter((status) => status && status === 'INVALID').length === 0;
            })
        );
    }
}
