import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AreasProvider } from '../../providers/areas/areas';
import { environment } from '../../environments/environment';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
//import firebase from '@ionic-native/firebase';
import { Credenciais } from '../../modelos/credenciais';
import { StorageService } from '../../service/storage.service';


/*const config = {
  apiKey: "AIzaSyDU2TvJevZypq1gMrqWObHoCKYyWw8uwb8",
  authDomain: "testeapp-5eea5.firebaseapp.com",
  databaseURL: "https://testeapp-5eea5.firebaseio.com",
  projectId: "testeapp-5eea5",
  storageBucket: "testeapp-5eea5.appspot.com",
  messagingSenderId: "308556287061"
}; */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [AreasProvider,ScreenOrientation]
})
export class IntroPage {
  
  private lista = new Array<any>();// cria um array do tipo any
  
  credencial:Credenciais = {
    nome :"",
    email:""
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private aProvider:AreasProvider,
              private screenOrientation: ScreenOrientation,
              public storage: StorageService) {
               
              //firebase.initializeApp(config);  
  }

  ionViewDidLoad() {
    let varteste = (this.storage.getLocalUser());
    this.credencial.nome=varteste.nome;
    this.credencial.email=varteste.email;

    environment.usuario[0]=this.credencial.nome;
    
    this.screenOrientation.ORIENTATIONS.PORTRAIT;
    console.log(this.screenOrientation.type); 

    console.log('Carregado ionViewDidLoad FisicaPage');
    this.aProvider.getAreas().subscribe(
      data =>{
        const response = (data as any); // cast para o tupo any
        this.lista = response;

        console.log("lista completa produzida no intro.ts");
        console.log(this.lista); 
        environment.listaGeral=this.lista;
        console.log("lista no environment");
        console.log(environment.listaGeral); 
      }  
    )
  }

  goTo(){
    
    if(this.credencial.nome!="" && this.credencial.email!=""){
      this.storage.setLocalUser(this.credencial);
      let varteste = this.storage.getLocalUser();
      console.log("valore armazenados");
      console.log(varteste);

      this.navCtrl.push(TabsPage);
    }

    
  }


}
