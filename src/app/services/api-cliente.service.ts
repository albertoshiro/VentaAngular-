//el siguiente impor se trajo gracias a que insertamos en app.module el import httpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//es para programacion reactiva
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import{Response} from '../models/response';

//esta constante seran nuestros encavezados en la solicitud http por post
//estas opciones especifican por que metodo queremos que nos regrese la respuesta]
const httpOption = {
  headers :new HttpHeaders({
    'Contend-Type' : 'applicatio/json'
  })
};

//con esto podemos decir que nuestro servicio se puede inyectar
@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {
  //esta sera mla ruta de coneccion
  url :string = 'https://localhost:44390/api/cliente';
  //el constructor en ts se pueden crear atributos que seran ocupados en toda tu clase, pero tambien puedes inyectarlos
  constructor(
    //me parece que se pone _ para constantes
    private _http : HttpClient
  ) { }
//metodo que hereda de Observable para peticiones y demas, es un generic y puedes pasarle un tipo de dato en este caso la respuesta
  getClientes() : Observable<Response>{

    //el protocolo es segun lo que hemos puesto en el backend, <>lo que va a regresar y entre ()la url a donde se realizara la solicitud
    return this._http.get<Response>(this.url);

  }
  //esto resivira un objeto que cumpla con la interfaz cliente y regresara un tipo respuesta
  add(oCliente : Cliente) : Observable<Response> {
    //en el caso de hacer peticiones por post, la url, lo que se va a enviar el objeto y las opciones que se agregaron
    return this._http.post<Response>(this.url, oCliente ,httpOption);
  }


}
