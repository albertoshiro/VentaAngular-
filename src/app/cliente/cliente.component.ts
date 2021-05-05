import { Component, OnInit } from '@angular/core';
import { ApiClienteService } from '../services/api-cliente.service';
import{Response} from '../models/response';
import { DialogClienteComponent } from "./dialog/dialogCliente.component";
import {MatDialog  } from "@angular/material/dialog";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst : any ;
  //el siguiente arreglo es para utilizar el mat table y ocuparlas como base de columnas
  public columnas : string[] = ['id','nombre'];

  constructor(
    //inyectamos la funcionalidad del servicio
    private apiCliente : ApiClienteService,
    //creamos el objeto
    public dialog :MatDialog
  ) {
    //en este caso al crear este objeto ejecutara el codigo del objeto de tipo apiclienteservice su metodo get clientes , nota siempre que la informacion llegue de un observable devemos resivirlo con un suscribe, ya que es la programacion reactiva
    //apiCliente.getClientes().subscribe(response =>{
      //console.log(response);
    //});
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.apiCliente.getClientes().subscribe(response => {
      this.lst = response.data;
    });
  }
  openAdd(){
    //a este metodo le asignamos la ventana dialog creada en el constructor le pasamos eso si el nombre de nuestro componente dialog, en este caso dialogClienteComponent
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width : '300'
    });
    //la siguiente linea es para darle una instruccion despues de que se cierra el componente que esta en el contructor, como es un observador al parecer devemos ponerle un suscribe
    dialogRef.afterClosed().subscribe(result => {this.getClientes()});
  }

}
