import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
 
})
export class FormularioPage {

  private url="https://forms.office.com/Pages/ResponsePage.aspx?id=Kiu3yTQLJUS5x8JFnsAVHxTHFc_ersNInvFpv-ZwPtlUNVVNMTJNVU5HTVE5VDdNQlJaQ0JPM1NNNC4u";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,             
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
    
    this.abreLink();
  }
  abreLink(){
    window.location.href="https://forms.office.com/Pages/ResponsePage.aspx?id=Kiu3yTQLJUS5x8JFnsAVHxTHFc_ersNInvFpv-ZwPtlUNVVNMTJNVU5HTVE5VDdNQlJaQ0JPM1NNNC4u";
  }
  
}
