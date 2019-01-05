import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AreasProvider } from '../../providers/areas/areas';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlgebraPage } from '../algebra/algebra';
import { environment } from '../../environments/environment';

@IonicPage()
@Component({
  selector: 'page-algebraprincipal',
  templateUrl: 'algebraprincipal.html',
  providers: [AreasProvider,
    ScreenOrientation]
})
export class AlgebraprincipalPage {

  public lista_algebra = new Array<any>();// cria um array do tipo any
  private eventosalgebra = new Array<any>();
  private monitoriaalgebra = new Array<any>();
  private monitoriaalgebra1:string;
  private monitoriaalgebra2:string;
  private extensoDia = '';
  private extensoMes = '';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlgebraprincipalPage');
    console.log(environment.listaGeral);
    this.screenOrientation.ORIENTATIONS.PORTRAIT;
    this.lista_algebra=environment.listaGeral;

    console.log("lista completa");
    console.log(this.lista_algebra);

    for (var j=0; j < this.lista_algebra.length; ++j) {
      if (this.lista_algebra[j].id == 5) {
         this.monitoriaalgebra=this.lista_algebra[j].monitorias;
         this.eventosalgebra=this.lista_algebra[j].eventos;
         break;
      }
    }
   this.monitoriaalgebra1=this.monitoriaalgebra[0].inicio;
   this.monitoriaalgebra2=this.monitoriaalgebra[1].inicio;
   if (this.eventosalgebra !== undefined) { 
      this.eventosalgebra.sort(function(a,b){ return (a.data > b.data)?1: ((b.data >a.data)?-1:0);});
   }
   

  }
  
  formatarDataDia(d) {
    var data=new Date(d);
       
    var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
       
    var dias = data.getDay();
    
    return this.extensoDia=diasSemana[dias];
    
  }
  formatarDataMes(d) {
    var data=new Date(d);
    
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    var mes = data.getMonth();
        
    return this.extensoMes=meses[mes];
    
  }

  goToAlgebra(){
    this.navCtrl.push(AlgebraPage);
  }
  problemaVariavies(){
    this.monitoriaalgebra1 = this.monitoriaalgebra2
    this.monitoriaalgebra2 = this.monitoriaalgebra1
    this.extensoDia = this.extensoMes;
    this.extensoMes = this.extensoDia;
  }
}
