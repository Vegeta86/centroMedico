import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../../modelos/paciente';
import { PacienteService } from '../../servicios/paciente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public formulario: FormGroup;
  public pacienteEventEmiter: EventEmitter<Paciente>;

  public listaSexo: string[] = ["Masculino", "Femenino"];
  public listaSalud: string[] = ["Fonasa", "Isapre", "Indigente"];

  public paciente: Paciente;

  public nombre: FormControl;
  public paterno: FormControl;
  public materno: FormControl;
  public sexo: FormControl;
  public edad: FormControl;
  public correo: FormControl;
  public salud: FormControl;


  constructor(private servicio: PacienteService) {
    this.pacienteEventEmiter = new EventEmitter<Paciente>();
    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]);
    this.paterno = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]);
    this.materno = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]);
    this.sexo = new FormControl('', Validators.required);
    this.edad = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.correo = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.cl')]);
    this.salud = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      sexo: this.sexo,
      edad: this.edad,
      correo: this.correo,
      salud: this.salud
    });
  }


  crearPaciente() {
    this.paciente = new Paciente(
      this.nombre.value,
      this.paterno.value,
      this.materno.value,
      this.sexo.value,
      this.edad.value,
      this.correo.value,
      this.salud.value
    );
    this.servicio.crearPaciente(this.paciente).subscribe(res => {
      alert("hola");
      console.log(res);
      this.pacienteEventEmiter.emit(this.paciente);
    })

  }
}
