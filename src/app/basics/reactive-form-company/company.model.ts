export class Company {
    constructor(public id: number, public name: string, public budget: Budget, public addresses: Address[]) {}
}

export interface Budget {
    income?: number;
    expenses?: number;
    profit?: number;
}

export class Address {
    constructor(public id: number, public street: string, public state: string) {}
}
