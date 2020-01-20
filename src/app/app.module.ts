import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './paciente/crear/crear.component';
import { CrearFichaComponent } from './ficha/crear-ficha/crear-ficha.component';
import { ListarComponent } from './paciente/listar/listar.component';
import { EditarComponent } from './paciente/editar/editar.component';
import { LoginComponent } from './login/login.component';
import { FichaRoutingModule } from './ficha/ficha-routing.module';
import { FichaModule } from './ficha/ficha.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent, CrearComponent, CrearFichaComponent, ListarComponent, EditarComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FichaRoutingModule,
    FichaModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PacienteModule,
    MedicoModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
