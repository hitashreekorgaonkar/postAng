import { Injectable } from '@angular/core';
// import { CrudService } from './crud.service';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isUserLoggedIn: boolean;

    constructor(
        // private crud: CrudService
    ) { }

    // validates user credentials
    public login(mobile: string, password: string): Observable<any> {
       this.isUserLoggedIn = mobile == '1111111111' && password == '22222222';
        // return this.crud.saveData('team/login', credentials);
        return of(this.isUserLoggedIn).pipe(
            tap(val => { 
               console.log("Is User Authentication is successful: " + val); 
            })
         );
    }


}
