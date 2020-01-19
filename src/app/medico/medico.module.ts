import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { ComunService } from './comun.service';
import { LoginGuard } from './login.guard';
import { MedicoService } from './medico.service';

@NgModule({
  imports: [
    CommonModule,
    MedicoRoutingModule
  ],
  declarations: [],
  providers: [ComunService, LoginGuard, MedicoService]
})
export class MedicoModule { }
