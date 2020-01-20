import { Injectable } from '@angular/core';
import { Medico } from '../modelos/medico';

const NOMBRE_MEDICO = 'medico';

@Injectable()
export class ComunService {

  constructor() { }

  static guardaEnSesion(nombre: string, objeto: string) {
    localStorage.setItem(nombre, objeto);
  }

  static buscaEnSesion(nombre: string): string {
    return localStorage.getItem(nombre);
  }

  static limpiaSesion() {
    localStorage.clear();
  }

  static guardaUserEnSesion(medico: Medico) {
    this.guardaEnSesion(NOMBRE_MEDICO, JSON.stringify(medico))
  }

  static buscarMedicoEnSesion(): Medico {
    if (null == this.buscaEnSesion(NOMBRE_MEDICO)) {
      return null;
    }
    let medico = new Medico();
    medico = JSON.parse(this.buscaEnSesion(NOMBRE_MEDICO));
    return medico;
  }

}
