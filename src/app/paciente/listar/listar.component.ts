import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public busqueda: FormGroup;
  public listaPacientes: Paciente[];
  public listaPacienteFiltro: Paciente[];

  public txtBusqueda: FormControl;


  constructor(private servicio: PacienteService, private router: Router) {
    this.txtBusqueda = new FormControl('');
    this.listaPacientes = [];
    this.listaPacienteFiltro = [];
    this.muestraPacientes();
  }

  ngOnInit() {
    this.busqueda = new FormGroup({
      palabraClave: this.txtBusqueda
    });

  }

  muestraPacientes() {
    this.servicio.listarPacientes().subscribe(res => {
      this.listaPacientes = res;
    });
  }

  agregarNuevoPaciente(paciente: Paciente) {
    this.listaPacientes.push(paciente);
  }

  redireaccionarVerPaciente(id) {
    this.router.navigate(['', id]);
  }

  redireaccionarEditarPaciente(id) {
    this.router.navigate(['editar', id]);
  }

  buscarPaciente() {

    this.listaPacientes.forEach(paciente => {
      if (paciente.nombre == this.txtBusqueda.value) {
        this.listaPacienteFiltro.push(paciente);
      }
    });
    console.log(this.txtBusqueda)

  }

}
