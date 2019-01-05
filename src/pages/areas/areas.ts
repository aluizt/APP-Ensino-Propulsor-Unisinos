import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreasProvider } from '../../providers/areas/areas';

/**
 * Generated class for the AreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areas',
  templateUrl: 'areas.html',
  providers: [AreasProvider]
})
export class AreasPage {

  public lista_de_areas = new Array<any>();// cria um array do tipo any

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private areaProvider: AreasProvider) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AreasPage');
    
    this.areaProvider.getAreas().subscribe(
      data =>{
        const response = (data as any); // cast para o tupo any
      
        this.lista_de_areas = response;
        console.log(this.lista_de_areas);

      },error =>{
        console.log(error);
      }
    )
  }

  testeBotao(){
  
  }

}
