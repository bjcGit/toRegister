import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InvitadosComponent } from './pages/invitados/invitados.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajadorComponent } from './pages/trabajador/trabajador.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InvitadosComponent,
    TrabajadoresComponent,
    InicioComponent,
    TrabajadorComponent,
    InvitadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
