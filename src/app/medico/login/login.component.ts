import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';
import { ComunService } from '../comun.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private servicioMedico: MedicoService) {
    this.formularioLogin = this.formBuilder.group({
      nombre: [''],
      password: ['']

    });
  }

  ngOnInit() {
  }

  enviarLogin() {
    if (this.formularioLogin.valid) {

      let medico = new Medico();
      medico.password = this.formularioLogin.value.password;
      medico.nombre = this.formularioLogin.value.nombre;

      this.servicioMedico.loginMedico(medico).subscribe(
        res => {
          if (res.length > 0) {
            medico = res[0];
            medico.password = '';
            ComunService.guardaUserEnSesion(medico);
            this.router.navigate(['/listaPacientes'])
          }
        }
      )

    }
  }

}
