import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearFichaComponent } from './crear-ficha/crear-ficha.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichaRoutingModule { }
