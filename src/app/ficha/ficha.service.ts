import { Injectable } from '@angular/core';
import { Ficha } from './ficha';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patologia } from './patologia';

@Injectable()
export class FichaService {

  private API: string = 'http://localhost:3004/fichaAtencion';
  private API_PATOLOGIA: string = 'http://localhost:3004/patologia';

  constructor(private httpClient: HttpClient) { }

  crearFicha(ficha: Ficha): Observable<Ficha[]> {
    return this.httpClient.post<Ficha[]>(this.API, ficha);
  }

  listarFichas(): Observable<Ficha[]> {
    return this.httpClient.get<Ficha[]>(this.API);
  }

  /*
  actualizarLibro(libro:Ficha): Observable<Ficha[]>{
    return this.httpClient.put<Ficha[]>(this.API,ficha, httpOptions);
  }*/

  borrarPaciente(id): Observable<Ficha[]> {
    return this.httpClient.delete<Ficha[]>(this.API + '/' + id);
  }

  listarPatologia(): Observable<Patologia[]> {
    return this.httpClient.get<Patologia[]>(this.API_PATOLOGIA);
  }

  crearPatologia(patologia: Patologia): Observable<Patologia[]> {
    return this.httpClient.post<Patologia[]>(this.API_PATOLOGIA, patologia);
  }


}
