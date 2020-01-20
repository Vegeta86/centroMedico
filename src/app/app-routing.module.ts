import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { ListarComponent } from './paciente/listar/listar.component';
import { EditarComponent } from './paciente/editar/editar.component';
import { CrearFichaComponent } from './ficha/crear-ficha/crear-ficha.component';
import { CrearComponent } from './paciente/crear/crear.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listaPacientes', canActivate: [LoginGuard], component: ListarComponent },
  { path: 'editarPaciente/:id', canActivate: [LoginGuard], component: EditarComponent },
  { path: 'crearFicha', canActivate: [LoginGuard], component: CrearFichaComponent },
  { path: 'historialMedico', canActivate: [LoginGuard], component: CrearFichaComponent },
  { path: 'crearPaciente', canActivate: [LoginGuard], component: CrearComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
