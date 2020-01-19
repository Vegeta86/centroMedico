import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormGroup, FormControl,} from '@angular/forms';
import { Ficha } from '../ficha';
import { Patologia } from '../patologia';
import { FichaService } from '../ficha.service';
import { Paciente } from '../../paciente/paciente';
import { PacienteService } from '../../paciente/paciente.service';
import { Medico } from '../../medico/medico';


@Component({
  selector: 'app-crear-ficha',
  templateUrl: './crear-ficha.component.html',
  styleUrls: ['./crear-ficha.component.css']
})
export class CrearFichaComponent implements OnInit {

  public medicoModel:Medico;
  public fichaAtencion: FormGroup;
  public patologiaEventEmiter: EventEmitter<Patologia>;
  public patologia:Patologia;

  public listaPatologias:Patologia[];
  public listaPacientes:Paciente[];
  public ficha:Ficha;
  public medicoFicha:string;

  public medico:FormControl;
  public paciente:FormControl;
  public patologiaSelec:FormControl;
  public nuevaPat:FormControl;
  public descripcion:FormControl;

  constructor(private servicio: FichaService,private pacienteServ: PacienteService) {
    this.patologiaEventEmiter = new EventEmitter<Patologia>();
    this.listaPatologias=[];
    this.listaPacientes=[];
    this.medico=new FormControl();
    this.paciente= new FormControl();
    this.patologiaSelec=new FormControl();
    this.nuevaPat=new FormControl();
    this.descripcion=new FormControl();
   }

  ngOnInit() {
    this.listarMedicos();
    this.listarPatologias();
    this.listarPacientes();

    this.fichaAtencion = new FormGroup({
      medico: this.medico,
      paciente: this.paciente,
      patologiaSelec: this.patologiaSelec,
      nuevaPat:this.nuevaPat,
      descripcion:this.descripcion
    });
  }

  listarPatologias(){
    this.servicio.listarPatologia().subscribe(res =>{
      this.listaPatologias=res;
      console.log(this.listaPatologias)
    })
  }

  listarPacientes(){
    this.pacienteServ.listarPacientes().subscribe(res=>{
      this.listaPacientes=res;
    })
  }

  listarMedicos(){
    this.medicoModel = JSON.parse(localStorage.getItem("medico"));
  }

  crearPatologia(){
    this.patologia = new Patologia();
    this.patologia.nombre = this.fichaAtencion.controls.nuevaPat.value;
    this.servicio.crearPatologia(this.patologia).subscribe(res=>{
      this.patologiaEventEmiter.emit(this.patologia);
      this.listaPatologias.push(this.patologia);
    });
  }

  crearFicha(){
    this.ficha = new Ficha(
      this.medico.value,
      this.paciente.value,
      this.patologiaSelec.value,
      this.descripcion.value,
    );
    console.log(this.ficha);
    this.servicio.crearFicha(this.ficha).subscribe(res=>{
        alert("Ficha creada con exito");
        console.log(res);
    });
  }

} 
