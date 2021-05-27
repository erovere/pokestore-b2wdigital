import { Injectable } from '@angular/core';
import { User } from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    setCart(items): void {
        this.setCache<any>('pokestoreCart', items);
    }

    getCart(): any {
        return this.getCache<any>('pokestoreCart');
    }

    unsetCart(): void {
        this.removeCache('pokestoreCart');
    }  

    setCache<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getCache<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }

    removeCache(key: string): void {
        localStorage.removeItem(key);
    }
}
