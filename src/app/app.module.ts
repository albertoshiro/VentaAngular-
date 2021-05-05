import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
//para utilizar tablas de material
import { MatTableModule } from "@angular/material/table";
//para una ventana de dialogo
import { MatDialogModule } from "@angular/material/dialog";
//botones
import { MatButtonModule } from "@angular/material/button";
//ventana de texto
import {  MatInputModule} from "@angular/material/input";
//snak unas ventanitas que dan un mensaje cuando se hace algo
import {  MatSnackBarModule} from "@angular/material/snack-bar";
import { DialogClienteComponent } from './cliente/dialog/dialogCliente.component';
//para implementar formularios
import {  FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    //sirve para realizar peticiones por http
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
