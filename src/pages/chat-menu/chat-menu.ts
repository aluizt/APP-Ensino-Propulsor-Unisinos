import { IonicPage, NavController, AlertController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { ChatPage } from "../chat/chat";
import { StorageService } from "../../service/storage.service";

@IonicPage()
@Component({
  selector: 'page-chat-menu',
  templateUrl: 'chat-menu.html',
})
export class ChatMenuPage {


  credencial:any= {
    nome :"",
    email:""
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController,
              public storage: StorageService) {
  }

  ionViewDidLoad() {

    let varteste = (this.storage.getLocalUser());
    this.credencial.nome=varteste.nome;
    this.credencial.email=varteste.email;

    console.log('ionViewDidLoad ChatMenuPage');
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Caro Aluno',
      subTitle: 'Esta monitoria não esta disponivel no campus de POA !',
      buttons: ['OK']
    });
    alert.present();
  }
  
  goToSalaFisica(){
    this.navCtrl.push(ChatPage,{param1 : 1 ,param2 :this.credencial.nome,
                                param3 : this.credencial.email, param4:"Fisica"});
    
  }

  goToSalaPortugues(){
    this.navCtrl.push(ChatPage,{param1 : 2 ,param2 :this.credencial.nome,
      param3 : this.credencial.email, param4:"Português"});
  }

  goToSalaQuimica(){
    this.navCtrl.push(ChatPage,{param1 : 3 ,param2 :this.credencial.nome,
      param3 : this.credencial.email, param4:"Quimica"});
  }

  goToSalaMatematica(){
    this.navCtrl.push(ChatPage,{param1 : 4 ,param2 :this.credencial.nome,
      param3 : this.credencial.email, param4:"Matematica"});
  }

  goToSalaEstatistica(){
    this.navCtrl.push(ChatPage,{param1 : 5 ,param2 :this.credencial.nome,
      param3 : this.credencial.email, param4:"Estatistica"});
  }

   
}
