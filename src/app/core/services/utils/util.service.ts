import { Injectable } from '@angular/core';
import { User, Token } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    unsetUser(): void {
        this.removeCache('currentUser');
        this.removeCache('currentToken');
    }

    getUser(): User {
        return this.getCache<User>('currentUser');
    }
    getToken(): Token {
        return this.getCache<Token>('currentToken');
    }

    getUserName(): any {
        const username = (this.getCache<User>('currentUser')) ? this.getCache<User>('currentUser').name : '';
        return username;
    }

    getUserStatus(): any {
        const userStatus = (this.getCache<any>('currentUser')) ? this.getCache<any>('currentUser').status : '';
        return userStatus;
    }

    setUser(user: User): void {
        this.setCache<User>('currentUser', user);
    }

    setToken(token: Token): void {
        this.setCache<Token>('currentToken', token);
    }

    setCache<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeCache(key: string): void {
        localStorage.removeItem(key);
    }

    getCache<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }

    formatDate(sDate: string): string {
        const date = new Date(sDate);
        let day = date.getDate().toString();
        day = day.length === 1 ? '0' + day : day;
        let month = (date.getMonth() + 1).toString();
        month = month.length === 1 ? '0' + month : month;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    formatHour(sDate: string): string {
        const date = new Date(sDate);
        const timezone = date.getTimezoneOffset() / 60;
        let hour = date.getHours().toString();
        hour = hour.length === 1 ? '0' + hour : hour;
        let minutes = date.getMinutes().toString();
        minutes = minutes.length === 1 ? '0' + minutes : minutes;
        return `${hour}h${minutes}`;
    }

    getClientDomain(): string {
        return new URL(window.location.href).host.replace(/(.*)--pokestore.*/, '$1');
    }
}
