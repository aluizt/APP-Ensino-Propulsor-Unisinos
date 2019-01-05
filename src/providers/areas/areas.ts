import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

//import { environment } from '../../environments/environment';


@Injectable()
export class AreasProvider {  

  //private baseApiPath="https://tavares007.herokuapp.com/areas" //https://tavares007.herokuapp.com/areas";
  private baseApiPath="http://localhost:8080/areas";

  public listaAreasProvider = new Array<any>();// cria um array do tipo any

  constructor(public http: HttpClient, ) {
    
    console.log('Ola Carregado AreasProvider Provider ');
    
  }


  getAreas(){
  
    return this.http.get(this.baseApiPath);
  }
  
  getLista(){
    return this.listaAreasProvider;
  }
}
