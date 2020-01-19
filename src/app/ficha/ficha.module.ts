import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaRoutingModule } from './ficha-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FichaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class FichaModule { }
