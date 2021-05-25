import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '@app/core/models/auth/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient) { }

    setUserCache(user: User): void {
        if (user) {
            window.localStorage.setItem('pokestore_user', JSON.stringify(user));
        }
    }

    getUserCache(): User {
        return JSON.parse(window.localStorage.getItem('pokestore_user')) as User;
    }
    
    removeUserCache(): void {
        window.localStorage.removeItem('pokestore_user');
    }

    getAppConfigurationCache(): User {
        return JSON.parse(window.localStorage.getItem('app_configuration'));
    }

    get(path: string, options: object = {}): Observable<any> {
        return this.http.get(`${environment.API_URL}${path}`, options);
    }

    put(path: string, body: object = {}, options: object = {}): Observable<any> {
        return this.http.put(`${environment.API_URL}${path}`, body, options);
    }

    post(path: string, body: object = {}, options: object = {}): Observable<any> {
        return this.http.post(`${environment.API_URL}${path}`, body, options);
    }

    patch(path: string, body: object = {}, options: object = {}): Observable<any> {
        return this.http.patch(`${environment.API_URL}${path}`, body, options);
    }

    delete(path: string, options: object = {}): Observable<any> {
        return this.http.delete(`${environment.API_URL}${path}`, options);
    }
}
