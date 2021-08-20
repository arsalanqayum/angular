import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import { SharedModule } from '../../shared/shared.module';
import { PressRoutingModule } from './press-routing.module';

@NgModule({
  declarations: [PressComponent],
  imports: [
    CommonModule,
    SharedModule,
    PressRoutingModule
  ]
})
export class PressModule { }
