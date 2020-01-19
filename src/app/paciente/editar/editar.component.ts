import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public formulario: FormGroup;
  public pacienteEventEmiter: EventEmitter<Paciente>;

  public listaSexo:string[]=["Masculino","Femenino"];
  public listaSalud:string[]=["Fonasa","Isapre","Indigente"];

  public paciente:Paciente;

  public nombre:FormControl;
  public paterno:FormControl;
  public materno:FormControl;
  public sexo:FormControl;
  public edad:FormControl;
  public correo:FormControl;
  public salud:FormControl;


  constructor(private servicio : PacienteService) {
    this.pacienteEventEmiter = new EventEmitter<Paciente>();
    this.nombre.setValue("hola");
    this.paterno.setValue("");
    this.materno.setValue("");
    this.sexo .setValue("");
    this.edad.setValue("");
    this.correo.setValue("");
    this.salud.setValue("");
   }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: this.nombre,
      paterno: this.paterno,
      materno:this.materno,
      sexo:this.sexo,
      edad:this.edad,
      correo:this.correo,
      salud:this.salud
    });
  }


  crearPaciente(){
    this.paciente = new Paciente(
      this.formulario.controls.nombre.value,
      this.formulario.controls.paterno.value,
      this.formulario.controls.materno.value,
      this.formulario.controls.sexo.value,
      this.formulario.controls.edad.value,      
      this.formulario.controls.correo.value,
      this.formulario.controls.salud.value
    );
    this.servicio.crearPaciente(this.paciente).subscribe(res =>{
      alert("hola");
      console.log(res);
      this.pacienteEventEmiter.emit(this.paciente);
    })

}
}
