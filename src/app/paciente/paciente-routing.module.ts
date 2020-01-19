import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearFichaComponent } from '../ficha/crear-ficha/crear-ficha.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
