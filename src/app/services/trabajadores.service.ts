import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrabajadorModel } from '../models/trabajador.model';
import { map } from 'rxjs/Operators';
import { InvitadosModel } from '../models/invitados.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  private url = 'https://registro-dbac0.firebaseio.com';
  

  constructor( private http: HttpClient ) { }


  crearTrabajador ( trabajador : TrabajadorModel ){

    return  this.http.post(`${this.url}/trabajadores.json`, trabajador)
    .pipe(
      map((resp : any) =>{
          trabajador.id = resp.name;
          return trabajador;
      })    
    );
  }
  actualiTraba(trabajador:TrabajadorModel){

    const trabajadorTemp = {
      ...trabajador
    };

    delete trabajadorTemp.id

    return this.http.put(`${this.url}/trabajadores/${trabajador.id}.json`, trabajadorTemp);
  }
  getTrabajadores(){
    return this.http.get(`${this.url}/trabajadores.json`);
  }

  crearInvitado( invitado : InvitadosModel){
    return this.http.post(`${this.url}/invitados.json`, invitado)
    .pipe(
      map((resp :any) =>{
        invitado.id = resp.name;
        return invitado;
      })
    );
  }
  actuaInvi(invitado:InvitadosModel){
  const inviTemp ={
    ...invitado
  };
  delete inviTemp.id
  return this.http.put(`${this.url}/invitados/${invitado.id}.json`,inviTemp);
  }

}
