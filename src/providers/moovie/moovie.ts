import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class MoovieProvider {

  //private baseApiPath="https://tavares007.herokuapp.com/areas" //https://tavares007.herokuapp.com/areas";
  private baseApiPath="http://localhost:8080/areas";

  public movie = new Array<any>();// cria um array do tipo any

  constructor(public http: HttpClient, ) {
    
    console.log('Ola Carregado Movie Provider ');
  
 
  }


  getCria(){
    this.getAreas().subscribe(
      data =>{
        const response = (data as any); // cast para o tupo any
        this.movie = response;
      }      
    )
    
    return this.movie;

  }
  getAreas(){
  
    return this.http.get(this.baseApiPath);
  }
  
 
}
