import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfiguration } from '../configuration';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationApiService {
    constructor(
        private http: HttpClient
    ) { }

    fetchConfig(): Observable<AppConfiguration> {
        return this.http.get(`${environment.TENANTS_API_URL}/config`);
    }
}
