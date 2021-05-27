import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '@app/core/models';

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient) { }

    getAppConfigurationCache(): User {
        return JSON.parse(window.localStorage.getItem('app_configuration'));
    }

    get(path: string, options: object = {}): Observable<any> {
        return this.http.get(`${environment.API_URL}${path}`, options);
    }
}
