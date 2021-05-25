import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainLayoutComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
