import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TenantInterceptor } from './core/interceptors/tenant.interceptor';


@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        CoreModule,
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
