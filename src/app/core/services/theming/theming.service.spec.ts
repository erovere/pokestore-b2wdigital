import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from '../../core.module';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { ThemingService } from './theming.service';

describe('ThemingService', () => {
    let service: ThemingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, CoreModule, HttpClientTestingModule],
            declarations: [AppComponent, MainLayoutComponent],
            providers: [],
        });
        service = TestBed.inject(ThemingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
