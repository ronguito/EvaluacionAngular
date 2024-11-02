import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VehiculosComponent
  ],
  declarations: [VehiculosComponent]
})
export class VehiculosModule { }
