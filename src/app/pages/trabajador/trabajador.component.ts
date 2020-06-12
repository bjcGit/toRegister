import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../services/trabajadores.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styles: [
  ]
})
export class TrabajadorComponent implements OnInit {

  constructor( private servicioTrabajador: TrabajadoresService ) { }

  ngOnInit(): void {
    this.servicioTrabajador.getTrabajadores()
    .subscribe();
  }
  


}
