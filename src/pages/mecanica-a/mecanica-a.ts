import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { environment } from '../../environments/environment';


@IonicPage()
@Component({
  selector: 'page-mecanica-a',
  templateUrl: 'mecanica-a.html',
  providers: [ScreenOrientation]
})
export class MecanicaAPage {

  private lista    = new Array<any>();// cria um array do tipo any
  private monitoria = new Array<any>();
  private auxiliar2: any;
  private auxiliar:any;

  private teste='';
  private segunda1='';
  private terca1= '';
  private quarta1= '';
  private quinta1= '';
  private sexta1= '';
  private sabado1= '';

  private segunda2 = '';
  private terca2= '';
  private quarta2= '';
  private quinta2= '';
  private sexta2= '';
  private sabado2= '';

  private segunda3 = '';
  private terca3= '';
  private quarta3= '';
  private quinta3= '';
  private sexta3= '';
  private sabado3= '';
  
  private segunda4 = '';
  private terca4= '';
  private quarta4= '';
  private quinta4= '';
  private sexta4= '';
  private sabado4= '';

  private extensoDia = '';
  private extensoMes = '';

 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {



    

    console.log('ionViewDidLoad MecanicaAPage');
     
    this.screenOrientation.ORIENTATIONS.PORTRAIT;
       
    this.lista=environment.listaGeral;  
    console.log(this.lista);

    for (var h=0; h < this.lista.length; ++h) {
        if (this.lista[h].id == 1) {
           this.monitoria=this.lista[h].monitorias;             
           break;
        }
    }
    
    this.auxiliar2=this.monitoria;
    console.log(this.auxiliar2);

    for (var j=0; j<this.auxiliar2.length; ++j){
         this.auxiliar=this.auxiliar2[j].campus;
         if(this.auxiliar == 1 && this.auxiliar2[j].descricao == "Mecanica A"){  // se o campus for são leopoldo

            this.segunda1=this.auxiliar2[j].segunda1;
            this.terca1=this.auxiliar2[j].terca1;
            this.quarta1=this.auxiliar2[j].quarta1;
            this.quinta1=this.auxiliar2[j].quinta1;
            this.sexta1=this.auxiliar2[j].sexta1;
            this.sabado1=this.auxiliar2[j].sabado1;

            this.segunda2=this.auxiliar2[j].segunda2;
            this.terca2=this.auxiliar2[j].terca2;
            this.quarta2=this.auxiliar2[j].quarta2;
            this.quinta2=this.auxiliar2[j].quinta2;
            this.sexta2=this.auxiliar2[j].sexta2;
            this.sabado2=this.auxiliar2[j].sabado2;
            
            this.segunda3=this.auxiliar2[j].segunda3;
            this.terca3=this.auxiliar2[j].terca3;
            this.quarta3=this.auxiliar2[j].quarta3;
            this.quinta3=this.auxiliar2[j].quinta3;
            this.sexta3=this.auxiliar2[j].sexta3;
            this.sabado3=this.auxiliar2[j].sabado3;

            this.segunda4=this.auxiliar2[j].segunda4;
            this.terca4=this.auxiliar2[j].terca4;
            this.quarta4=this.auxiliar2[j].quarta4;
            this.quinta4=this.auxiliar2[j].quinta4;
            this.sexta4=this.auxiliar2[j].sexta4;
            this.sabado4=this.auxiliar2[j].sabado4;
         }
    }
  
  }
variaveisDaSemana(){
    this.segunda1=this.teste;
    this.teste=this.segunda1;
    this.teste=this.terca1;   
    this.teste=this.quarta1;   
    this.teste=this.quinta1;
    this.teste=this.sexta1;      
    this.teste=this.sabado1;  

    
    this.teste=this.segunda2;
    this.teste=this.terca2;   
    this.teste=this.quarta2   
    this.teste=this.quinta2;
    this.teste=this.sexta2;      
    this.teste=this.sabado2;

    
    this.teste=this.segunda3;
    this.teste=this.terca3;   
    this.teste=this.quarta3;   
    this.teste=this.quinta3;
    this.teste=this.sexta3;      
    this.teste=this.sabado3;

    
    this.teste=this.segunda4;
    this.teste=this.terca4;   
    this.teste=this.quarta4;   
    this.teste=this.quinta4;
    this.teste=this.sexta4;     
    this.teste=this.sabado4;

    this.teste=this.extensoDia;
    this.teste=this.extensoMes;
  }
}
