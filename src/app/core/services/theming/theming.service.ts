import { Injectable } from '@angular/core';
import { AppConfiguration } from '../configuration/configuration';

@Injectable({
    providedIn: 'root',
})
export class ThemingService {
    setCSSVariables(propertyMap: AppConfiguration): void {
        Object.keys(propertyMap).forEach((key) => {
            document.documentElement.style.setProperty(`--${key}`, propertyMap[key]);
        });
    }
}
