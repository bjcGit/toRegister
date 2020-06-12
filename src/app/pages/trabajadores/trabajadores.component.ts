import { Component, OnInit } from '@angular/core';
import { TrabajadorModel } from '../../models/trabajador.model';
import { NgForm } from '@angular/forms';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  
  trabajador = new TrabajadorModel ();

  constructor ( private trabajadorServicio: TrabajadoresService ) { }

  ngOnInit(){
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

    
    if(this.trabajador.id){
     peticion = this.trabajadorServicio.actualiTraba(this.trabajador);
     
    }else{
     peticion = this.trabajadorServicio.crearTrabajador(this.trabajador);       
    }   

    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.trabajador.cedula,
        text: 'Puede seguir',
        icon: 'success'
      });
    });

    if(this.trabajador.estado == false){
      peticion.subscribe(resp =>{
        Swal.fire({
          title: this.trabajador.cedula,
          text: 'Salió',
          icon: 'success'
        });
      });

    }
  }

 

  

}
