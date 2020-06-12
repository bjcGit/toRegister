import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';
import { InvitadosComponent } from './pages/invitados/invitados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajadorComponent } from './pages/trabajador/trabajador.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';

const routes: Routes = [
  {path: 'trabajadores', component: InicioComponent,
  children: [
    {path: 'trabajadores', component: TrabajadoresComponent},
    {path: 'invitados', component: InvitadosComponent}
  ]
},  
  {path: 'trabajador', component: TrabajadorComponent},
  {path: 'invitado', component: InvitadoComponent},
  
  {path: '**', pathMatch: 'full', redirectTo:'trabajadores'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
