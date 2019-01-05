import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FisicaPage } from '../fisica/fisica';
import { MatematicaPage } from '../matematica/matematica';
import { PortuguesprincipalPage } from '../portuguesprincipal/portuguesprincipal';
import { QuimicaPage } from '../quimica/quimica';
import { EstatisticaPage } from '../estatistica/estatistica';
import { EstatisticaprincipalPage } from '../estatisticaprincipal/estatisticaprincipal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToFisica(){
    this.navCtrl.push(FisicaPage);
  }
  
  goToPortugues(){
    this.navCtrl.push(PortuguesprincipalPage);
  }
  goToQuimica(){
    this.navCtrl.push(QuimicaPage);
  }
  goToInformatica(){
    //this.navCtrl.push();    
  }  
  
  goToEstatistica(){
    this.navCtrl.push(EstatisticaprincipalPage);
  }
  goToMatematica(){
    this.navCtrl.push(MatematicaPage);
  }
}
