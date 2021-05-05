import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/cliente";
import { ApiClienteService } from "src/app/services/api-cliente.service";

//decoradores para darle un comportamiento a la clase
//en este caso le asignas su archivo html
@Component({
  templateUrl : 'dialogCliente.component.html'
})

export class DialogClienteComponent{
  public nombre : string = "";
  constructor(
    //esto es para que haga referencia a si mismo, le pasas con que tipo de objeto trabajara en este caso con el mismo, para poder mandarle ordenes por ejemplo cerrarse
    public dialogRef : MatDialogRef<DialogClienteComponent>,
    //este ya que desde este componente madaremos a llamar el servicio add
    public apiCliente : ApiClienteService,
    public snakBar : MatSnackBar
  ){

  }

  close(){
    this.dialogRef.close();
  }

  addCliente(){
    const oCliente :Cliente ={nombre : this.nombre};
    this.apiCliente.add(oCliente).subscribe(response =>{
      if(response.exito==1){
        this.dialogRef.close();
        this.snakBar.open("Cliente Insertado con exito","",{
          duration : 2000
        });
      }
    });
  }



}
