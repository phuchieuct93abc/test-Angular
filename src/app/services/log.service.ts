import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class LogService {
    log(mes: string): void {
        console.log(mes);
    }

}
