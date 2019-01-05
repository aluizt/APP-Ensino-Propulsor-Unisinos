import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import swal from 'sweetalert2'
import { Organica1principalPage } from '../organica1principal/organica1principal';
import { Organica2principalPage } from '../organica2principal/organica2principal';
import { FisicoquimicaprincipalPage } from '../fisicoquimicaprincipal/fisicoquimicaprincipal';
import { QuimicageralprincipalPage } from '../quimicageralprincipal/quimicageralprincipal';

@IonicPage()
@Component({
  selector: 'page-quimica',
  templateUrl: 'quimica.html',
})
export class QuimicaPage {


  private teste='hehehehe';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuimicaPage');
  }  
  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Caro Aluno',
      subTitle: 'Esta monitoria não esta disponivel no campus de POA !',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert1() {
    swal({
      backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(Organica1principalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.showAlert();
                 } else {
                   resolve('Você precisa selecionar um polo !')
           }
         })
       }
     })
   }
 
   showAlert2() {
    swal({
      backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(Organica2principalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.showAlert();
                 } else {
                   resolve('Você precisa selecionar um polo !')
           }
         })
       }
     })
   }
   showAlert3() {
    swal({
      backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(FisicoquimicaprincipalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.showAlert();
                 } else {
                   resolve('Você precisa selecionar um polo !')
           }
         })
       }
     })
   }

   showAlert4() {
    swal({
      backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(QuimicageralprincipalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.showAlert();
                 } else {
                   resolve('Você precisa selecionar um polo !')
           }
         })
       }
     })
   }
}
