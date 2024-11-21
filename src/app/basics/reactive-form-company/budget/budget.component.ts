import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { combineLatest, Observable, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { FormUtilityService } from '../form-utility.service';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetComponent implements OnInit {
    form!: FormGroup;
    canLoan$!: Observable<boolean>;

    private _destroyed$: Subject<void> = new Subject();

    constructor(
        private parentForm: ControlContainer,
        private fgd: FormGroupDirective,
        private fus: FormUtilityService
    ) {
        console.log('FGD', fgd);
        console.log('ControlC', parentForm);
    }

    ngOnInit(): void {
        this.form = this.parentForm.control as FormGroup;
        this.canLoan$ = this.fus.checkValidityForControls(this.form, ['income']);

        const controls = this.form.controls;

        combineLatest([
            controls.income.valueChanges.pipe(startWith(controls.income.value)),
            controls.expenses.valueChanges.pipe(startWith(controls.expenses.value)),
        ])
            .pipe(takeUntil(this._destroyed$))
            .subscribe(([income, expenses]) => {
                controls.profit.setValue(income - expenses);
            });
    }

    ngOnDestroy() {
        this._destroyed$.next();
    }

    addLoan() {
        const currentIncome = this.form.value.income;
        this.form.patchValue({
            income: currentIncome + 500,
        });
    }
}
