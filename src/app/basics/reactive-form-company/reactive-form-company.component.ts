import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Address, Budget, Company } from './company.model';
import { FormFactoryService } from './form-factory.service';

@Component({
    selector: 'app-reactive-form-company',
    templateUrl: './reactive-form-company.component.html',
    styleUrls: ['./reactive-form-company.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormCompanyComponent implements OnInit {
    appName = 'Form sandbox';

    parentForm: FormGroup;

    variable$: Observable<boolean>;

    // companies are fetched from server
    myCompanies: Company[] = [
        new Company(1, 'Microsoft2', { income: 300, expenses: 0 }, [
            new Address(1, 'M street 1', 'California'),
            new Address(2, 'M street 2', 'Florida'),
            new Address(3, 'M street 3', 'Texas'),
        ]),
        // new Company(2, 'Apple', { income: 700, expenses: 3000 }, [
        //   new Address(1, 'A street 1', 'California'),
        //   new Address(2, 'A street 2', 'Florida'),
        //   new Address(3, 'A street 3', 'Texas'),
        // ]),
        // new Company(3, 'Google', { income: 300, expenses: 0 }, [
        //   new Address(1, 'G street 1', 'California'),
        //   new Address(2, 'G street 2', 'Florida'),
        //   new Address(3, 'G street 3', 'Texas'),
        // ]),
    ];

    constructor(private fb: FormBuilder, private ffs: FormFactoryService) {
        this.parentForm = this.fb.group({
            companies: this.fb.array([]),
        });

        this.variable$ = this.ffs.variable$;
    }

    ngOnInit() {
        // this.myCompanies.forEach((c) => {
        //   let companyGroup: FormGroup = this.newCompany(c);
        //   this.companiesArray.push(companyGroup);
        // });
    }

    get companiesArray(): FormArray {
        return this.parentForm.get('companies') as FormArray;
    }

    getCompanyGroup(companyIndex: number): FormGroup {
        return this.companiesArray.at(companyIndex) as FormGroup;
    }

    getCompanyAddresses(companyIndex: number): FormArray {
        return this.companiesArray.at(companyIndex).get('addresses') as FormArray;
    }

    newCompany(company: Company) {
        return this.fb.group({
            id: company.id,
            name: company.name,
            budget: this.createBudget(company.budget),
            addresses: this.fb.array(this.createAddresses(company.addresses)),
        });
    }

    createAddresses(addresses: Address[]) {
        return addresses.map((a) =>
            this.fb.group({
                id: [a.id],
                state: [a.state, [Validators.required]],
                street: [a.street, [Validators.required]],
            })
        );
    }

    createBudget(budget: Budget) {
        // const budgetGroup: FormGroup = this.fgs.budgetForm;
        // budgetGroup.patchValue({ ...budget });
        // return budgetGroup;
        return this.fb.group({
            income: budget.income,
            expenses: budget.expenses,
            profit: budget.profit,
        });
    }

    createEmptyCompany() {
        const id = this.companiesArray.length;
        const newCompanyGroup: FormGroup = this.ffs.createCompanyForm(1);
        newCompanyGroup.patchValue({ id });
        this.companiesArray.push(newCompanyGroup);
    }

    generateCompany() {
        const existingCompanies: FormArray = this.companiesArray;
        const id = existingCompanies.length;
        const myCompany: Company = new Company(id, 'Apple', { income: 3000, expenses: 6000 }, [
            new Address(1, 'Elm street 1', 'California'),
            new Address(2, 'Elm street 2', 'Florida'),
            new Address(3, 'Elm street 3', 'Texas'),
            new Address(4, 'Elm street 4', 'Ohio'),
        ]);
        if (!existingCompanies.length) {
            existingCompanies.push(this.ffs.createCompanyForm(myCompany.addresses.length));
            this.getCompanyGroup(existingCompanies.length - 1).patchValue({
                ...myCompany,
            });
        } else {
            existingCompanies.push(this.newCompany(myCompany));
        }
    }

    removeCompany() {
        const lengthOfCompanies = this.companiesArray.length;
        if (lengthOfCompanies) this.companiesArray.removeAt(lengthOfCompanies - 1);
    }

    createAddress(companyId: number) {
        this.getCompanyAddresses(companyId).push(this.ffs.addressForm);
    }

    removeAddress(companyId: number, addressId: number) {
        console.log('Remove address: ', companyId, addressId);
        this.getCompanyAddresses(companyId).removeAt(addressId);
    }

    modifyFirst() {
        const modifiedCompany: Company = {
            id: 4,
            name: 'Modified Name',
            budget: { expenses: 200 },
            addresses: [],
        };
        this.getCompanyGroup(0).patchValue({
            ...modifiedCompany,
        });
    }

    logForm() {
        console.log(this.parentForm);
    }

    getAllErrors(form: FormGroup | FormArray): { [key: string]: any } | null {
        let hasError = false;
        const result = Object.keys(form.controls).reduce((acc, key) => {
            const control = form.get(key);
            const errors =
                control instanceof FormGroup || control instanceof FormArray
                    ? this.getAllErrors(control)
                    : control?.errors;
            if (errors) {
                acc[key] = errors;
                hasError = true;
            }
            return acc;
        }, {} as { [key: string]: any });
        return hasError ? result : null;
    }
}
