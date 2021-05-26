import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class SharedModule {}
