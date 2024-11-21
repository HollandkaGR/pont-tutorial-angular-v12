import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    public isAuthenticated(percent: number = 100): boolean {
        return Math.random() < percent / 100;
    }
}
