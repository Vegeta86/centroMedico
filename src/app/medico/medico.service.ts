import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './medico';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MedicoService {


  private API: string = 'http://localhost:3004/medico';

  constructor(private httpClient: HttpClient) { }

  crearMedico(medico: Medico): Observable<Medico[]> {
    return this.httpClient.post<Medico[]>(this.API, medico);
  }

  buscarMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.API);
  }

  /*
  actualizarMedico(medico:Medico): Observable<Medico[]>{
    return this.httpClient.put<Medico[]>(this.API,medico, httpOptions);
  }*/

  borrarMedico(id): Observable<Medico[]> {
    return this.httpClient.delete<Medico[]>(this.API + '/' + id);
  }

  loginMedico(medico: Medico): Observable<Medico[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('pass', medico.password);
    httpParams = httpParams.set('usuario', medico.nombre);
    //console.log(httpParams.toString());
    return this.httpClient.get<Medico[]>(this.API, { params: httpParams });
  }

}