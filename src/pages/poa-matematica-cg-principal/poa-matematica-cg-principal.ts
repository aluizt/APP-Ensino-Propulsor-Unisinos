import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { environment } from '../../environments/environment';
import { PoaMatematicaCgPage } from '../poa-matematica-cg/poa-matematica-cg';

@IonicPage()
@Component({
  selector: 'page-poa-matematica-cg-principal',
  templateUrl: 'poa-matematica-cg-principal.html',
  providers: [ScreenOrientation]
})
export class PoaMatematicaCgPrincipalPage {

  private lista = new Array<any>();
  private eventos = new Array<any>();
  private monitoria = new Array<any>();
  private monitoriaSaoleo = new Array<any>();
  private monitoriaPoa = new Array<any>();
  private extensoDia = '';
  private extensoMes = '';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoaMatematicaCgPrincipalPage');

    this.screenOrientation.ORIENTATIONS.PORTRAIT;
    this.lista=environment.listaGeral;

    for (var j=0; j < this.lista.length; ++j) {
      if (this.lista[j].id == 5) {
         this.monitoria=this.lista[j].monitorias;
         this.eventos=this.lista[j].eventos;
         break;
      }
    }

    for(var i=0; i <this.monitoria.length; ++i){
      if(this.monitoria[i].descricao == "MatematicaCG" && this.monitoria[i].campus == 2){
        this.monitoriaSaoleo=this.monitoria[i].inicio;
       
        break;
      }
    }
    if (this.eventos !== undefined) { 
       this.eventos.sort(function(a,b){ return (a.data > b.data)?1: ((b.data >a.data)?-1:0);});
    }
   console.log("monitorias Matematica CG");
   console.log(this.monitoria);
   console.log(this.monitoriaSaoleo);
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

  goToMatematicaCG(){
    this.navCtrl.push(PoaMatematicaCgPage);
  }
}
