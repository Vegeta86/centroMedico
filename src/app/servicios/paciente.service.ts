import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../modelos/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API: string = 'http://localhost:3004/fichaPaciente';

  constructor(private httpClient: HttpClient) { }

  crearPaciente(paciente: Paciente): Observable<Paciente[]> {
    return this.httpClient.post<Paciente[]>(this.API, paciente);
  }

  buscarPaciente(paciente: Paciente): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.API);

  }

  listarPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.API);
  }

  /*
  actualizarLibro(libro:Ficha): Observable<Ficha[]>{
    return this.httpClient.put<Ficha[]>(this.API,ficha, httpOptions);
  }*/

  borrarPaciente(id): Observable<Paciente[]> {
    return this.httpClient.delete<Paciente[]>(this.API + '/' + id);
  }

}
