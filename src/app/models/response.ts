//aqui va la respuesta del objeto que segun las peticiones de este fron se le aran llegar y tomaran este molde
//en este caso este sera un molde dado que es un interface
export interface Response{
  exito: number;
  mensaje : string;
  data : any;
  //any es un tipo de dato cualquiera

}
