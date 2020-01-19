import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ComunService } from './comun.service';

@Injectable()
export class LoginGuard implements CanActivate {

  canActivate(): boolean {
    if (null != ComunService.buscarMedicoEnSesion()) {
      //console.log("Paso!!!!");
      return true;
    }
    else {
      //console.log("No pasa");
      return false;
    }

  }

}

