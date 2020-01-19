import { Component } from '@angular/core';
import { Medico } from './medico/medico';
import { Router } from '@angular/router';
import { ComunService } from './medico/comun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'centroMedicoAng7';

  public medico: Medico;

  constructor(private router: Router) {

  }

  ngDoCheck() {
    this.medico = ComunService.buscarMedicoEnSesion();
  }

  cerrarSesion() {
    console.log("Cierra sesion");
    ComunService.limpiaSesion();
    this.router.navigate(['/login'])
  }
}
