import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
    id: number;
    name: string;
    username: string;
    age: number;
}

const USERS: User[] = [
    { id: 1, name: 'John', username: 'johndoe', age: 25 },
    { id: 2, name: 'Jane', username: 'janedoe', age: 30 },
    { id: 3, name: 'Bob', username: 'bobsmith', age: 35 },
    { id: 4, name: 'Alice', username: 'alicemartinez', age: 40 },
    { id: 5, name: 'Charlie', username: 'charliebrown', age: 45 },
    { id: 6, name: 'Emily', username: 'emilyjones', age: 50 },
    { id: 7, name: 'Frank', username: 'frankwilson', age: 55 },
    { id: 8, name: 'Grace', username: 'gracelee', age: 60 },
    { id: 9, name: 'Hank', username: 'hanksmith', age: 65 },
    { id: 10, name: 'Isabella', username: 'isabellamartinez', age: 70 },
    { id: 11, name: 'Jack', username: 'jackbrown', age: 75 },
    { id: 12, name: 'Katherine', username: 'katherinejones', age: 80 },
    { id: 13, name: 'Liam', username: 'liamwilson', age: 85 },
    { id: 14, name: 'Mia', username: 'mialee', age: 90 },
    { id: 15, name: 'Noah', username: 'noahsmith', age: 95 },
    { id: 16, name: 'Olivia', username: 'oliviamartinez', age: 100 },
    { id: 17, name: 'Peter', username: 'peterbrown', age: 105 },
    { id: 18, name: 'Quinn', username: 'quinnjones', age: 110 },
    { id: 19, name: 'Ryan', username: 'ryanwilson', age: 115 },
    { id: 20, name: 'Sophia', username: 'sophialee', age: 120 },
];

@Injectable({
    providedIn: 'root',
})
export class DataSourceService {
    constructor() {}

    getUsers(): User[] {
        return USERS;
    }

    getUsers$(delayTime = 500): Observable<User[]> {
        return of(USERS).pipe(delay(delayTime));
    }
}
