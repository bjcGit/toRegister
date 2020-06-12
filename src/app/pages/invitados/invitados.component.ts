import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../services/trabajadores.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { InvitadosModel } from '../../models/invitados.model';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {

  constructor(private invitadosServicio: TrabajadoresService) { }

  invitados = new InvitadosModel ();

  ngOnInit(): void {
  }
  guardar (form: NgForm){

    if(form.invalid){
      console.log('Formulario no valido');
      return;
    }
     
    Swal.fire({
      title: 'Espere',
      text: 'Confimando',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion : Observable<any>;

    
    if(this.invitados.id){
   peticion = this.invitadosServicio.actuaInvi(this.invitados);
     
    }else{
   peticion = this.invitadosServicio.crearInvitado(this.invitados);       
    }   
    
    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.invitados.cedula,
        text: 'Agregado',
        icon: 'success'
      });
    });
    
  }


}
