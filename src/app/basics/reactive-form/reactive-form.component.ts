import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, take } from 'rxjs/operators';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm!: FormGroup;
    forbiddenUsernames = ['Chris', 'Anna'];

    constructor() {}

    ngOnInit() {
        this.signupForm = new FormGroup({
            userData: new FormGroup({
                username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                email: new FormControl(null, [Validators.required, Validators.email], [this.validateEmail()]),
            }),
            gender: new FormControl('male'),
            hobbies: new FormArray([]),
        });

        this.signupForm.setValue({
            userData: {
                username: 'Bob',
                email: 'bob@test.com',
            },
            gender: 'male',
            hobbies: [],
        });
        this.signupForm.patchValue({
            userData: {
                username: 'Anna',
            },
        });
    }

    onSubmit() {
        console.log(this.signupForm);
        this.signupForm.reset();
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        return null;
    }

    get hobbiesFormArray() {
        return this.signupForm.get('hobbies') as FormArray;
    }

    validateEmail(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return control.valueChanges.pipe(
                debounceTime(500),
                switchMap((value) => of(value === 'test@test.com' ? { emailIsForbidden: true } : null)),
                take(1)
            );
        };
    }
}
